## Before Start

```base
docker run -d --name mongodb -p 27017:27017 mongo:latest
```

## .env

```bash
PORT=3001
MONGODB_URI=mongodb://localhost:27017/mini_job
MONGODB_DB_NAME=mini_job

JWT_SECRET=a9PslB3Zx1qWqYJ8rRt6UoVe2bMf7T
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

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
