# UkrEnergo Test Task

### On Linux

```bash
git clone https://github.com/Maksych/ukrenergo_test_task.git
cd ukrenergo_test_task
python -m venv venv
. venv/bin/activate
python manage.py makemigrations
python manage.py migrate
celery -A ukrenergo_test_task worker -l info -D
python manage.py runserver
```
