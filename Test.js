var userIndex = localStorage.getItem("current");
var users = JSON.parse(localStorage.getItem('users')) || [];
var question = document.getElementById("question");
var radio =document.getElementsByClassName("answers");
var test = JSON.parse(localStorage.getItem('quetion-object')) || [];
var totalTime=500;

var timerBar = document.getElementById('timer-bar');
var timerFill = document.getElementById('timer-fill');
for(j=0;j<10;j++){
    var temp="";
    var caculatedAnswer=0;
    var questionNum=new Array(4);
    var choices= new Array(4);
    for(i=0;i<4;i++){
        questionNum[i]=Math.floor(Math.random()*1000);
        caculatedAnswer+=questionNum[i];
        temp+=questionNum[i];
        if(i<3) temp+=" + ";
        
    }
    choices[0]=caculatedAnswer;
    for(i=1;i<4;i++){
        choices[i]=Math.floor(Math.random()*1000);
    }
    choices.sort();
    var questionObject={
        equation : temp,
        userAnswer: -1,
        rightAnswer: caculatedAnswer,
        choicesArr : choices,
        isChecked : new Array(4).fill(false),
        isMarked : false,
        postion : j
    }
    test.push(questionObject);
    localStorage.setItem('quetion-object',JSON.stringify(test));
}
show();
function show(){
    var index=localStorage.getItem('currentIndex');
    question.textContent=test[index].equation;
    document.getElementById('questuin-number').textContent=test[index].postion+1;
    for(i=0;i<4;i++){
        if(test[index].isChecked[i]==true){
            radio[i].style.color = 'white';
            radio[i].style.background = '#0023C4';

        }
        else{
            radio[i].style.color = '';
            radio[i].style.background = '';
        }

        radio[i].textContent=test[index].choicesArr[i];
    }
}
var previous=document.getElementById('pervious-btn');
var next=document.getElementById('next-btn');
previous.addEventListener('click',function(){
    var index=localStorage.getItem('currentIndex');
    if(index==0) 
        return ;
    index--;
    localStorage.setItem('currentIndex',index);
    show();
    
});
next.addEventListener('click',function(){
    var index=localStorage.getItem('currentIndex');
    if(index==9) 
        return ;
    index++;
    localStorage.setItem('currentIndex',index);
    show();
    
});



for (i=0;i<4;i++) {
    radio[i].addEventListener("click", function () {
        var index = localStorage.getItem("currentIndex");
        test[index].userAnswer = this.textContent;
        for (j=0;j<4;j++) {
            if(test[index].choicesArr[j]==this.textContent){
                test[index].isChecked[j]=true;
                this.style.color = 'white';
                this.style.background = '#0023C4';
            }
            else{
                test[index].isChecked[j]=false;
                radio[j].style.color = '';
                radio[j].style.background = '';
            }
        }
        localStorage.setItem('quetion-object', JSON.stringify(test));
    });
}
function submitTast() {
    clearInterval(timerInterval);
    localStorage.removeItem('remainingTime');
    var score = 0;
    for (i=0;i<10;i++) {
        console.log(test[i].userAnswer,test[i].rightAnswer);
        if (test[i].userAnswer==test[i].rightAnswer) {
            score++;
        }
    }
    users[userIndex].latestScore=score;
    users[userIndex].maxScore=Math.max(score,users[userIndex].maxScore);
    localStorage.setItem('users', JSON.stringify(users));
    window.location.href = "result.html";

    
}
document.getElementById("Submet-button").addEventListener("click",submitTast);

function updateTimer() {
    remainingTime = parseInt(localStorage.getItem('remainingTime')) ;
    remainingTime--;
    if (remainingTime <= 0) {
        clearInterval(timerInterval);
        submitTast();
        return;
    }
    localStorage.setItem('remainingTime', remainingTime);

    var percentage = ((totalTime - remainingTime) / totalTime) * 100;
    timerFill.style.width = percentage + "%";
}

const timerInterval = setInterval(updateTimer, 100);
