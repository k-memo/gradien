# Postgres

## To run docker we use

```
docker run --name gradien -e POSTGRES_PASSWORD=mysecretpassword -d -p 6432:5432 -d postgres
```

## Create .env file for prisma

`.env`

```
POSTGRES_PRISMA_URL = "postgresql://postgres:mysecretpassword@localhost:6432/postgres"
```
