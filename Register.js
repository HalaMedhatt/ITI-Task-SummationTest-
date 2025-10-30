var regexEmail = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");
var regexPassword = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$");
var vaild=new Array(5).fill(false);
var erorrMSG=document.getElementsByClassName('erorr-msg');
var users = JSON.parse(localStorage.getItem('users')) || [];
function nameVaildation(index){
    names=document.getElementsByClassName('register-field')[index].value;
    if(names == ""||isFinite(names)){
        erorrMSG[index].textContent="invalid name";
        vaild[index]=false;
        
    }
    else{
        erorrMSG[index].textContent="";
        vaild[index]=true;
    }
}


function emailValidation(index){
    email=document.getElementsByClassName('register-field')[index].value;
    if(!regexEmail.test(email)){
        erorrMSG[index].textContent="invalid email";
        vaild[index]=false;
        
    }
    else{
        erorrMSG[index].textContent="";
        vaild[index]=true;
    }
}

function passValidation(index){
    password=document.getElementsByClassName('register-field')[index].value;
    if(!regexPassword.test(password)){
        erorrMSG[index].textContent="Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character";
        vaild[index]=false;
        
    }
    else{
        erorrMSG[index].textContent="";
        vaild[index]=true;
    }
}
function ConfirmPass(index){
    password=document.getElementsByClassName('register-field')[index-1].value;
    conPass=document.getElementsByClassName('register-field')[index].value;

    if(conPass!=password){
        erorrMSG[index].textContent="password doesn't match";
        vaild[index]=false;
        
    }
    else{
        erorrMSG[index].textContent="";
        vaild[index]=true;
    }
}

var form=document.getElementsByClassName('register-form')[0];
form.addEventListener('submit',function(e){
    var store=true;
    for(i=0;i<5;i++){
        if(vaild[i]==false){
            e.preventDefault();
            store=false;
            erorrMSG[i].textContent='invalid field';
            
        }
    }
    if(store){

        var newUser = {
        name: form.firstName.value,
        email: form.email.value,
        password: form.password.value
        };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));


    }

});
