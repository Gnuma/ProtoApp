from rest_framework import viewsets
from django.http import JsonResponse
from rest_framework.response import Response
from .models import Comments, Posts, Users
from .serializers import PostsSerializer


class PostsManagement(viewsets.ModelViewSet):

    queryset = Posts.objects.all()
    serializer_class = PostsSerializer

    def list(self, request):
        #Returns all Posts instances
        if request.method == 'GET':
            objects = self.queryset
            serializer = self.serializer_class(objects, many = True)
            return JsonResponse(serializer.data, safe = False)
        else: 
            return Response(serializers.errors, status = status.HTTP_400_BAD_REQUEST)
    def create(self, request):
        #Creates a post
        return Response("Feature still not available!")


