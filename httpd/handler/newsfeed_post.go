package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/rexonms/kalomaya/platform/newsfeed"
)

type postNewsfeedRequest struct {
	Title string `json:"title"`
	Post string  `json:"post"`
}

func PostNewsfeed(feed newsfeed.Adder) gin.HandlerFunc{
	return func(c *gin.Context){
		requestBody := postNewsfeedRequest{}
		c.Bind(&requestBody)

		item := newsfeed.Item {
			Title: requestBody.Title,
			Post: requestBody.Post,
		}

		feed.Add(item)
		c.Status(http.StatusNoContent)
	}
}