from rest_framework import serializers

from apps.tags.models import PageTags


class PageTagsSerializer(serializers.ModelSerializer):
    data = serializers.CharField(required=False, allow_blank=True)
    date_created = serializers.DateTimeField(read_only=True)

    class Meta:
        model = PageTags
        fields = '__all__'
