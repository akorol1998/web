
const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

PORT = 3000;


app.get("/", (req, res)=>{
	console.log("The get request");
	res.sendFile(__dirname + "/index.html");
})

io.on("connection", (socket)=>{
	socket.on("chat message", (message)=>{
		io.emit("chat message", message);
	})
})


server.listen(PORT, "localhost", ()=>{
	console.log("Hey")
});