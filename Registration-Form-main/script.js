const title=document.getElementById("title");
const nameField=document.getElementById("nameField");
const signUp=document.getElementById("signUp");
const signIn=document.getElementById("signIn");

signIn.onclick=function(){
    nameField.style.maxHeight="0";
    title.textContent="Sign In";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
   
}

signUp.onclick=function(){
    nameField.style.maxHeight="75px";
    title.textContent="Sign Up";
    signIn.classList.add("disable");
    signUp.classList.remove("disable");
    
}