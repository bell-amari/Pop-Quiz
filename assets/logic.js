// Created HTML Elements
var ul = document.createElement("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var q = document.createElement("h3");

// Linked Exsisting HTML with JS
var question = window.document.querySelector("#question");
var list = window.document.querySelector("#list");
var listItem = window.document.querySelector("#list_item");
var btn = window.document.querySelector("#clicker");

// Runs when button is clicked
btn.addEventListener("click", function(){
    question.textContent = questions.q1;
    li1.textContent = answersq1.a1;
    li2.textContent = answersq1.a2;
    li3.textContent = answersq1.a3;
    li4.textContent = answersq1.a4;
    btn.textContent = "Submit";
    console.log("Button Clicked")
}); 

const questions = {
    q1 : "What is the value of pi?",
    q2 : "What type of star is the sun?",
    q3 : "What is Earth's biggest satillite?",
    q4 : "When was the ISS (International Space Station) finished?",
};
const answersq1 = {
    a1 : "Comming Soon 1",
    a2 : "Comming Soon 2",
    a3 : "Comming Soon 3",
    a4 : "Comming Soon 4",
};


    