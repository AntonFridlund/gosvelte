package user

import "github.com/gofiber/fiber/v2"

func Profile(c *fiber.Ctx) error {
	return c.Render("profile/index", fiber.Map{
		"Path": "profile",
	})
}
