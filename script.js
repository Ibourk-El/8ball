let whiteBall = document.querySelector(".white-ball");
let slaider = document.querySelector("input");
let stick = document.querySelector(".stick");
let tablePosition = getComputedStyle(document.querySelector(".table"));
let whiteBallPsition = getComputedStyle(whiteBall);

let xD = 1,
  yD = 1;
let deg = 0;
let curen;
let speed = 0;

// controle the speed
slaider.addEventListener("input", (e) => {
  stick.style.transform = `translate(${-e.target
    .value}%,-50%) rotateZ(${deg}deg)`;
  console.log(e.target.value);
});

// main code
window.addEventListener("mouseup", (e) => {
  speed = e.target.value;
  e.target.value = 0;
  stick.style.transform = `translate(${e.target.value}% ,-50%) rotateZ(${deg}deg)`;
  //   make the  ball move
  let setInt = setInterval(() => {
    move(whiteBall, speed, deg, setInt);
    speed -= 10;
  }, 1000);
});

// rotate stick
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    deg -= 5;
  }
  if (e.key === "ArrowLeft") {
    deg += 5;
  }
  if (deg >= 360 || deg <= -360) {
    deg = 0;
  }
  console.log(deg);
  stick.style.transform = `translate(${e.target.value}%) rotateZ(${deg}deg)`;
});

resetStickPosition();

// ################## functions ####################

// move ball function
function move(ball, speed, deg, setInt) {
  let ballPsition = getComputedStyle(ball);
  let convertAngale = ((deg < 0 ? (deg -= 360) : deg) * 2 * Math.PI) / 360;
  if (speed <= 0) {
    clearInterval(setInt);
    resetStickPosition();
    return;
  }
  banda(ball);
  ball.style.left =
    parseInt(ballPsition.left) + speed * xD * Math.cos(convertAngale) + "px";
  ball.style.top =
    parseInt(ballPsition.top) + speed * yD * Math.sin(convertAngale) + "px";
  console.log(ballPsition.top);
}

//

function resetStickPosition() {
  stick.style.left = parseInt(whiteBallPsition.left) - 300 + "px";
  stick.style.top = whiteBallPsition.top;
  stick.style.transform = `translate(0,-50%) rotateZ(0deg)`;
}

// function contact between the balles

function ballesContact() {}

// function balles contact with banda

function banda(ball) {
  let bx = parseInt(getComputedStyle(ball).left);
  let by = parseInt(getComputedStyle(ball).top);
  if (by <= 0 || by >= 300) {
    yD = -1;
  }
  if (bx <= 0 || bx >= 600) {
    xD = -1;
  }
}
