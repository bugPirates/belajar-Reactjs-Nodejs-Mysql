const express = require('express');
const app = express();

app.get('/', (req, res) =>{
	res.send("moshi moshi")
})

app.listen(5000, () => {
	console.log("Port Runnin on 5000");
});