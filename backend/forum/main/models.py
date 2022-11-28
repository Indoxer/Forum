from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    pass

class Tag(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Post(models.Model):
    title = models.CharField(max_length=100)
    body = models.TextField()
    tags = models.ManyToManyField(Tag)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="posts")
    
    @property
    def answers_amount(self):
        return self.answers.count()
        

    def __str__(self):
        return self.title

class Answer(models.Model):
    body = models.TextField()
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="answers")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="answers")

    @property
    def likes_number(self):
        return self.likes.filter(type=1).count()
    
    @property
    def dislikes_number(self):
        return self.likes.filter(type=-1).count()
  
    def __str__(self):
        return self.body

class LikeAnswer(models.Model):
    answer = models.ForeignKey(Answer, on_delete=models.CASCADE, related_name="likes")
    type = models.IntegerField(choices=((-1, "Disliked"), (1, "Liked")))
    author = models.OneToOneField(User, on_delete=models.CASCADE, related_name="liked_answers")

class Comment(models.Model):
    body = models.TextField()
    answer = models.ForeignKey(Answer, on_delete=models.CASCADE, related_name="comments")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="comments")

    def __str__(self):
        return self.body