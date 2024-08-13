


let tg = window.Telegram.WebApp;

tg.expand();

let_item = "";


fetch("user_info.json", {cache: 'no-store'})
  .then(response => response.json())
  .then(json => console.log(json));
  let number = json[0].score;








let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function(){
	number = number + 1;
	var div = document.getElementById('score');
	div.innerHTML = number + " Xcoin";
});





var div = document.getElementById('score');
div.innerHTML = number + " Xcoin";











Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.id}`;

usercard.appendChild(p);