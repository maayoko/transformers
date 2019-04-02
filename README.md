# Transformers - web app for creating an army of autobots and decepticons

To see it in action visit this [link](http://maayoko3c.mylabserver.com:8080/). There might be a posibility of server downtime.

## Setup instructions

### Minimum requirements

---

-   Node v11.9
-   Yarn v1.13 or Npm 6.5.0

### Optional

---

-   Docker v18.09.2
-   Docker-compose v1.23.2

You can run this application locally by following this steps

1. Clone this repository into your local drive
2. Navigate to the cloned folder

### Development environment

Now, f you'd like to run this app in development environment issue the following command in your terminal

```bash
    yarn install && yarn start
```

Or with docker

```bash
    docker-compose up -d
```

If you want to see docker's progress issue the following command

```bash
    docker-compose logs -f
```

### Production environment

You can build files by issuing

```bash
    yarn build
```

However keep in mind that you'll have to setup a server to host built files.

For those using docker

```bash
    docker-compose -f docker-compose.prod.yml up -d
```
