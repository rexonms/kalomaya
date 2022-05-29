# syntax=docker/dockerfile:1

# Alpine is chosen for its small footprint
# compared to Ubuntu
FROM golang:1.18.2-alpine

# Add Maitainer Info
LABEL maitainer="rexon <rexonms@gmail.com>"

# Set the Current Working Directory inside the container
WORKDIR /app

# Download necessary Go modules
COPY go.mod ./
COPY go.sum ./
RUN go mod download

# Copy all the app sources (recursively copies files and directories from the host into container folder)
COPY *.go ./

RUN go build -o /rexonms/kalomaya
EXPOSE 8080
CMD [ "/rexonms/kalomaya" ]
