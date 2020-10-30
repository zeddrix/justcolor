document.addEventListener("click", (event) => {
  if (event.target.matches(".arbitrary-btn")) {
    changeToArbitraryColor();
  } else if (event.target.matches(".append-btn")) {
    showNewColorModal();
  } else if (event.target.matches("#cancel-btn")) {
    closeNewColorModal();
  } else if (event.target.matches("#add-btn")) {
    getNewColorInput();
  } else if (event.target.matches("#delete-btn")) {
    deleteColorButton();
  } else if (event.target.matches("#done-btn")) {
    doneInEditingColorName();
  } else if (event.target.matches(".just-color-title")) {
    justColorTitleToggle();
  } else if (event.target.matches("button")) {
    disableAppendBtn();
  } else if (event.target.matches("#backdrop")) {
    closeEditColorModal();
    closeNewColorModal();
    closeSettings();
  } else if (event.target.matches("#toggle-palette-btn")) {
    togglePalette();
  } else if (event.target.matches("#settings__toggle-button, .toggle-button__circle")) {
    openSettings();
  }
});

newColorInput.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    getNewColorInput();
  }
});

editColorInput.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    doneInEditingColorName();
  }
});

// EDITABLE BUTTONS
let delay;
const longpress = 1000;

document.addEventListener(
  "touchstart",
  (event) => {
    if (event.target.matches(".editable-btn")) {
      console.log("-----------------------\nTOUCHSTART");
      delay = setTimeout(showEditColorModal, longpress);
      getSelectedColorBtnName(event);
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
      getSelectedColorBtnName(event);
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

// UNEDITABLE BUTTONS
document.addEventListener(
  "touchstart",
  (event) => {
    if (event.target.matches(".uneditable-btn")) {
      console.log("-----------------------\nTOUCHSTART");
      delay = setTimeout(showTooltipOnUneditableBtn, longpress);
      getSelectedColorBtn(event);
    }
  },
  true
);

document.addEventListener(
  "mousedown",
  (event) => {
    if (event.target.matches(".uneditable-btn")) {
      console.log("MOUSEDOWN");
      delay = setTimeout(showTooltipOnUneditableBtn, longpress);
      getSelectedColorBtn(event);
    }
  },
  true
);

document.addEventListener("mouseup", (event) => {
  if (event.target.matches(".uneditable-btn")) {
    console.log("MOUSEUP");
    clearTimeout(delay);
    removeTooltipFromUneditableBtn();
  }
});

document.addEventListener("touchend", (event) => {
  if (event.target.matches(".uneditable-btn")) {
    console.log("TOUCHEND");
    clearTimeout(delay);
    removeTooltipFromUneditableBtn();
  }
});
