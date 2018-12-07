from django.urls import path
from rest_framework import routers
from protoapp import views

#router = routers.DefaultRouter()
#router.register(r'users', views.PostsComments)

urlpatterns = [
    path('posts', views.PostsManagement.as_view({'get':'list'}), name = "users-all"),
]