# clear all container
docker rm -f shield

# clear all images
#docker rmi -f shield

# avatar
docker build -t shield --build-arg HTTP_PROXY --build-arg HTTPS_PROXY --build-arg http_proxy=HTTP_PROXY --build-arg https_proxy=HTTP_PROXY .
docker run -d -it --name=shield -v $PWD/src:/home/app/src shield