<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) this is my first NestJS Application.

## Installation

```bash
$ yarn install
```

## configuration

You must configure the .env environment file with the information for connecting to the postgres database

## CreateDatabase

```bash
$ yarn run:start:db
```

## CreateMigration

```bash
$ yarn run typeorm migration:generate -- "FirstMigration" --dataSource src/config/config/config.service.ts
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

you may access to Swagger to realize test in the configured local 'URL'/api, for example http://localhost:3000/api

## Process to Test

the seed file must first be run in the database in order to proceed with the tests

the seed file is located in the sql/ folder

you can login with a rider user with username and password in endpoint http://localhost:3000/rider/rider?username=USERNAME&password=PASSWORD

you can get all drivers in endpoint http://localhost:3000/driver/All

you can get all drivers availables to realize a trip in endpoint http://localhost:3000/driver/Availables

you can update the status driver availables to realize a trip in endpoint PUT http://localhost:3000/driver/Availables

with the body
```bash
{ 
  "id": 1, //driver identification
  "available": true, // is driver available
  "isWorking": false, // driver is working in a travel
  "longitude": "-74.20", // last longitude 
  "latitude": "4.22" // last latitude
}
```

you can get a travel by id in endpoint http://localhost:3000/travel/ByID?travelId=1

you can get a travel by rider id in endpoint http://localhost:3000/travel/ByRider?riderId=1

you can get a travel by driver id in endpoint http://localhost:3000/travel/ByDriver?driverId=1

you can get a travel availables for assing or be taken by a driver in endpoint http://localhost:3000/travel/Available

you can create a travel request in the endpoint POST http://localhost:3000/travel

with the body
```bash
{
  "riderId": 1,
  "latitudeStart": "string",
  "longitudeStart": "string",
  "AddressStart": "string",
  "latitudeEnd": "string",
  "longitudeEnd": "string",
  "AddressEnd": "string",
  "status": 0
}
```
you can as a driver take a trip in the endpoint PUT http://localhost:3000/travel

with the body
```bash
{
  "id": 2,
  "driverId": 2,
  "status": 0,
  "finishDate": "2023-03-08T15:57:40.632Z",
  "distanceTotal": "1",
  "timeTotal": "1"
}
```
you can get a summary of the total value of the travel in the endpoint http://localhost:3000/travel/totalTravel?travelId=1


You can create a payment request with communication to the wompi sandbox in the endpoint POST http://localhost:3000/payment

with the body
```bash
{
  "subTotalTime": "5000",
  "subTotalDistance": "5600",
  "tax": "3500",
  "total": "14100",
  "status": 0,
  "travelId": 1
}
```

and finally you can Update a payment request with verification of transaction id in wompi sandbox in the enpoint PUT http://localhost:3000/payment

with the body:
```bash
{
  "id": 7,
  "status": 2,
  "finishDate": "2023-03-08T15:04:43.369Z",
  "infoTransaction": "137690-1678287667-81098"
}
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch
- Developer - [Efrain Melo](https://www.linkedin.com/in/efrain-melo-6347642b/)
- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
