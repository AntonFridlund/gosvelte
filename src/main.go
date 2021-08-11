package main

import (
	"main/routes"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/helmet/v2"
	"github.com/gofiber/template/html"
)

func main() {
	app := fiber.New(fiber.Config{DisableStartupMessage: true,
		Views: html.New("./build", ".html")})

	// Static files.
	app.Static("/static", "../public")
	app.Static("/build", "./build")

	app.Use(helmet.New()) // Use helmet.
	app.Use(logger.New()) // Use logger.
	routes.Setup(app)     // Setup routes.

	app.Listen(":8080")
}
