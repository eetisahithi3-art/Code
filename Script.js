const business = {
    name: "ABC Coaching Centre",
    courses: "JEE, NEET and Foundation",
    timings: "5 PM to 8 PM",
    fee: "Contact counsellor for fee details"
};


function sendMessage(){

let input = document.getElementById("userInput");

let message = input.value.toLowerCase();

let chat = document.getElementById("chatbox");


chat.innerHTML += 
"<p><b>You:</b> "+input.value+"</p>";


let reply = "Thank you for contacting us. How can I help you?";


if(message.includes("course")){
reply = "We offer "+business.courses;
}


else if(message.includes("time")){
reply = "Our classes are "+business.timings;
}


else if(message.includes("fee")){
reply = business.fee;
}


else if(message.includes("admission") || message.includes("join")){
reply = "Please share your name and phone number. Our team will contact you.";
}


chat.innerHTML += 
"<p><b>AI:</b> "+reply+"</p>";


input.value="";

}
