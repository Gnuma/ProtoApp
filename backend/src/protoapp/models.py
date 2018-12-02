from django.db import models


class Users(models.Model):
    username = models.CharField(max_length = 200)
    password = models.CharField(max_length = 64)
    date_signup =models.DateTimeField()


class Posts(models.Model):
    content = models.CharField(max_length = 200)
    pub_date = models.DateTimeField()
    user = models.ForeignKey(Users, on_delete = models.CASCADE)

class Comments(models.Model):
    content = models.CharField(max_length = 300)
    pub_date = models.DateTimeField()
    user = models.ForeignKey(Users, on_delete = models.CASCADE)
    post = models.ForeignKey(Posts, on_delete = models.CASCADE)
