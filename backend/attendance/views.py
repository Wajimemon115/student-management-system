from django.db import transaction
from rest_framework import filters, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Attendance
from .serializers import AttendanceSerializer, BulkAttendanceSerializer


class AttendanceViewSet(viewsets.ModelViewSet):
    serializer_class = AttendanceSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ["student__name", "student__roll_number"]

    def get_queryset(self):
        qs = Attendance.objects.select_related("student")
        student = self.request.query_params.get("student")
        date = self.request.query_params.get("date")
        course = self.request.query_params.get("course")
        if student:
            qs = qs.filter(student_id=student)
        if date:
            qs = qs.filter(date=date)
        if course:
            qs = qs.filter(student__course_id=course)
        return qs

    @action(detail=False, methods=["post"], url_path="bulk")
    def bulk(self, request):
        """Create or update attendance for many students on one date."""
        serializer = BulkAttendanceSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        date = serializer.validated_data["date"]
        records = serializer.validated_data["records"]

        with transaction.atomic():
            for record in records:
                Attendance.objects.update_or_create(
                    student=record["student"],
                    date=date,
                    defaults={"status": record["status"]},
                )

        return Response({"date": date, "saved": len(records)})