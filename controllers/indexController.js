exports.renderIndex = (req, res) => {
	const messages = req.app.get("messages");
	res.render("index", { messages: messages });
};
