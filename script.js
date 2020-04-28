let firstQuestion = document.getElementById("questionOne");
firstQuestion.style.visibility = "hidden";

let interval;


let questionResult = document.getElementById("alert");
questionResult.style.visibility = "hidden";

let questionResultWrong = document.getElementById("alert2");
questionResultWrong.style.visibility = "hidden";

let quizTime = document.getElementById("quizTimeLeft");
quizTime.style.visibility = "hidden";

let initial = document.getElementById("initials");
initial.style.visibility = "hidden";

let scoreShown = document.getElementById("score");

let submit = document.getElementById("submitQuiz");

let userInitials = document.getElementById("user");
let startScreen = document.getElementById("frontScreen");
startScreen.style.visibility = "visible";

let highScores;

let currentQuestion = 0;

let responseA = document.getElementById("selectionA");
let responseB = document.getElementById("selectionB");
let responseC = document.getElementById("selectionC");
let responseD = document.getElementById("selectionD");


highScores = JSON.parse(localStorage.getItem("highScores"));
if (!highScores) {
    highScores = [];
}

let startTime = 60;
function startTimer() {



    interval = setInterval(function () {
        startTime--;
        if (startTime <= 0) {
            clearInterval(interval);
            quizOver();
        }

        console.log(startTime);
        let timeLeft = document.getElementById("quizTimeLeft");
        timeLeft.textContent = startTime
    }, 1000);

}

function quizOver() {
    //clears page and brings score

    let quiz = document.getElementById("quizScreen");
    quiz.innerHTML = "";
    scoreShown.innerHTML = "Your score is: " + startTime;


    //form comes up to enter initials
    initial.style.visibility = "visible";
    //save score and initials into local storage
    submit.addEventListener("click", function () {
        console.log(userInitials.value);
        console.log(startTime);
        let score = {
            initials: userInitials.value,
            score: startTime
        }
        highScores.push(score);
        console.log(highScores);
        localStorage.setItem("highScores", JSON.stringify(highScores));

        window.location.href = "highscores.html";

    });


}


let startButton = document.getElementById("start");
startButton.addEventListener("click", function () {
    console.log("hello world!");
    // hide the current content on the page
    startButton.style.visibility = "hidden";
    startScreen.style.visibility = "hidden";
    // display a message with the first question with the answer choices below
    firstQuestion.style.visibility = "visible";
    // answers.style.visibility = "visible";
    quizTime.style.visibility = "visible";
    // start the timer
    startTimer();
    displayQuestion();
    console.log(displayQuestion);
});

var questionEl = document.getElementById("questions");
var aOne = document.getElementById("choiceOne");
var aTwo = document.getElementById("choiceTwo");
var aThree = document.getElementById("choiceThree");
var aFour = document.getElementById("choiceFour");

aOne.addEventListener("click", handleAnswer);
aTwo.addEventListener("click", handleAnswer);
aThree.addEventListener("click", handleAnswer);
aFour.addEventListener("click", handleAnswer);

function handleAnswer(event) {
    console.log(event.target.innerText);
    let currentChoice = event.target.innerText;
    let currentAnswer = starter[currentQuestion].answer;
    console.log(currentAnswer);

    if (currentAnswer == currentChoice) {
        //create alert correct
        console.log(currentAnswer);
        let correctAlert = document.getElementById("alert");
        correctAlert.style.visibility = "visible";
        setTimeout(function () {
            correctAlert.style.visibility = "hidden";
        }, 2000);
    } else {
        //create alert wrong answer
        console.log("wrong answer!")
        let wrongAlert = document.getElementById("alert2");
        wrongAlert.style.visibility = "visible";
        //take time from startTime
        setTimeout(function () {
            wrongAlert.style.visibility = "hidden";
        }, 2000);
        startTime -= 10;
    }

    if (currentQuestion < 3) {

        currentQuestion += 1;
        displayQuestion();

    } else {
        clearInterval(interval);
        quizOver();
    }
}

function displayQuestion() {
    questionEl.textContent = starter[currentQuestion].question
    aOne.textContent = starter[currentQuestion].choices[0]
    aOne.setAttribute("data-answer", starter[currentQuestion].answer)
    aTwo.textContent = starter[currentQuestion].choices[1]
    aTwo.setAttribute("data-answer", starter[currentQuestion].answer)
    aThree.textContent = starter[currentQuestion].choices[2]
    aThree.setAttribute("data-answer", starter[currentQuestion].answer)
    aFour.textContent = starter[currentQuestion].choices[3]
    aFour.setAttribute("data-answer", starter[currentQuestion].answer)
}

var starter = [
    {
        question: "What is HTML?", choices: [
            "The standard markup language for documents designed to be displaed in a web browser", "A platform used for communicating through email (usually for businesses)",
            "A language used to code the function of a website", "A language used to make the website look better"], answer: "The standard markup language for documents designed to be displaed in a web browser"
    },
    {
        question: "What is CSS?", choices: [
            "The backbone of the website, used to create the structure", "A general purpose programming language used for component-oriented programming disiplines", "A language used for styling the presentation of a website", "An application used by companies to look at local statistics to help their business become more profitable"], answer: "A language used for styling the presentation of a website"
    },
    {
        question: "What is an API?", choices: [
            "A programing language used to determine how a website functions", "An application interface that defines how other components or systems can use it", "A long lost language spoken in ancient Egypt", "A company called Animal Peace Inc. that helps rescue stranded animals and finds them loving homes"], answer: "An application interface that defines how other components or systems can use it"
    },
    {
        question: "What is JavaScript?", choices: [
            "An application with helpful tools used to write papers, generally used by students", "A coffee shop near the University of Utah where students generally go to meet up with classmates to form study groups", "A programming language that emphasizes code readability with its notable use of significant whitespace", "A high-level multi-paradigm program that is can be used to determine how a website functions"], answer: "A high-level multi-paradigm program that is can be used to determine how a website functions"
    },

]
