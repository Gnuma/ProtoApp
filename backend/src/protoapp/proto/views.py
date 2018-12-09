from rest_framework import viewsets
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from .models import Comments, Posts, Users
from .serializers import PostsSerializer


class PostsManagement(viewsets.ModelViewSet):

    queryset = Posts.objects.all()
    serializer_class = PostsSerializer
    def list(self, request, format = None):
        #Returns all Posts instances
        if request.method == 'GET':
            serializer = self.serializer_class(self.queryset, many = True)
            return JsonResponse(serializer.data, safe = False)
        else: 
            return Response(serializers.errors, status = status.HTTP_400_BAD_REQUEST)
    
    
    def create(self, request, format = None, pk = None):
        #Creates a post
        if request.method == 'POST':
            #The view accept the request
            dbData = JSONParser.parse(request)
            serializer = self.serializer_class(data = dbData)
            if serializer.is_valid():
                serializer.save()
                return Response({'status':'Grazie per il post'})
            else:
                return Response({'status':'Qualcosa è andato storto'}, status = status.HTTP_400_BAD_REQUEST)
        else:
            #The view refuses the request
            return Response({'status':'Richiesta non valida'}, status = status.HTTP_400_BAD_REQUEST)
    