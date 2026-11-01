from django.contrib.auth.models import Group, User
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    help = "Create demo teacher and student users (change these passwords for real use)"

    def handle(self, *args, **kwargs):
        teacher_group, _ = Group.objects.get_or_create(name="Teacher")

        users = [
            ("teacher1", "Teacher@123", "Sara", "Ahmed", teacher_group),
            ("student1", "Student@123", "Ali", "Khan", None),
        ]

        for username, password, first, last, group in users:
            if User.objects.filter(username=username).exists():
                self.stdout.write(f"{username} already exists, skipping.")
                continue
            user = User.objects.create_user(
                username=username, password=password, first_name=first, last_name=last
            )
            if group:
                user.groups.add(group)
            self.stdout.write(self.style.SUCCESS(f"Created {username} / {password}"))