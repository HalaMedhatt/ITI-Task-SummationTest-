var users = JSON.parse(localStorage.getItem('users')) || [];
var userIndex = localStorage.getItem("current");
var welcome = document.getElementById("welcome-hi")

welcome.textContent += users[userIndex].firstName + "!";

var maxScore = document.getElementById("Max-score");
maxScore.textContent ="Your maximum score "+ users[userIndex].maxScore + "!";
var startest=document.getElementsByClassName('start-btn')[0];
console.log(startest);
startest.addEventListener('click',function(e){
    console.log("removed");
    localStorage.removeItem('quetion-object');
    localStorage.setItem('currentIndex',0);
    localStorage.setItem('remainingTime',500);
});
