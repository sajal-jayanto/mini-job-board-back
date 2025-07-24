## .env

```bash
PORT=3001
MONGODB_URI=mongodb://mongo:ZnHeTlVLHpvHfCiraWqFdIkmfiEqDUjF@gondola.proxy.rlwy.net:21119/mini_job?authSource=admin
MONGODB_DB_NAME=mini_job

JWT_SECRET=a9PslB3Zx1qWqYJ8rRt6UoVe2bMf7T
```

## Default User

```bash
  name: "admin",
  email: "admin@admin.com",
  password: "admin@pass"
```

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Base url

http://localhost:3001

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
