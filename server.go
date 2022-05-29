package main

import (
	"fmt"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/rexonms/go/greet"
)

const defaultPort = ":8000"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}
	server := gin.Default()
	//  server.GET("/", http.PlaygroundHandler())
	//  server.POST("/query", http.GraphQLHandler())
	server.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": greet.Hello(),
			"foo": "bazz",
		})
	})
	 err := server.Run(port)
	 if err != nil {
		// handle your error here
		fmt.Printf(`Error while running the server!`)
		fmt.Println(err)
	  }
}
