from rest_framework import generics

from apps.tags.models import PageTags

from apps.tags.serializers import PageTagsSerializer


class PageTagsAPIView(generics.CreateAPIView):
    queryset = PageTags.objects.all()
    serializer_class = PageTagsSerializer
    authentication_classes = []

    def perform_create(self, serializer):
        serializer.validated_data['data'] = ''
        super().perform_create(serializer)
