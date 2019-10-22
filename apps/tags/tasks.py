from __future__ import absolute_import, unicode_literals

from celery import shared_task


@shared_task
def parse_html_from_url(data):
    data['data'] = 'Hello from task'
