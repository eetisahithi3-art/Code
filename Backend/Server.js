const express = require("express");

const app = express();

app.use(express.json());


app.post("/chat", async (req,res)=>{

const message = req.body.message;


let reply =
"Hello! I am your AI Workforce employee. How can I help?";


res.json({
answer: reply
});

});


app.listen(3000,()=>{

console.log("AI Workforce running");

});
