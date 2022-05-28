package main

import (
	"fmt"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/rexonms/kalomaya/http"
)

const defaultPort = ":8080"

func main() {
	cards := newDeckFromFile("MyCards")
	cards.shuffle()
	// fmt.Println(cards.toString())
	// cards.saveToFile("MyCards")

	cards.print()
	// hand, remainingDeck := deal(cards, 10)
	// hand.print()
	// remainingDeck.print()

	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	// greeting := "Hi there!"
	// fmt.Println([]byte(greeting))
	server := gin.Default()
	 server.GET("/", http.PlaygroundHandler())
	 server.POST("/query", http.GraphQLHandler())
	 err := server.Run(port)
	 if err != nil {
		// handle your error here
		fmt.Printf(`Error while running the server!`)
		fmt.Println(err)
	  }
}
