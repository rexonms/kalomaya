package main

import (
	"net/http"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	// "github.com/rexonms/kalomaya/platform/newsfeed"
	// "github.com/rexonms/kalomaya/routes/handler"
)

func main() {
	server := gin.Default()
	// feed := newsfeed.New()
	// server.GET("/newsfeed", handler.GetNewsfeed(feed))
	// server.POST("/newsfeed", handler.PostNewsfeed(feed))
	// https://medium.com/@synapticsynergy/serving-a-react-app-with-golang-using-gin-c6402ee64a4b
	server.GET("/health", func(c *gin.Context){
		c.JSON(http.StatusOK, gin.H{
			"message": "OK",
		})
	})
	server.Use(static.Serve("/", static.LocalFile("./client/build", true)))
	api := server.Group("/api")
	{
		api.GET("/", func(c *gin.Context){
			c.JSON(http.StatusOK, gin.H{
				"message": "pong",
			})
		})
	}
	server.Run(":8080")
}
