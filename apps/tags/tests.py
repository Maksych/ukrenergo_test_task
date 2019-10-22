import json

from django.urls import reverse

from django.test import TestCase


class TagsTestCase(TestCase):
    def post_url(self, name, url):
        return self.client.post(
            reverse(name),
            json.dumps({
                'url': url
            }),
            'application/json'
        )

    def test_page_tags_success(self):
        resp = self.post_url('tags', 'https://google.com.ua/')
        self.assertEqual(resp.status_code, 201)

    def test_page_tags_validation(self):
        resp = self.post_url('tags', 'http// not valid . url')
        self.assertEqual(resp.status_code, 400)

    def test_page_tags_error(self):
        resp = self.post_url('tags', reverse('tags'))
        self.assertEqual(resp.status_code, 400)
