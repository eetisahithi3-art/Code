const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


app.post("/chat", (req, res) => {

    const message = req.body.message.toLowerCase();
    const company = req.body.company;


    let answer =
    "Hello! I am your AI Workforce employee. How can I help you?";


    if(message.includes("course")){
        answer =
        "We provide " + company.services.join(", ");
    }


    else if(message.includes("time")){
        answer =
        "Our timings are " + company.timing;
    }


    else if(message.includes("admission")){
        answer =
        "Please share your name and phone number. Our team will contact you.";
    }


    res.json({
        answer: answer
    });

});


app.listen(3000, () => {
    console.log("AI Workforce server running");
});
