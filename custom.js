//Your Turn Function
let title = document.getElementById("title");
let item = document.querySelectorAll(".item");
let retryBtn = document.getElementById("retryBtn");
retryBtn.style.display = "none";
let turn = "X";


for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", (e) =>  gameTurn(e, i));
};

function gameTurn(e, i){
  if (turn === "X" && item[i].innerHTML === "") {
    item[i].style.color = "blue";
    item[i].style.backgroundColor = "black";
    item[i].style.textShadow = "1px 1px 20px red";
    e.currentTarget = item[i].innerHTML = "X";
    title.innerHTML = "O Turn";
    winner();
    turn = "O";
  } else if (turn === "O" && item[i].innerHTML === "") {
    item[i].style.color = "red";
    item[i].style.backgroundColor = "#fff";
    item[i].style.textShadow = "1px 1px 20px blue";
    e.currentTarget = item[i].innerHTML = "O";
    title.innerHTML = "X Turn";
    winner();
    turn = "X";
  }
}

// Winner Check Function
function winner () {
  if (item[0].innerHTML == item[1].innerHTML && item[1].innerHTML == item[2].innerHTML && item[0].innerHTML != "") {
    title.innerHTML = `${turn} is the winner`;
    celebrate ();
    retryBtn.style.display = "block";
  } else if (item[0].innerHTML == item[3].innerHTML && item[3].innerHTML == item[6].innerHTML && item[0].innerHTML != "") {
    title.innerHTML = `${turn} is the winner`;
    celebrate ();
    retryBtn.style.display = "block";
  } else if (item[0].innerHTML == item[4].innerHTML && item[4].innerHTML == item[8].innerHTML && item[0].innerHTML != "") {
    title.innerHTML = `${turn} is the winner`;
    celebrate ();
    retryBtn.style.display = "block";
  } else if (item[1].innerHTML == item[4].innerHTML && item[4].innerHTML == item[7].innerHTML && item[1].innerHTML != "") {
    title.innerHTML = `${turn} is the winner`;
    celebrate ();
    retryBtn.style.display = "block";
  } else if (item[2].innerHTML == item[5].innerHTML && item[5].innerHTML == item[8].innerHTML && item[2].innerHTML != "") {
    title.innerHTML = `${turn} is the winner`;
    celebrate ();
    retryBtn.style.display = "block";
  } else if (item[2].innerHTML == item[4].innerHTML && item[4].innerHTML == item[6].innerHTML && item[2].innerHTML != "") {
    title.innerHTML = `${turn} is the winner`;
    celebrate ();
    retryBtn.style.display = "block";
  } else if (item[3].innerHTML == item[4].innerHTML && item[4].innerHTML == item[5].innerHTML && item[3].innerHTML != "") {
    title.innerHTML = `${turn} is the winner`;
    celebrate ();
    retryBtn.style.display = "block";
  } else if (item[6].innerHTML == item[7].innerHTML && item[7].innerHTML == item[8].innerHTML && item[6].innerHTML != "") {
    title.innerHTML = `${turn} is the winner`;
    celebrate ();
    retryBtn.style.display = "block";
  }
}


// Celebrate Function
function celebrate () {
  var confettiSettings = { target: 'my-canvas' };
  var confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
}


// Retry Game Function
retryBtn.addEventListener("click", retryGame);

function retryGame() {
  window.location.reload();
}









