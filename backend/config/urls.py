from django.contrib import admin
from django.http import JsonResponse
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView

from attendance.views import AttendanceViewSet
from courses.views import CourseViewSet
from results.views import ResultViewSet
from students.views import StudentViewSet
from teachers.views import TeacherViewSet

from .auth_views import LoginView, me
from .views import dashboard_stats


def health(request):
    return JsonResponse({"status": "ok", "message": "StudentHub API is running"})


router = DefaultRouter()
router.register("students", StudentViewSet, basename="student")
router.register("courses", CourseViewSet, basename="course")
router.register("teachers", TeacherViewSet, basename="teacher")
router.register("results", ResultViewSet, basename="result")
router.register("attendance", AttendanceViewSet, basename="attendance")

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/health/", health),
    path("api/auth/login/", LoginView.as_view()),
    path("api/auth/refresh/", TokenRefreshView.as_view()),
    path("api/auth/me/", me),
    path("api/dashboard/stats/", dashboard_stats),
    path("api/", include(router.urls)),
]