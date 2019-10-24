from django.contrib.auth import get_user_model


def create_superuser(*args, **kwargs):
    user, created = get_user_model().objects.get_or_create(username='admin')
    if created:
        user.is_staff = True
        user.is_superuser = True
        user.set_password('admin')
        user.save()
