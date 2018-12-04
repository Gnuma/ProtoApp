from django.urls import path
from rest_framework import routers
from protoapp import views

#router = routers.DefaultRouter()
#router.register(r'users', views.PostsComments)

urlpatterns = [
    path('users/', views.PostsComments, name = "users-all"),
]