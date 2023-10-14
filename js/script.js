let cursor = document.querySelectorAll(".cursor");
let cover = document.querySelector(".cover");
let MoveCursor = false;

let axis = { x: 0, y: 0 };

cursor.forEach((ci) => {
  ci.x = 0;
  ci.y = 0;
});



window.addEventListener("mousemove", (event) => moveWithCursor(event));

function moveWithCursor(e) {
  MoveCursor = true;
  axis.y = e.clientY;
  axis.x = e.clientX;
}

function animateMotion() {
  let x = axis.x,
    y = axis.y;

  cursor.forEach(function (ci, index) {
    ci.style.left = x - 75 + "px";
    ci.style.top = y - 140 + "px";
    ci.x = x;
    ci.y = y;
    const FollowFirstCursor = cursor[index + 1] || cursor[0];
    x += (FollowFirstCursor.x - x) * 0.01;
    y += (FollowFirstCursor.y - y) * 0.01;
  });
  cover.style.left = x - 190 + "px";
  cover.style.top = y - 250 + "px";
  requestAnimationFrame(animateMotion);
}

animateMotion();

function removingEventListener() {
  if (MoveCursor) {
    return window.removeEventListener("mousemove", moveWithCursor);
  }
}

removingEventListener();
