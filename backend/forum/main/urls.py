from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register("users", views.UserViewSet)
router.register("tags", views.TagViewSet)
router.register("posts", views.PostViewSet)
router.register("answers", views.AnswerViewSet)
router.register("likes", views.LikeAnswerViewSet)
router.register("comments", views.CommentViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('auth/', include('rest_framework.urls', namespace='rest_framework'))
]