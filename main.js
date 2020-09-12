const eyes = function (selector) {
  const eye = document.querySelector(selector),
    pupil = eye.querySelector(".pupil"),
    eyeArea = eye.getBoundingClientRect();

  const moveEye = function (mouseX, mouseY) {
    const radian = Math.atan2(
      mouseY - (eyeArea.y + eyeArea.height * 0.5),
      mouseX - (eyeArea.x + eyeArea.width * 0.5)
    );
    pupil.style.transform =
      "rotate(" + ((180 * radian) / Math.PI - 90) + "deg)";
  };

  return {
    moveEye: moveEye,
  };
};

const leftEye = eyes(".eye-1");
const rightEye = eyes(".eye-2");

window.addEventListener("mousemove", (e) => {
  leftEye.moveEye(e.pageX, e.pageY);
  rightEye.moveEye(e.pageX, e.pageY);
});
