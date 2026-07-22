const company = {

name:"ABC Coaching Centre",

services:[
"JEE Coaching",
"NEET Coaching",
"Foundation Classes"
],

timing:"5 PM - 8 PM"

};



function startChat(){

document.getElementById("chatbox").innerHTML +=

"<p><b>AI:</b> Hello! I am your AI Workforce employee. How can I help?</p>";

}



function sendMessage(){

let input=document.getElementById("userInput");

let msg=input.value.toLowerCase();

let chat=document.getElementById("chatbox");


chat.innerHTML +=

"<p><b>You:</b>"+input.value+"</p>";


let reply="I can help you with courses, timings and admissions.";


if(msg.includes("course")){

reply="We provide "+company.services.join(", ");

}


if(msg.includes("time")){

reply="Our classes run "+company.timing;

}


if(msg.includes("admission")){

reply="Please share your name and phone number. Our team will contact you.";

}


chat.innerHTML +=

"<p><b>AI:</b>"+reply+"</p>";


input.value="";

}
