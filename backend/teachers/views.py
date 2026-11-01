from django.shortcuts import render

# Create your views here.
from rest_framework import filters, viewsets
from .models import Teacher
from .serializers import TeacherSerializer


class TeacherViewSet(viewsets.ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ["name", "email", "subject"]