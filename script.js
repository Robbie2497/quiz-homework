let firstQuestion = document.getElementById("questionOne");
firstQuestion.style.visibility = "hidden";


let answers = document.getElementById("answerChoices");
answers.style.visibility = "hidden";

let questionResult = document.getElementById("alert");
questionResult.style.visibility = "hidden";

let questionResultWrong = document.getElementById("alert2");
questionResultWrong.style.visibility = "hidden";

let quizTime = document.getElementById("quizTimeLeft");
quizTime.style.visibility="hidden";

let responseA = document.getElementById("selectionA");
let responseB = document.getElementById("selectionB");
let responseC = document.getElementById("selectionC");
let responseD = document.getElementById("selectionD");


let startTime = 5;
function startTimer() {
    if (startTime <= 0) {
        
        
    } else {
            interval = setInterval(function () {
                startTime--;
                console.log(startTime);
            }, 1000);
    }
}




let startButton = document.getElementById("start");
startButton.addEventListener("click", function () {
    console.log("hello world!");
    // hide the current content on the page
    startButton.style.visibility = "hidden";
    // display a message with the first question with the answer choices below
    firstQuestion.style.visibility = "visible";
    answers.style.visibility = "visible";
    quizTime.style.visibility="visible";
    // start the timer
    startTimer();
});

responseA.addEventListener("click", function () {
    questionResult.style.visibility = "visible";
});
responseB.addEventListener("click", function () {
    questionResultWrong.style.visibility = "visible";
});
responseC.addEventListener("click", function () {
    questionResultWrong.style.visibility = "visible";
});
responseD.addEventListener("click", function () {
    questionResultWrong.style.visibility = "visible";
});


        // function firstQuestion() {



        // }

//  let questions = [
//     {
//         prompt: "What is html?\n(a) ...\n(b) ...\n(c) ...",
//         answer: "..."
//     },
//     {
//         prompt: "What is css?\n(a) ...\n(b) ...\n(c) ...",
//         answer: "..."
//     },
//     {
//         prompt: "What is Javascript?\n(a) ...\n(b) ...\n(c) ...",
//         answer: "..."
//     },
//     {
//         prompt: "What is...?\n(a) ...\n(b) ...\n(c) ...",
//         answer: "..."
//     },
//     {
//         prompt: "What is...?\n(a) ...\n(b) ...\n(c) ...",
//         answer: "..."
//     },
//  ];
//  let score = 0;

//  for(let i = 0; i < questions.length; i++) {
//      let response = 
//  }
