from django.urls import path
from rest_framework import routers
from proto import views

router = routers.DefaultRouter()
router.register(r'posts', views.PostsManagement, basename='posts')
router.register(r'comments', views.CommentsManagement, basename='comments')


urlpatterns = router.urls