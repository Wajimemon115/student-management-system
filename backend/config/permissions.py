from rest_framework.permissions import SAFE_METHODS, BasePermission

WRITE_ROLES = {"admin", "teacher"}


def get_role(user):
    if user.is_superuser:
        return "admin"
    if user.groups.filter(name="Teacher").exists():
        return "teacher"
    return "student"


class RoleBasedAccess(BasePermission):
    """Any logged-in user can read. Only admins and teachers can create, edit or delete."""

    def has_permission(self, request, view):
        user = request.user
        if not user or not user.is_authenticated:
            return False
        if request.method in SAFE_METHODS:
            return True
        return get_role(user) in WRITE_ROLES