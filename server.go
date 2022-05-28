package main

// All the packages that has the same name is packaged together

import (
	"os"

	"github.com/gin-gonic/gin"
	"github.com/rexonms/kalomaya/http"
)

const defaultPort = ":8080"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	server := gin.Default()
	 server.GET("/", http.PlaygroundHandler())
	 server.POST("/query", http.GraphQLHandler())
	 server.Run(defaultPort)
}
