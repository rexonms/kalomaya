# syntax=docker/dockerfile:1
FROM golang:1.18-alpine
WORKDIR /app

COPY go.mod ./
COPY go.sum ./
RUN go mod download

COPY *.go ./
RUN go build -o /rexonms/kalomaya

EXPOSE 8080

CMD [ "/rexonms/kalomaya" ]

# Remove source files
RUN find . -name "*.go" -type f -delete

# Make port 8000 available to the world outside this container 
EXPOSE 8080

# Run the app
CMD ["./rexonms/kalomaya"]