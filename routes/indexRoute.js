const express = require("express");
const indexController = require("../controllers/indexController.js");
const router = express.Router();

const messages = [
	{
		id: 1,
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
	const messageId = messages.length + 1;
	messages.push({
		id: messageId,
		text: messageText,
		user: messageUser,
		added: new Date(),
	});
	res.redirect("/"); // Перенаправляем на главную страницу после добавления сообщения
});

// Пример маршрута для отображения сообщения по ID
router.get("/open/:id", (req, res) => {
	const messageId = parseInt(req.params.id, 10);
	const message = messages.find((m) => m.id === messageId);
	if (message) {
		res.render("messageInfoPage", { message: message });
	} else {
		res.status(404).send("Message not found");
	}
});

router.get("/", indexController.renderIndex);

module.exports = router;
