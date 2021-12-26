// Linked Exsisting HTML with JS
var question = window.document.querySelector("#question");
var list = window.document.querySelector("#list");
var listItem = window.document.querySelector("#list_item");
var btn = window.document.querySelector("#clicker");
var ans_btn = window.document.querySelector("#answer_button");
var note = window.document.querySelector("#note");
const wrong = "The answer you have chosen was incorrect";
const correct = "Great Job! Your answer was correct!"
var hold_selection = 0;

// Runs when button is clicked
btn.addEventListener("click", function(){
    compileQuestion(questions.q1, answersOne.a1, answersOne.a2, answersOne.a3, answersOne.a4, answersOne.hold);
    console.log("Button Clicked")
}); 
function Quiz(hold){
    if(hold === hold_selection) {
        note.textContent = correct;
        
        compileQuestion(questions.q2, answersTwo.a1, answersTwo.a2, answersTwo.a3, answersTwo.a4, answersTwo.hold);
    }
    else note.textContent = wrong;
}

var compileQuestion = function(q, answer1, answer2, answer3, answer4, holdAnswer){

    question.textContent = q;
    ans_btn.textContent = answer1;
    ans_btn.addEventListener("click", function(){
        console.log("Answer Button 1 Clicked");
        hold_selection = 1;
        Quiz(holdAnswer);
    }); 

    var listItemEl = document.createElement("li");
    var liBtn = document.createElement("button");
    listItemEl.className = "";
    liBtn.textContent = answer2;
    list.appendChild(listItemEl);
    listItemEl.appendChild(liBtn);
    liBtn.addEventListener("click", function(){
        console.log("Answer Button 2 Clicked");
        hold_selection = 2;
        Quiz(holdAnswer);
    });
    var listItemEl2 = document.createElement("li");
    var liBtn2 = document.createElement("button");
    listItemEl2.className = "";
    liBtn2.textContent = answer3;
    list.appendChild(listItemEl2);
    listItemEl2.appendChild(liBtn2);
    liBtn2.addEventListener("click", function(){
        console.log("Answer Button 3 Clicked");
        hold_selection = 3;
        Quiz(holdAnswer);
    });
    var listItemEl3 = document.createElement("li");
    var liBtn3 = document.createElement("button");
    listItemEl3.className = "";
    liBtn3.textContent = answer4;
    list.appendChild(listItemEl3)
    listItemEl3.appendChild(liBtn3);
    liBtn3.addEventListener("click", function(){
        console.log("Answer Button 4 Clicked");
        hold_selection = 4;
        Quiz(holdAnswer);
    });

}

const questions = {
    q1 : "What is the value of pi?",
    q2 : "What type of star is the sun?",
    q3 : "What is Earth's biggest satillite?",
    q4 : "How many Space satations are are around earth as of 2021?",
};
const answersOne = {
    a1 : "6.14",
    a2 : "3.54",
    a3 : "3.14",
    a4 : "pi",
    hold: 3
};

const answersTwo = {
    a1 : "White Dwarf Star",
    a2 : "Yellow Darf Star",
    a3 : "Red Gaint",
    a4 : "Super Massive Black Hole",
    hold: 2
};

const answersThree = {
    a1 : "International Space Station",
    a2 : "Saturn V",
    a3 : "The Moon",
    a4 : "Falcon 9",
    hold: 3
};

const answersFour = {
    a1 : "None",
    a2 : "Twelve",
    a3 : "Two",
    a4 : "One",
    hold: 4
};