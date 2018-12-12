from rest_framework import serializers
from .models import Posts, Users, Comments

class PostsSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(many = False, read_only = True, slug_field = 'username', required = False)
    comments = serializers.SlugRelatedField(required = False,queryset = Comments.objects.all(), many = True, read_only = False, slug_field = 'content')
    class Meta:
        model = Posts
        fields = ('id','content', 'pub_date', 'user', 'comments')


class  UsersSerializer(serializers.ModelSerializer):

    class Meta:
        model = Users
        fields = ('id', 'username')


class CommentsSerializer(serializers.ModelSerializer):
    post = PostsSerializer(read_only = True)
    user = UsersSerializer(read_only = True)
    class Meta:
        model = Comments
        fields = ('id', 'content', 'pub_date', 'user', 'post')

