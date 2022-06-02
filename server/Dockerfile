# syntax=docker/dockerfile:1
FROM golang:1.18-buster AS builder
WORKDIR /go/src/github.com/rexonms/kalomaya/
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o main main.go
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o healthcheck healthcheck.go

FROM alpine:latest
RUN apk --no-cache add ca-certificates

RUN addgroup --system --gid 1001 nonroot
RUN adduser --system --uid 1001 nonroot

WORKDIR /home/nonroot
COPY --from=builder /go/src/github.com/rexonms/kalomaya/main ./
COPY --from=builder /go/src/github.com/rexonms/kalomaya/healthcheck ./

EXPOSE 8080

USER nonroot

HEALTHCHECK --interval=30s --timeout=3s --start-period=2s --retries=3 CMD ["./healthcheck", "http://localhost:8080/health"]

ENTRYPOINT ["./main"]
