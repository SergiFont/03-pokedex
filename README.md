<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Execution on developer mode

1. Clone the repository
2. Execute command on the project root:
```
yarn install
```
3. Install Nest CLI
```
npm i -g @nestjs/cli
```
4. Configure `docker-compose.yaml` file on the project root

5. Run the database
```
docker-compose up -d
```
6. Clone file __.env.template__ and rename the copy to __.env__
7. Give value to the environment variables defined on ```.env```
8. Execute command to start the app:
```
yarn start:prod
```
9. Populate the database with the seed:
```
http://localhost:3000/api/v2/seed
```

##Used Stack
* MongoDB
* Nest
# Production Build
1. Create file ```.env.prod```
2. Complete the environment variables for the created file
3. Build the new image
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```
# Run
1. Run the image already created from the docker. Only use after it's shutdown, the production Build command already iniciate the server.
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up
```