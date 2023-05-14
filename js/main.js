const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});




var direction = "right";
function moveBike() {
  var bike = document.getElementById("bike");
  if (direction == "right") {
    bike.style.left = "75%";
    direction = "left";
    bike.classList("show");
  } else {
    bike.style.left = "50%";
    direction = "right";
  }
//   if (parseInt(bike.style.left) >= -75) {
//     bike.style.visibility = "hidden";
//   }
//   if(parseInt(bike.style.left <= -75)){
// 	bike.style.visibility = "visible";
//   }
//    else {
//     bike.style.visibility = "visible";
//   }
}

setInterval(moveBike, 7000);
