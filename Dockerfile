## docker build -t gosvelte -f Dockerfile .
##
## Build Svelte
##

FROM node:16.6.1-alpine3.14 AS svelte-builder

WORKDIR /
COPY . .
RUN npm install && npm run build

##
## Build Golang
##

FROM golang:1.16.7-alpine3.14 AS go-builder

WORKDIR /
COPY src .
RUN go mod download && CGO_ENABLED=0 GOOS=linux go build -o server

##
## Clean build
##

FROM alpine:3.14.1

WORKDIR /app/src
COPY public /app/public
COPY --from=svelte-builder ./src/build /app/src/build
COPY --from=go-builder server /app/src/server
EXPOSE 8080
ENTRYPOINT ["/app/src/server"]

## docker run -d -p 8080:8080 --name gosvelte gosvelte
