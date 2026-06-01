FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY main.py .
COPY seed_articles.py .

ENV ADMIN_PASSWORD=changeme
ENV JWT_SECRET=change-this-in-production
ENV DB_PATH=/data/articles.db

VOLUME ["/data"]

EXPOSE 8001

CMD ["python", "main.py"]
