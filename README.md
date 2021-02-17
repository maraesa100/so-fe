App frontend for a subscription price calculator

## Build


docker build -t sample:dev .

## Run 
docker run -it  --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true sample:dev

