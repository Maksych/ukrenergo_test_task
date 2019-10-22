from html.parser import HTMLParser


class PageTagsParser(HTMLParser):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.page_tags = {}

    def handle_starttag(self, tag, attrs):
        self.page_tags.setdefault(tag, 0)
        self.page_tags[tag] += 1

    def error(self, message):
        pass
