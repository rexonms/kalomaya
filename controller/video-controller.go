package controller

import (
	"net/http"

	"github.com/rexonms/kalomaya/entity"
	"github.com/rexonms/kalomaya/service"
	"github.com/rexonms/kalomaya/validators"
	"gopkg.in/go-playground/validator.v9"

	"github.com/gin-gonic/gin"
)

type VideoController interface {
	FindAll() []entity.Video
	Save(ctx *gin.Context) error
	ShowAll(ctx *gin.Context)
	ShowIndex(ctx *gin.Context)
}

type controller struct {
	service service.VideoService
}

var validate *validator.Validate

func New(service service.VideoService) VideoController {
	validate = validator.New()
	validate.RegisterValidation("is-cool", validators.ValidateCoolTitle)

	return &controller {
		service: service,
	}
}

func (c *controller) FindAll() []entity.Video {
 	return c.service.FindAll()
}

func (c *controller) Save(ctx *gin.Context) error {
	var video entity.Video
	err := ctx.ShouldBindJSON(&video)
	if err != nil {
		return err
	}
	err = validate.Struct(video)
	if err != nil {
		return err
	}
	c.service.Save(video)
	return nil
}

func (c *controller) ShowAll(ctx *gin.Context) {
	videos := c.service.FindAll()
	data := gin.H{
		"title": "Video Page",
		"videos": videos,
	}
	ctx.HTML(http.StatusOK, "index.html", data)
}

func (c *controller) ShowIndex(ctx *gin.Context) {
	
	// ctx.HTML(http.StatusOK, "index.html", nil)
	ctx.Writer.WriteHeader(204)
}
