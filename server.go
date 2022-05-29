package main

import (
	"fmt"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/rexonms/go/greet"
)

const defaultPort = ":8080"

func main() {
	fmt.Println(greet.Hello())
	// loggedUser := me {
	// 	_id: "61975a77f25626d3530d733f", 
	// 	email : "53863c83-f221-4a8f-b70c-73fa9a5a6932@guest.com", 
	// 	sub : "53863c83-f221-4a8f-b70c-73fa9a5a6932", 
	// 	subscriptionType : "G1", 
	// 	downPayment : 25, 
	// 	interestRate : 3.5, 
	// 	loanYear : 30, 
	// 	subscriptionHistory: nil, 
	// 	calculatedPropertyList : nil, 
	// 	favoritePropertyList : nil, 
	// 	searchedQueryList : nil, 
	// }
	// fmt.Println(loggedUser)
	// fmt.Println(loggedUser.getEmail())

	// Print even or odd 
	// myInts := []int{0,1,2,3,4,5,6,7,8,9,10}

	// for _, myInt := range myInts{
	// 	if myInt % 2 == 0 {
	// 		fmt.Println(myInt,  " is even")
	// 	}  else {
	// 		fmt.Println(myInt,  " is odd")
	// 	}
	// }

	// Structs 
	// alex := person{firstName: "Alex", lastName: "Smith"}
	// fmt.Println(alex)


	// cards := newDeckFromFile("MyCards")
	// cards.shuffle()
	// // fmt.Println(cards.toString())
	// // cards.saveToFile("MyCards")

	// cards.print()
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
	//  server.GET("/", http.PlaygroundHandler())
	//  server.POST("/query", http.GraphQLHandler())
	server.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": greet.Hello(),
		})
	})
	 err := server.Run(port)
	 if err != nil {
		// handle your error here
		fmt.Printf(`Error while running the server!`)
		fmt.Println(err)
	  }
}
