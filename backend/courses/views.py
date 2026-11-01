from django.shortcuts import render

# Create your views here.
from rest_framework import filters, viewsets
from .models import Course
from .serializers import CourseSerializer


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.select_related("teacher")
    serializer_class = CourseSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ["name", "code"]