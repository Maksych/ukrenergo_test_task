from django.urls import path

from apps.tags.views import PageTagsAPIView

urlpatterns = [
    path('', PageTagsAPIView.as_view(), name='tags'),
]
