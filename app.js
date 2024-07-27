const express = require("express");
const path = require("path");
const indexRouter = require("./routes/indexRoute.js");
const newMessageRouter = require("./routes/newMessageRoute.js");
const messageInfoRouter = require("./routes/messageInfoRoute.js");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", newMessageRouter);
app.use("/open", messageInfoRouter);

const PORT = 3005;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
