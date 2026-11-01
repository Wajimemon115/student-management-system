from rest_framework import serializers
from .models import Course


class CourseSerializer(serializers.ModelSerializer):
    teacher_name = serializers.CharField(
        source="teacher.name", read_only=True, allow_null=True
    )

    class Meta:
        model = Course
        fields = ["id", "name", "code", "duration", "teacher", "teacher_name"]