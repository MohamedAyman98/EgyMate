# EgyMate Web Application
Platform that connects tourists to tour guides.

# Dependancies:
Below is a sample of the manifest file aka package.json file which constitutes the packages/libraries used in the application
{
  "name": "egymate",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "server": "nodemon server.js",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "concurrently": "^5.0.0",
    "config": "^3.2.4",
    "express": "^4.17.1",
    "google-map-react": "^1.1.5",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.7.12",
    "react-bootstrap": "^1.0.0-beta.16"
  },
  "devDependencies": {
    "nodemon": "^2.0.0"
  }
}
Perform "npm install" command to install all dependancies before running the application.

# Config:
- There is a default.json file inside the config folder. This file consists of the mongoURI connection string as well as the jwtSecret- used for hashing the password and generating the user token. A sample of the default.json file can be seen below:

{
  "mongoURI": "mongodb+srv://mohamed_01:hello123@sumergedb-vyv6s.mongodb.net/egymate?retryWrites=true&w=majority",
  "jwtSecret": "egm_myJwtSecret"
}


# Docker:
There is a Docker file that, when compiled generates the app image:
FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "server"]

# Docker-Compose:
There is 1 container that runs the application called "docker-node-app". No need for Mongo container as we are using a remote server for the Db (MongoAtlas)
To Run the app container: Type "docker-compose-up" in the terminal 
To close the container:
-Ctrl c
-"docker-compose-down"

docker-compose.yml file sample:
version: "2.1"

services:
  app:
    container_name: docker-node-app
    restart: always
    build: .
    ports:
      - "5000:5000"



