package routes

import "github.com/gofiber/fiber/v2"

func Setup(app *fiber.App) {
	app.Mount("/", Home())
	app.Mount("/profile", Profile())
}
