#!/usr/bin/bash

docker container rm -f $(docker container ls -aq)
docker image rm -f $(docker image ls -aq)
docker volume rm -f $(docker volume ls -aq)
docker network rm $(docker network ls -aq)
docker system prune -a -f

rm -rf ./database-data
