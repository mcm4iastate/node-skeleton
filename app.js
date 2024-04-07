const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
    console.log("New Connection");

    socket.emit("hello", "Hello World");
});

app.use("/", express.static(path.join(__dirname + "/public")));

server.listen(8080);
console.log("Listening on port 8080");