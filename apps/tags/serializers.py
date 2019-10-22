from rest_framework import serializers


class PageTagsSerializer(serializers.Serializer):
    url = serializers.URLField(required=True)
    data = serializers.CharField(required=False, allow_blank=True)
