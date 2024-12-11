const box = document.querySelector("#box");

function move(target){
  const interval = setInterval(() => {
  const actualPosition = parseInt(getComputedStyle(target).left);
  target.style.left = actualPosition + 1 + "px";
},10);

// start and stop movement after a certain time

setTimeout(() => {
  clearInterval(interval);
}, 2000); // interval of 2 seconds
}

box.addEventListener("click", (e) => {
  move(e);
});
