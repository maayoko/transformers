FROM node:11.9

LABEL maintainer="ivicek.ivan@gmail.com"

# root jobs
USER root
RUN apt-get update && \
    mkdir /home/node/app && \
    chown -R node:node /home/node/app

# node jobs
USER node
WORKDIR /home/node/app

EXPOSE 3000

# Command to run when container starts
CMD ["sh", "setup.sh"]
