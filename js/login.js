// 1----add click even hendler with submit button 
document.getElementById('btn-submit').addEventListener('click',function(){
    //console.log('Submit buttom click');
    //2---
    const emailField = document.getElementById('user-input');
    const email = emailField.value;
   console.log(email);
   //3---
   const passwordField = document.getElementById('user-passward');
   const passward = passwordField.value;
   console.log(passward);
   //4----
   if(email=== 'moshiur@gmail.com' && passward==='faruk12345'){
    window.location.href = 'bank.html';
   }
   else{
        alert('Toke Ami Tejjo Sontan Gosona korlam. Tui Password Vule Gessos ');
   }
})