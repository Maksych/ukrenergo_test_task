# UkrEnergo Test Task

### On Linux

```bash
git clone https://github.com/Maksych/ukrenergo_test_task.git
cd ukrenergo_test_task
python3.8 -m venv venv
. venv/bin/activate
python manage.py makemigrations
python manage.py migrate
celery -A ukrenergo_test_task worker -l info -D
python manage.py runserver
```

### Docker
```bash
sudo docker-compose up --build
```
