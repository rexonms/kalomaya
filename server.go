package main

import (
	"example/controller"
	"example/middlewares"
	"example/service"
	"io"
	"os"

	"github.com/gin-gonic/gin"
	gindump "github.com/tpkeeper/gin-dump"
)


var (
	videoService service.VideoService = service.New()
	videoController controller.VideoController = controller.New(videoService)
)

func setupLogOutput() {
	f, _ := os.Create("gin.log")
	gin.DefaultWriter = io.MultiWriter(f, os.Stdout)
}

func main() {
	// https://www.youtube.com/watch?v=qR0WnWL2o1Q&list=PL3eAkoh7fypr8zrkiygiY1e9osoqjoV9w&index=1&ab_channel=PragmaticReviews
	setupLogOutput()
	server := gin.New()
	server.Use(gin.Recovery(),middlewares.Logger(), middlewares.BasicAuth(), gindump.Dump()) // middleware


	server.GET("/videos", func(ctx *gin.Context){
		ctx.JSON(200, videoController.FindAll())
	})
	server.POST("/videos", func(ctx *gin.Context){
		ctx.JSON(200, videoController.Save(ctx))
	})
	server.Run(":8080")
}