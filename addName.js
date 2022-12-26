$(document).ready(function(e) {
$("#check").css("display","none");
$("#start").css("display","none");
  $("#btn").click(function(e) {
  $("#check").css("display","block");
  $("#btn").css("display","none");
  $("#start").css("display","block");
  });});

  let usernames = [];

  const addName = (ev)=>{

      ev.preventDefault();  //to stop the form submitting

      let username = document.getElementById('username').value;
    
      usernames.push(username);
      

     console.log(usernames);
     
      //saving to localStorage
      localStorage.setItem('usernames', JSON.stringify(usernames) );
  }
  document.addEventListener('DOMContentLoaded', ()=>{
      document.getElementById('btn').addEventListener('click', addName);
  });
