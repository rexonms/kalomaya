# syntax=docker/dockerfile:1
FROM golang:1.18-buster AS builder
WORKDIR /go/src/github.com/rexonms/kalomaya/
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o main .

FROM alpine:latest
RUN apk --no-cache add ca-certificates

RUN addgroup --system --gid 1001 nonroot
RUN adduser --system --uid 1001 nonroot

WORKDIR /home/nonroot
COPY --from=builder /go/src/github.com/rexonms/kalomaya/main ./

EXPOSE 8080

USER nonroot

ENTRYPOINT ["./main"]
