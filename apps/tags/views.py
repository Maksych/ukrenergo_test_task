from rest_framework import generics, exceptions

from apps.tags.models import PageTags

from apps.tags.serializers import PageTagsSerializer

from apps.tags.tasks import parse_html_from_url


class PageTagsAPIView(generics.CreateAPIView):
    queryset = PageTags.objects.all()
    serializer_class = PageTagsSerializer
    authentication_classes = []

    def perform_create(self, serializer):
        """
        Delay parse_html_from_url task
        Waiting this task
        get result form task
        Updating data and save

        :param serializer: PageTagsSerializer
        :return: Response or Exception
        """

        url = serializer.validated_data['url']

        task = parse_html_from_url.delay(url)

        result = task.wait()

        if result is not None:
            serializer.validated_data['data'] = result
        else:
            raise exceptions.ParseError(f'Problem with getting response from {url}')
