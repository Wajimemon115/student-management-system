from rest_framework import serializers
from .models import Student


class StudentSerializer(serializers.ModelSerializer):
    course_name = serializers.CharField(
        source="course.name", read_only=True, allow_null=True
    )

    class Meta:
        model = Student
        fields = [
            "id",
            "name",
            "roll_number",
            "email",
            "phone",
            "date_of_birth",
            "address",
            "course",
            "course_name",
        ]