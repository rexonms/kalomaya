package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/rexonms/kalomaya/platform/newsfeed"
)

func GetNewsfeed(feed newsfeed.Getter) gin.HandlerFunc{
	return func(c *gin.Context){
		results :=feed.GetAll()
		c.JSON(http.StatusOK, results)
	}
}