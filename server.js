const express = require('express');

const app = express()

app.get("/", (req, res) => {
	res.send('Hello from node server 3rd commit!!!');
	console.log('Hello from node server !!!');
});

app.listen(3000, () => {
	console.log("Server running on port 3000");
});