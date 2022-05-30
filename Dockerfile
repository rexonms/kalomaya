# syntax=docker/dockerfile:1
## Multi Stage
##
## Build
##
FROM golang:1.18-buster AS build

WORKDIR /app

COPY go.mod ./
COPY go.sum ./
RUN go mod download

COPY *.go ./
RUN go build -o /rexonms/kalomaya
RUN go env





##
## Deploy
##
FROM gcr.io/distroless/base-debian10
WORKDIR /

COPY --from=build /rexonms/kalomaya /rexonms/kalomaya
EXPOSE 8080
USER nonroot:nonroot

ENTRYPOINT ["/rexonms/kalomaya"]
