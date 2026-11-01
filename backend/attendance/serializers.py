from rest_framework import serializers
from students.models import Student
from .models import Attendance


class AttendanceSerializer(serializers.ModelSerializer):
    student_name = serializers.CharField(source="student.name", read_only=True)
    roll_number = serializers.CharField(source="student.roll_number", read_only=True)

    class Meta:
        model = Attendance
        fields = ["id", "student", "student_name", "roll_number", "date", "status"]


class BulkRecordSerializer(serializers.Serializer):
    student = serializers.PrimaryKeyRelatedField(queryset=Student.objects.all())
    status = serializers.ChoiceField(choices=Attendance.STATUS_CHOICES)


class BulkAttendanceSerializer(serializers.Serializer):
    date = serializers.DateField()
    records = BulkRecordSerializer(many=True, allow_empty=False)