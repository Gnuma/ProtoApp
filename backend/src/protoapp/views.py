from rest_framework import viewsets

from .models import Comments, Posts, Users
from .serializers import CommentsSerializer

class PostsComments(viewsets.ModelViewSet):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer

