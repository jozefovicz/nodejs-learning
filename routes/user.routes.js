const express = require("express")


const router = express.Router()
const users_controller = require("../controllers/user.controller")


router.get("/users", users_controller.get)
router.post('/users', users_controller.create)

module.exports = router