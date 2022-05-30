package main

import (
	"github.com/gin-gonic/gin"
	"github.com/rexonms/go/greet"
	"github.com/rexonms/kalomaya/httpd/handler"
	"github.com/rexonms/kalomaya/platform/newsfeed"
)


func main() {
	server := gin.Default()
	server.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": greet.Hello(),
			"foo": "baz",
		})
	})
	feed := newsfeed.New()
	server.GET("/newsfeed", handler.GetNewsfeed(feed))
	server.POST("/newsfeed", handler.PostNewsfeed(feed))

	server.Run()
}
