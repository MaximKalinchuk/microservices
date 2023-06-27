<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://avatars.yandex.net/get-music-user-playlist/34120/606666247.1004.78267/m1000x1000?1607849310019&webp=false" width="300" alt="Nest Logo" /></a>
</p>

## Описание

Microservices - backend, использующий микросервисную архитектуру, написанный с помощью NestJS ( Monorepo ).<br>

## Микросервисы:

- Accounts (Управление пользователями) - PostgreSQL
- Manager-Panel (Управление группами) - PostgreSQL
- Read-Service (Получение данных с помощью GET запросов) - MongoDB

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

<img src="https://i.ibb.co/XS9Cx52/1.png">

## Стэк

NestJS, postrgeSQL, TypeScript, MongoDB, RabbitMQ
