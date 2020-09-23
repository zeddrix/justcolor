document.addEventListener("click", function (event) {
  if (event.target.matches(".random")) {
    changeToRandomColor();
  } else if (event.target.matches(".add-btn")) {
    showNewColorModal();
    addNewColorButton();
  } else if (event.target.matches("#okay-btn")) {
    getNewColorInput();
    closeNewColorModal();
  } else if (event.target.matches(".just-color-title")) {
    justColorTitleToggle();
  }
});

document.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    getNewColorInput();
    closeNewColorModal();
  }
});
