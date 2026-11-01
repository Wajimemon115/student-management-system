from django.shortcuts import render

# Create your views here.
from rest_framework import filters, viewsets
from .models import Result
from .serializers import ResultSerializer


class ResultViewSet(viewsets.ModelViewSet):
    serializer_class = ResultSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ["student__name", "exam", "course__name"]

    def get_queryset(self):
        qs = Result.objects.select_related("student", "course")
        student = self.request.query_params.get("student")
        course = self.request.query_params.get("course")
        if student:
            qs = qs.filter(student_id=student)
        if course:
            qs = qs.filter(course_id=course)
        return qs