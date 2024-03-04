const send_btn=document.getElementById('send_btn');
const username=document.getElementById('name');
const email=document.getElementById("email");
const message=document.getElementById("message");

send_btn.onclick=()=>{
    username.innerText="";
    email.innerText="";
    message.innerText="";
}

