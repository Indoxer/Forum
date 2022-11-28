from rest_framework import serializers, validators
from .models import User, Post, Tag, Answer, LikeAnswer, Comment


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "password")
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User(username=validated_data["username"])
        user.set_password(validated_data["password"])
        user.save()
        return user

    def update(self, user, validated_data):
        user = super().update(user, validated_data)
        user.set_password(validated_data["password"])
        user.save()
        return user


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ("id", "name")


class PostSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)
    author = UserSerializer(read_only=True)

    class Meta:
        model = Post
        read_only = (
            "created_at",
            "updated_at",
            "answers_amount"
        )
        fields = ("id", "title", "tags", "created_at", "updated_at", "author", "answers_amount")


class DetailPostSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True)
    author = UserSerializer(read_only=True)

    class Meta:
        model = Post
        read_only = (
            "created_at",
            "updated_at",
            "answers_amount",
        )
        fields = ("id", "title", "body", "tags", "created_at", "updated_at", "author", "answers_amount")


class CommentSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)

    class Meta:
        model = Comment
        read_only = (
            "created_at",
            "updated_at",
        )
        fields = ("id", "body", "answer", "created_at", "updated_at", "author")


class LikeAnswerSerializer(serializers.ModelSerializer):
    author = UserSerializer(
        read_only=True,
    )

    def validate(self, data):
        user = None
        request = self.context.get("request")
        if request and hasattr(request, "user"):
            user = request.user
            
        if LikeAnswer.objects.get(author=user):
            raise validators.ValidationError("You are not allowed to like this answer again. You can like something only once!")
        
        return data
    
    class Meta:
        model = LikeAnswer
        fields = ("id", "answer", "author", "type")

class AnswerSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    comments = CommentSerializer(many=True, read_only=True)
    liked_by_you = serializers.SerializerMethodField("get_liked_by_you")

    def get_liked_by_you(self, obj):
        user = None
        request = self.context.get("request")
        if request and hasattr(request, "user"):
            user = request.user

        likes = obj.likes.filter(author=user)

        if not likes:
            return None

        return LikeAnswerSerializer(likes.first).data

    class Meta:
        model = Answer
        read_only = (
            "created_at",
            "updated_at",
        )
        fields = (
            "id",
            "body",
            "post",
            "comments",
            "created_at",
            "updated_at",
            "author",
            "likes_number",
            "dislikes_number",
            "liked_by_you",
        )
