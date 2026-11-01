from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from .permissions import get_role


def user_payload(user):
    full_name = f"{user.first_name} {user.last_name}".strip()
    return {
        "id": user.id,
        "username": user.username,
        "email": user.email,
        "full_name": full_name or user.username,
        "role": get_role(user),
    }


class LoginSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        data["user"] = user_payload(self.user)
        return data


class LoginView(TokenObtainPairView):
    serializer_class = LoginSerializer


@api_view(["GET"])
def me(request):
    return Response(user_payload(request.user))