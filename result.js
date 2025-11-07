var users = JSON.parse(localStorage.getItem('users')) || [];
var scoreText = document.getElementById("textRes");
var userIndex = localStorage.getItem("current");
var resultImg = document.getElementById("result-img");
var maxScore = document.getElementById("Max-score");
if(users[userIndex].latestScore>=5) {
        resultImg.setAttribute("src", "happy.png");
        scoreText.textContent = "🎉 Congratulations " + users[userIndex].firstName + "!";
    } else {
        resultImg.setAttribute("src", "sad2.png");
        scoreText.textContent = "😞 Hard luck " + users[userIndex].firstName + ".";
    }

    maxScore.textContent = "Your Score: " + users[userIndex].latestScore + " / 10";