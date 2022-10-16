const express = require("express")
const router = express.Router()
const controller = require("../controllers/message.controllers")

router.post("", controller.createMessage)
router.put("/:id", controller.updateMessage)
router.get("", controller.getMessages)
router.get("/:id", controller.getMessageById)
// router.get("/:author", controller.getMessagesByAuthor)
router.delete("/:id", controller.deleteMessage)

module.exports = router