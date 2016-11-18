# Documentation: https://docs.docker.com/engine/reference/builder/

# Sets the Base Image for subsequent instructions.
FROM node:7.0.0

# Set the Author field of the generated images
MAINTAINER nico.collin@ubisfoft.com

# Add a new user
RUN useradd --user-group --create-home --shell /bin/false app

# Sets the environment variable HOME
ENV HOME=/home/app

# Sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions that follow it in the Dockerfile
WORKDIR $HOME

# Adds package.json
COPY ./package.json $HOME

# Install package dependencies
RUN npm install

ENV SRC=$HOME/src

# Copy src
COPY ./src $SRC

WORKDIR $SRC

# Start the service application
CMD ["bash"]
