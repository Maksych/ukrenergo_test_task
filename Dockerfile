FROM python:3.8-alpine

ENV PYTHONUNBUFFERED 1
ENV C_FORCE_ROOT true

RUN mkdir /code

WORKDIR /code

RUN apk update \
    && apk add --virtual build-deps gcc python3-dev musl-dev \
    && apk add postgresql-dev \
    && pip install psycopg2 \
    && apk del build-deps

ADD . /code

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

CMD python manage.py collectstatic --no-input;python manage.py makemigrations;python manage.py migrate;gunicorn ukrenergo_test_task.wsgi -b 0.0.0.0:8000 & celery -A ukrenergo_test_task worker