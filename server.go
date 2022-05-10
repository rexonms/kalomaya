package main

import (
	"fmt"
	"io"
	"net/http"
	"os"

	"github.com/rexonms/kalomaya/controller"
	"github.com/rexonms/kalomaya/middlewares"
	"github.com/rexonms/kalomaya/service"

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
	// https://www.youtube.com/watch?v=qR0WnWL2o1Q&list=PL3eAkoh7fypr8zrkiygiY1e9osoqjoV9w&ab_channel=PragmaticReviews
	setupLogOutput()
	server := gin.New()
	server.Use(gin.Recovery(),middlewares.Logger(), middlewares.BasicAuth(), gindump.Dump()) // middleware


	server.GET("/videos", func(ctx *gin.Context){
		ctx.JSON(200, videoController.FindAll())
	})
	server.POST("/videos", func(ctx *gin.Context){

		err := videoController.Save(ctx)
		fmt.Println(err)

		if err != nil {
			fmt.Println(err)
			ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		} else {
			ctx.JSON(http.StatusOK, gin.H{"message":"Video input is valid"})
		}
	})
	server.Run(":8080")
}