from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet
from .views import ExperienceViewSet

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'experiences', ExperienceViewSet, basename='experience')

urlpatterns = [
    path('', include(router.urls)),
]
