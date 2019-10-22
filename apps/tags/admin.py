from django.contrib import admin

from apps.tags.models import PageTags


@admin.register(PageTags)
class PageTagsAdmin(admin.ModelAdmin):
    list_display = ('url', 'date_created')
    readonly_fields = ('date_created',)
