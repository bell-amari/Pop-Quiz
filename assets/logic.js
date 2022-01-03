// Linked Exsisting HTML with JS
var section = window.document.querySelector("#quiz_section");
var viewScore = window.document.querySelector("#high_score_view");
var startMessage = window.document.querySelector("#start_message");
var question = window.document.querySelector("#question");
var list = window.document.querySelector("#list");
var listItem = window.document.querySelector("#list_item");
var btn = window.document.querySelector("#clicker");
var ans_btn = window.document.querySelector("#answer_button");
var note = window.document.querySelector("#note");
var time = window.document.querySelector("#time_count");
var input = window.document.querySelector("#user_input");
var saveBtn = window.document.querySelector("#save_btn");
const wrong = "The answer you have chosen was incorrect";
const correct = "Great Job! Your answer was correct!";
var save = "";
var hold_selection = 0;
var quizNumber = 0;
var timeCount = 100;
time.textContent = "Time: " + timeCount;

// Runs when button is clicked
btn.addEventListener("click", function(){
    callQuestions();
    startMessage.remove();
    btn.remove();
}); 

saveBtn.addEventListener("click", function(){
    var listItemEl = document.createElement("li");
    listItemEl.className = "score";
    listItemEl.textContent = document.getElementById("user_input").value + " | " + timeCount;
    save = document.getElementById("user_input").value + " | " + timeCount;
    list.appendChild(listItemEl);
    saveBtn.remove();
    saveScore();
});

viewScore.addEventListener("click", function(){
    if (localStorage.key("score") === null){
    alert("No Score Yet");
    }
    else alert(localStorage.getItem("scores"));
});

function checkAnswers(answer){
    if (answer === hold_selection) {
        note.textContent = correct;
        note.style.color = "green";
    }
    if (answer !== hold_selection){
        note.textContent = wrong;
        note.style.color = "red";
        time.textContent = "Time: " + (timeCount -= 25);
    }
        
}



function callQuestions(){
    switch(quizNumber){
        case 0:
            compileQuestion(questions.q1, answersOne.a1, answersOne.a2, answersOne.a3, answersOne.a4, answersOne.hold);
            break;
        case 1:
            list.replaceChildren();
            compileQuestion(questions.q2, answersTwo.a1, answersTwo.a2, answersTwo.a3, answersTwo.a4, answersTwo.hold);
           break;
        case 2:
            list.replaceChildren();
            compileQuestion(questions.q3, answersThree.a1, answersThree.a2, answersThree.a3, answersThree.a4, answersThree.hold);
            break;
        case 3:
            list.replaceChildren();
            compileQuestion(questions.q4, answersFour.a1, answersFour.a2, answersFour.a3, answersFour.a4, answersFour.hold);
            break;
        case 4:
            question.replaceChildren();
            list.replaceChildren();
            note.remove();
            input.hidden = false;
            saveBtn.hidden = false;
            break;
    }
}
var saveScore = function(){
    localStorage.setItem("scores", JSON.stringify(save));
}

var compileQuestion = function(q, answer1, answer2, answer3, answer4, holdAnswer){
    question.textContent = q;
    var answer = holdAnswer;

    var listItemEl = document.createElement("li");
    var liBtn = document.createElement("button");
    liBtn.textContent = answer1;
    list.appendChild(listItemEl);
    listItemEl.appendChild(liBtn);
    liBtn.addEventListener("click", function(){
        console.log("Answer Button 1 Clicked");
        hold_selection = 1;
        quizNumber++;
        checkAnswers(answer);
        callQuestions();
    });

    var listItemEl1 = document.createElement("li");
    var liBtn = document.createElement("button");
    liBtn.textContent = answer2;
    list.appendChild(listItemEl1);
    listItemEl1.appendChild(liBtn);
    liBtn.addEventListener("click", function(){
        console.log("Answer Button 2 Clicked");
        hold_selection = 2;
        quizNumber++;
        checkAnswers(answer);
        callQuestions();
    });
    var listItemEl2 = document.createElement("li");
    var liBtn2 = document.createElement("button");
    liBtn2.textContent = answer3;
    list.appendChild(listItemEl2);
    listItemEl2.appendChild(liBtn2);
    liBtn2.addEventListener("click", function(){
        console.log("Answer Button 3 Clicked");
        hold_selection = 3;
        quizNumber++;
        checkAnswers(answer);
        callQuestions();
    });
    var listItemEl3 = document.createElement("li");
    var liBtn3 = document.createElement("button");
    liBtn3.textContent = answer4;
    list.appendChild(listItemEl3)
    listItemEl3.appendChild(liBtn3);
    liBtn3.addEventListener("click", function(){
        console.log("Answer Button 4 Clicked");
        hold_selection = 4;
        quizNumber++;
        checkAnswers(answer);
        callQuestions();
    });

}

const questions = {
    q1 : "1 . What is the value of pi?",
    q2 : "2. What type of star is the sun?",
    q3 : "3. What is Earth's biggest satillite?",
    q4 : "4. How many Space satations are are around earth as of 2021?"
};
const answersOne = {
    a1 : "A. 6.14",
    a2 : "B. 3.54",
    a3 : "C. 3.14",
    a4 : "D. pi",
    hold: 3
};

const answersTwo = {
    a1 : "A. White Dwarf Star",
    a2 : "B. Yellow Darf Star",
    a3 : "C. Red Gaint",
    a4 : "D. Super Massive Black Hole",
    hold: 2
};

const answersThree = {
    a1 : "A. International Space Station",
    a2 : "B. Saturn V",
    a3 : "C. The Moon",
    a4 : "D. Falcon 9",
    hold: 3
};

const answersFour = {
    a1 : "A. None",
    a2 : "B. Twelve",
    a3 : "C. Two",
    a4 : "D. One",
    hold: 4
};