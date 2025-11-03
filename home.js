var users = JSON.parse(localStorage.getItem('users')) || [];
var userIndex = localStorage.getItem("current");
var welcome = document.getElementById("welcome-hi")

welcome.textContent += users[userIndex].firstName + "!";

var maxScore = document.getElementById("Max-score");
maxScore.textContent ="Your maximum score "+ users[userIndex].maxScore + "!";
