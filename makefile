dev: 
	go run httpd/server.go
dev-watch: 
	nodemon --exec go run httpd/server.go --signal SIGTERM
test: 
	go test -cover ./...
