const express = require("express");
const indexController = require("../controllers/indexController.js");
const router = express.Router();

const messages = [
	{
		text: "Hello world",
		user: "Someone",
		added: new Date(),
	},
];

//GET для отображение сообщений
router.use((req, res, next) => {
	req.app.set("messages", messages);
	next();
});

// POST маршрут для добавления нового сообщения
router.post("/new", (req, res) => {
	const messageText = req.body.messageInput;
	const messageUser = req.body.authorInput;
	messages.push({ text: messageText, user: messageUser, added: new Date() });
	res.redirect("/"); // Перенаправляем на главную страницу после добавления сообщения
});

router.get("/", indexController.renderIndex);

module.exports = router;
