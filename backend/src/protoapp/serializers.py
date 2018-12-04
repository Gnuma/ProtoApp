from rest_framework import serializers
from .models import Posts, Users, Comments

class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ('content', 'pub_date')

class CommentsSerializer(serializers.ModelSerializer):
    posts = PostsSerializer(read_only=True)
    class Meta:
        model= Comments
        fields= '__all__'
