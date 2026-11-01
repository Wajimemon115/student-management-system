from rest_framework.decorators import api_view
from rest_framework.response import Response

from attendance.models import Attendance
from courses.models import Course
from results.models import Result
from students.models import Student
from teachers.models import Teacher


@api_view(["GET"])
def dashboard_stats(request):
    return Response(
        {
            "students": Student.objects.count(),
            "courses": Course.objects.count(),
            "teachers": Teacher.objects.count(),
            "results": Result.objects.count(),
            "attendance": Attendance.objects.count(),
        }
    )