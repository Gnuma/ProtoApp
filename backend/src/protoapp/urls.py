from django.urls import path
from rest_framework import routers
from protoapp import views

router = routers.DefaultRouter()
router.register(r'posts', views.PostsManagement, basename='posts')


urlpatterns = router.urls