from rest_framework import filters, viewsets
from .models import Student
from .serializers import StudentSerializer


class StudentViewSet(viewsets.ModelViewSet):
    serializer_class = StudentSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ["name", "roll_number", "email"]
    ordering_fields = ["roll_number", "name"]

    def get_queryset(self):
        qs = Student.objects.select_related("course")
        course = self.request.query_params.get("course")
        if course:
            qs = qs.filter(course_id=course)
        return qs