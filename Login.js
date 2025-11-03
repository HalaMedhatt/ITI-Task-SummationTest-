
var form2 = document.getElementsByClassName("login-form")[0];
var users = JSON.parse(localStorage.getItem('users'));
var vaild=new Array(2).fill(false);
var erorrMSG=document.getElementsByClassName('erorr-msg');



function emailVaildation(index){
  
    email =form2.email.value;
    if(email == ""){
        erorrMSG[index].textContent="invalid email";
        vaild[index]=false;
        
    }
    else{
        erorrMSG[index].textContent="";
        vaild[index]=true;
    }
}
function passwordVaildation(index){
  
    password =form2.password.value;
    if(password == ""){
        erorrMSG[index].textContent="invalid password";
        vaild[index]=false;
        
    }
    else{
        erorrMSG[index].textContent="";
        vaild[index]=true;
    }
}


form2.addEventListener('submit',function(e){
    var store=true;
    for(i=0;i<2;i++){
        if(vaild[i]==false){
            e.preventDefault();
            store=false;
            erorrMSG[i].textContent='invalid field';
            
        }
    }
    if(store){
        var userFound = false;
        for(var i =0;i<users.length;i++){
            if(users[i].email === form2.email.value && users[i].password === form2.password.value ){
                localStorage["current"]= i;
                userFound = true;
                break;
            }

        }
        if(userFound===false){
            e.preventDefault();
            
            document.getElementById("erorr-msg").textContent ="user not found";
        }
     
        


    }

});

