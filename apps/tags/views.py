from rest_framework import generics

from apps.tags.models import PageTags

from apps.tags.serializers import PageTagsSerializer

from apps.tags.tasks import parse_html_from_url


class PageTagsAPIView(generics.CreateAPIView):
    queryset = PageTags.objects.all()
    serializer_class = PageTagsSerializer
    authentication_classes = []

    def perform_create(self, serializer):
        task = parse_html_from_url.delay(serializer.validated_data)
        task.join()
        super().perform_create(serializer)
