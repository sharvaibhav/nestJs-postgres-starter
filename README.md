
## Description

A nestJS starter with postgres, configuration and basic setup done.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# Creating Migrations
```bash
typeorm migration:create -n createUsers 

# above command will create a migration into the configured folder (ormconfig.json has the config for this)
```
## 
