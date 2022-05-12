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
	server.Static("/css", "./templates/css")
	server.LoadHTMLGlob("templates/*html")

	// server.Use(gin.Recovery(),middlewares.Logger(), middlewares.BasicAuth(), gindump.Dump()) // middleware

	apiRoutes := server.Group("/api")
	{
		apiRoutes.Use(gin.Recovery(), middlewares.BasicAuth()) // middleware
		apiRoutes.GET("/videos", func(ctx *gin.Context){
			ctx.JSON(200, videoController.FindAll())
		})
		apiRoutes.POST("/videos", func(ctx *gin.Context){
	
			err := videoController.Save(ctx)
			fmt.Println(err)
	
			if err != nil {
				fmt.Println(err)
				ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			} else {
				ctx.JSON(http.StatusOK, gin.H{"message":"Video input is valid"})
			}
		})
	}
	rootRoutes := server.Group("/")
	{
		rootRoutes.GET("/", videoController.ShowAll)
		
	}
	viewRoutes := server.Group("/view")
	{
		viewRoutes.GET("/videos", videoController.ShowAll)
		
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "8000"
	}
	server.Run(":" + port)
}