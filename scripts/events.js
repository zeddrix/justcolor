document.addEventListener("click", function (event) {
  if (event.target.matches(".random")) {
    changeToRandomColor();
  } else if (event.target.matches(".add-btn")) {
    showNewColorModal();
    addNewColorButton();
  } else if (event.target.matches("#okay-btn")) {
    getNewColorInputName();
  }
});

document.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    getNewColorInputName();
  }
});
