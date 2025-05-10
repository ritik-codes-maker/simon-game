let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "blue"];
let started = false;
let level = 0;
let h3 = document.querySelector("h3");
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;
    levelUp();
  }
});
function levelUp() {
  userSeq = [];
  level++;
  h3.innerText = `level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let ranBtn = document.querySelector(`.${randColor}`);
  // console.log(randColor);
  // console.log(randIdx);
  // console.log(ranBtn);
  gameSeq.push(randColor);
  console.log(gameSeq);
  btnFlash(ranBtn);
}
function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 200);
}
function checkAns(idx){
  if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
      setTimeout(levelUp,1000);
    }
  }else{
    h3.innerHTML =`Game Over ! your score was <b> ${level}</b> <br> press any key to restart.`
    let body = document.querySelector("body");
    body.classList.add("errorFlash");
    setTimeout(function(){
      body.classList.remove("errorFlash");
    },150);
    reset();
  }
}

function btnPress() {
  let btn = this;
  btnFlash(btn);
 let userColor = btn.getAttribute("id");
 userSeq.push(userColor);
//  console.log(userSeq);
 checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
function reset(){
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}