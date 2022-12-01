from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, filters, permissions

from .models import User, Post, Tag, Answer, LikeAnswer, Comment
from .serializers import (
    UserSerializer,
    PostSerializer,
    TagSerializer,
    AnswerSerializer,
    LikeAnswerSerializer,
    CommentSerializer,
)


class IsAuthorOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        return obj.author == request.user

class IsThisUser(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj == request.user



class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    def get_permissions(self):
        if self.action in ["retrieve", "create"]:
            permission_classes = []
        elif self.action == "update":
            permission_classes = [IsThisUser]
        else:
            permission_classes = [permissions.IsAdminUser]
            
        return [permission() for permission in permission_classes]


class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    
    def get_permissions(self):
        if self.action in ["list"]:
            permission_classes = []
        else:
            permission_classes = [permissions.IsAdminUser]
            
        return [permission() for permission in permission_classes]


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ("title", "tags__name")
    ordering = "-created_at"
    permission_classes = (IsAuthorOrReadOnly, permissions.IsAuthenticatedOrReadOnly)
    serializer_class = PostSerializer
    
    def get_queryset(self):
        qs = super().get_queryset()
        qs = qs.select_related("author")
        qs = qs.prefetch_related("tags")
        return qs

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class AnswerViewSet(viewsets.ModelViewSet):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    ordering = "-created_at"
    permission_classes = (IsAuthorOrReadOnly, permissions.IsAuthenticatedOrReadOnly)

    def get_queryset(self):
        qs = super().get_queryset()
        qs = qs.select_related("author")
        return qs

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class LikeAnswerViewSet(viewsets.ModelViewSet):
    queryset = LikeAnswer.objects.all()
    serializer_class = LikeAnswerSerializer
    permission_classes = (IsAuthorOrReadOnly, permissions.IsAuthenticatedOrReadOnly)
    
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    ordering = "-created_at"
    permission_classes = (IsAuthorOrReadOnly, permissions.IsAuthenticatedOrReadOnly)

    def get_queryset(self):
        qs = super().get_queryset()
        qs = qs.select_related("author")
        return qs

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
