package routes

import (
	controller "main/controllers/profile"

	"github.com/gofiber/fiber/v2"
)

func Profile() *fiber.App {
	router := fiber.New()
	router.Get("/", controller.Profile)
	return router
}
