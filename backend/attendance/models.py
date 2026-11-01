from django.db import models

# Create your models here.
from django.db import models


class Attendance(models.Model):
    PRESENT = "present"
    ABSENT = "absent"
    STATUS_CHOICES = [(PRESENT, "Present"), (ABSENT, "Absent")]

    student = models.ForeignKey(
        "students.Student", on_delete=models.CASCADE, related_name="attendance"
    )
    date = models.DateField()
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default=PRESENT)

    class Meta:
        ordering = ["-date", "-id"]
        unique_together = ("student", "date")

    def __str__(self):
        return f"{self.student.name} - {self.date} - {self.status}"