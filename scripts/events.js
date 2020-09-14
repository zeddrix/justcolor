window.addEventListener("click", function (event) {
  if (event.target.matches(".random")) {
    changeToRandomColor();
  } else if (event.target.matches(".add-btn")) {
    showNewColorModal();
    addNewColorButton();
  }
});
