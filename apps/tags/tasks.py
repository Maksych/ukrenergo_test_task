from __future__ import absolute_import, unicode_literals

import json

import requests

from celery import shared_task

from apps.tags.models import PageTags

from apps.tags.parser import PageTagsParser


@shared_task
def parse_html_from_url(url):
    """
    Parsing html and getting count of each tag

    :param url: url for getting response
    :return: dict with key: json or None
    """

    response = requests.get(url)

    if 200 <= response.status_code < 300:
        parser = PageTagsParser()
        parser.feed(response.text)
        data = json.dumps(parser.page_tags)

        create_page_tags.delay(url, data)

        return data
    else:
        return None


@shared_task
def create_page_tags(url, data):
    """
    Creating DB entry for url with data
    :param url: url
    :param data: count of each tag
    :return None
    """
    PageTags.objects.create(url=url, data=data)
