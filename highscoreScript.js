let newHighScore = JSON.parse(localStorage.getItem("highScores"));

let highScoreLi = document.getElementById("highscoreList");



for (i = 0; i < newHighScore.length; i++) {

 let list = document.createElement("li");
 list.textContent = newHighScore[i].initials + " - " + newHighScore[i].score;
 highScoreLi.appendChild(list);

}
let home = document.getElementById("homeScreen");

home.addEventListener("click", function() {
    window.location.href = "index.html";
})


let reset = document.getElementById("reset");
reset.addEventListener("click", function() {
    localStorage.removeItem("highScores");
highScoreLi.style.display = "none";


});