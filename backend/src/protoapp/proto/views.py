from rest_framework import viewsets
import io
import json
from django.http import JsonResponse, HttpResponse
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from .models import Comments, Posts, Users
from .serializers import PostsSerializer


class PostsManagement(viewsets.ModelViewSet):

    queryset = Posts.objects.all()
    serializer_class = PostsSerializer
    #parser_classes = (JSONParser,)
    def list(self, request, format = None):
        #Returns all Posts instance
        serializer = self.serializer_class(self.queryset, many = True)
        return JsonResponse(serializer.data, safe = False)
    
    
    def create(self, request, format = None, pk = None):
        #Creates a post
        key = int(request.data['user'])
        newPost = Posts(content = request.data['content'], user = Users.objects.get(pk=key))
        serializer = self.serializer_class(data = newPost.__dict__)
        if serializer.is_valid(raise_exception = False):
            newPost.save()
            return JsonResponse({'status':'Grazie per il post'})
        else:
            return JsonResponse({'status':'Qualcosa è andato storto'})

    '''
    Destroys one record from the db according to id passed through the url
    '''
    def destroy(self, request, format = None):
        post = Posts.objects.get(pk = pk)
        post.delete()


    """
    The following class contains every method needed to handle comments.
    """
    class CommentsManagement(viewsets.ModelViewSet):

        """
        Retrieve a single comment in according to the pk passed through the URL
        """
        def retrieve(self, request):
            commentRetrieved = Comments.objects.get(pk = pk)
            if commentRetrieved == False:
                return JsonResponse({"status": "La risorsa richiesta non esiste"})
            else:
                return JsonResponse(commentRetrieved.__dict__)

        



    