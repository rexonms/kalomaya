dev: 
	go run main.go
dev-watch: 
	nodemon --exec go run main.go --signal SIGTERM
test: 
	go test -cover ./...
