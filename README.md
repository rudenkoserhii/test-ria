Markdown

# Сервіс статистики лістингів

## Запуск

docker build -t test-ria .
docker run -p 3000:3000 test-ria

## API

### GET /stats/:autoId

Отримати статистику для лістингу за його ID

**Параметри:**

- `autoId`: string (ідентифікатор лістингу)

**Відповідь:**

- `autoId`: string (ідентифікатор лістингу)
- `listingOpens`: number (кількість відкриттів лістингу)
- `phoneOpens`: number (кількість відкриттів номера телефону)

### POST /stats/listing

Збільшити `listingOpens` для лістингу

**Параметри:**

- `autoId`: string (ідентифікатор лістингу)

**Відповідь:**

- `status`: 200 (OK)

### POST /stats/phone

Збільшити `phoneOpens` для лістингу

**Параметри:**

- `autoId`: string (ідентифікатор лістингу)

**Відповідь:**

- `status`: 200 (OK)
