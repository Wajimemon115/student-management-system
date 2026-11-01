from django.db import models

# Create your models here.
from django.core.validators import MaxValueValidator
from django.db import models


def calculate_grade(marks):
    if marks >= 90:
        return "A+"
    if marks >= 80:
        return "A"
    if marks >= 70:
        return "B"
    if marks >= 60:
        return "C"
    if marks >= 50:
        return "D"
    return "F"


class Result(models.Model):
    student = models.ForeignKey(
        "students.Student", on_delete=models.CASCADE, related_name="results"
    )
    course = models.ForeignKey(
        "courses.Course", on_delete=models.CASCADE, related_name="results"
    )
    exam = models.CharField(max_length=100)  # e.g. "Midterm"
    marks = models.PositiveIntegerField(validators=[MaxValueValidator(100)])
    grade = models.CharField(max_length=3, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-id"]

    def save(self, *args, **kwargs):
        self.grade = calculate_grade(self.marks)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.student.name} - {self.exam}: {self.marks}"