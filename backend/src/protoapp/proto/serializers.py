from rest_framework import serializers
from .models import Posts, Users, Comments

class PostsSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(many = False, read_only = True, slug_field = 'username')
    comments = serializers.SlugRelatedField(queryset = Comments.objects.all(), many = True, read_only = False, slug_field = 'content')
    class Meta:
        model = Posts
        fields = ('id','content', 'pub_date', 'user', 'comments')