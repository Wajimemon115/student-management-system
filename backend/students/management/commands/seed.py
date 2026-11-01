from datetime import date, timedelta

from django.core.management.base import BaseCommand

from attendance.models import Attendance
from courses.models import Course
from results.models import Result
from students.models import Student
from teachers.models import Teacher


class Command(BaseCommand):
    help = "Seed the database with sample data"

    def handle(self, *args, **kwargs):
        if Teacher.objects.exists():
            self.stdout.write("Data already exists, skipping.")
            return

        teachers = [
            Teacher.objects.create(name="Dr. Ayesha Malik", email="ayesha@studenthub.com", phone="0300-1111111", subject="Computer Science"),
            Teacher.objects.create(name="Prof. Usman Tariq", email="usman@studenthub.com", phone="0300-2222222", subject="Mathematics"),
            Teacher.objects.create(name="Ms. Hina Raza", email="hina@studenthub.com", phone="0300-3333333", subject="Physics"),
        ]

        courses = [
            Course.objects.create(name="Computer Science", code="CS101", duration="4 years", teacher=teachers[0]),
            Course.objects.create(name="Mathematics", code="MATH101", duration="3 years", teacher=teachers[1]),
            Course.objects.create(name="Physics", code="PHY101", duration="3 years", teacher=teachers[2]),
        ]

        students = [
            Student.objects.create(name="Ali Khan", roll_number="S-001", email="ali@example.com", phone="0311-1111111", date_of_birth=date(2004, 3, 12), address="Islamabad", course=courses[0]),
            Student.objects.create(name="Sara Ahmed", roll_number="S-002", email="sara@example.com", phone="0311-2222222", date_of_birth=date(2003, 7, 25), address="Rawalpindi", course=courses[1]),
            Student.objects.create(name="Bilal Hussain", roll_number="S-003", email="bilal@example.com", phone="0311-3333333", date_of_birth=date(2004, 11, 2), address="Lahore", course=courses[2]),
        ]

        # 3 students x 2 exams = 6 results
        marks = {"S-001": (85, 92), "S-002": (74, 68), "S-003": (55, 81)}
        for s in students:
            for exam, m in zip(["Midterm", "Final"], marks[s.roll_number]):
                Result.objects.create(student=s, course=s.course, exam=exam, marks=m)

        # 10 attendance records
        today = date.today()
        for i in range(10):
            Attendance.objects.create(
                student=students[i % 3],
                date=today - timedelta(days=i // 3),
                status="absent" if i == 4 else "present",
            )

        self.stdout.write(self.style.SUCCESS("Sample data created."))