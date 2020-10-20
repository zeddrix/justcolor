document.addEventListener("click", (event) => {
  if (event.target.matches(".random")) {
    changeToRandomColor();
  } else if (event.target.matches(".plus-btn")) {
    showNewColorModal();
  } else if (event.target.matches("#cancel-btn")) {
    closeNewColorModal();
  } else if (event.target.matches("#add-btn")) {
    getNewColorInput();
  } else if (event.target.matches("#done-btn")) {
    closeEditColorModal();
  } else if (event.target.matches(".just-color-title")) {
    justColorTitleToggle();
  } else if (event.target.matches("button")) {
    disableAddBtn();
  } else if (event.target.matches("#backdrop")) {
    closeEditColorModal();
    closeNewColorModal();
  }
});

let delay;
const longpress = 1000;

document.addEventListener(
  "mousedown",
  (event) => {
    if (event.target.matches("button")) {
      console.log("MOUSEDOWN");
      delay = setTimeout(showEditColorModal, longpress);
    }
  },
  true
);

document.addEventListener(
  "touchstart",
  (event) => {
    if (event.target.matches("button")) {
      console.log("TOUCHSTART");
      delay = setTimeout(showEditColorModal, longpress);
    }
  },
  true
);

document.addEventListener("mouseup", (event) => {
  if (event.target.matches("button")) {
    console.log("MOUSEUP");
    clearTimeout(delay);
  }
});

document.addEventListener("mouseout", (event) => {
  if (event.target.matches("button")) {
    console.log("MOUSEOUT");
    clearTimeout(delay);
  }
});

document.addEventListener("touchend", (event) => {
  if (event.target.matches("button")) {
    console.log("TOUCHEND");
    clearTimeout(delay);
  }
});

// !!!!!!!!!!!!!ISSUE: Creates new button even if modal is not open!!!!!!!!!!!!
// document.addEventListener("keypress", (event) => {
//   if (event.keyCode === 13) {
//     getNewColorInput();
//   }
// });
