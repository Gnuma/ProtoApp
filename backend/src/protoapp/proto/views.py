from rest_framework import viewsets
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from .models import Comments, Posts, Users
from .serializers import PostsSerializer


class PostsManagement(viewsets.ViewSet):


    def list(self, request, format = None):
        #Returns all Posts instances
        queryset = Posts.objects.all()
        if request.method == 'GET':
            serializer = PostsSerializer(queryset, many = True)
            return JsonResponse(serializer.data, safe = False)
        else: 
            return Response(serializers.errors, status = status.HTTP_400_BAD_REQUEST)
    
    
    def create(self, request, format = None, pk = None):
        #Creates a post
        if request.method == 'POST':
            #The view accept the request
            dbData = JSONParser.parse(request)
            serializer = PostsSerializer(data = dbData)
            if serializer.is_valid():
                serializer.save()
                return Response({'status':'Grazie per il post'})
            else:
                return Response({'status':'Qualcosa è andato storto'}, status = status.HTTP_400_BAD_REQUEST)
        else:
            #The view refuses the request
            return Response({'status':'Richiesta non valida'}, status = status.HTTP_400_BAD_REQUEST)
    