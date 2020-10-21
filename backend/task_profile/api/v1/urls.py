from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    TaskerProfileViewSet,
    InviteCodeViewSet,
    NotificationViewSet,
    CustomerProfileViewSet,
)

router = DefaultRouter()
router.register("invitecode", InviteCodeViewSet)
router.register("customerprofile", CustomerProfileViewSet)
router.register("taskerprofile", TaskerProfileViewSet)
router.register("notification", NotificationViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
