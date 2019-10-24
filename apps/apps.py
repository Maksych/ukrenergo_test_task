from django.apps import AppConfig
from django.db.models.signals import post_migrate

from apps.signals import create_superuser


class AppsConfig(AppConfig):
    name = 'apps'

    def ready(self):
        post_migrate.connect(
            create_superuser,
            sender=self
        )
