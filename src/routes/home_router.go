package routes

import (
	controller "main/controllers/home"

	"github.com/gofiber/fiber/v2"
)

func Home() *fiber.App {
	router := fiber.New()
	router.Get("/", controller.Home)
	return router
}
