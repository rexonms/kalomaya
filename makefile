dev:
	cd server && go run main.go
dev-watch:
	cd server && nodemon --exec go run main.go --signal SIGTERM
react-watch:
	cd client && npm install && npm run start
test:
	cd server && go test -cover ./...
