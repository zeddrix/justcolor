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
    doneInEditingColorName();
  } else if (event.target.matches(".just-color-title")) {
    justColorTitleToggle();
  } else if (event.target.matches("button")) {
    disableAddBtn();
  } else if (event.target.matches("#backdrop")) {
    closeEditColorModal();
    closeNewColorModal();
  }
});

// document.addEventListener("keypress", (event) => {
//   if (event.target.matches("input")) {
//     return (
//       (event.charCode > 64 && event.charCode < 91) ||
//       (event.charCode > 96 && event.charCode < 123) ||
//       event.charCode === 32
//     );
//   }
// });

let delay;
const longpress = 1000;

document.addEventListener(
  "touchstart",
  (event) => {
    if (event.target.matches(".editable-btn")) {
      console.log("-----------------------\nTOUCHSTART");
      delay = setTimeout(showEditColorModal, longpress);
      getSelectedColorBtn(event);
    }
  },
  true
);

document.addEventListener(
  "mousedown",
  (event) => {
    if (event.target.matches(".editable-btn")) {
      console.log("MOUSEDOWN");
      delay = setTimeout(showEditColorModal, longpress);
      getSelectedColorBtn(event);
    }
  },
  true
);

document.addEventListener("mouseup", (event) => {
  if (event.target.matches(".editable-btn")) {
    console.log("MOUSEUP");
    clearTimeout(delay);
  }
});

document.addEventListener("touchend", (event) => {
  if (event.target.matches(".editable-btn")) {
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
