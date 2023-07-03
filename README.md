<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://epc-lnr.ru/tecnologies/nest.png" width="200"  alt="Nest Logo" /></a>
</p>

## Описание

Microservices - backend, с микросервисной архитектурой, написанный с помощью NestJS ( Monorepo ).<br>
Связь между сервисами поддерживается через RabbitMQ.

### Микросервисы:

1. Accounts (PostgreSQL) - управление аккаунтами пользователей.
2. Manager-Panel (PostgreSQL) - управление группами.
3. Read-Service (MongoDB) - сервис для GET запросов. Тут хранятся актуальные объекты для фронтенда.

### Паттерны:

- CQRS
- Domain-Driven Design

## Запуск микросервисов:

```bash
# Accounts (Управление пользователями):
yarn start accounts

# Manager-Panel (Управление группами):
yarn start manager-panel

# Read-Service (Получение данных с помощью GET запросов):
yarn start read-sevice
```

<b>Внимание!</b> Необходимо настроить env файлы и иметь локально mongoDB, PostgreSQL и RabbitMQ

## Пример работы:

Создание менеджера: <br>

1. Создать менеджера в сервисе accounts (PostgreSQL) и с помощью событий передать его в нужные очереди.
2. Забрать менеджера из очереди 1 в сервисе manager-panel и сохранить в PostgreSQL (Нужно для дальнейшего контроля за группами)
3. Забрать менеджера из очереди 2, в сервисе read-service и сохранить его в MongoDB, подготовив GET запрос для чтения с фронта.

<img src="https://i.ibb.co/X33pB1q/1.png">

## Стэк

NestJS, PostrgeSQL, TypeScript, MongoDB, RabbitMQ
