const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.get('/',(req,res)=>{
	res.send("You're good to go!!");
});

app.listen(PORT,()=>{
	console.log(`Server listening on port: ${PORT}`);
});