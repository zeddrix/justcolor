document.addEventListener("click", function (event) {
  if (event.target.matches(".random")) {
    changeToRandomColor();
  } else if (event.target.matches(".add-btn")) {
    showNewColorModal();
  } else if (event.target.matches("#okay-btn")) {
    getNewColorInput();
  } else if (event.target.matches(".just-color-title")) {
    justColorTitleToggle();
  }
});

// !!!!!!!!!!!!!ISSUE: Creates new button even if modal is not open!!!!!!!!!!!!
// document.addEventListener("keypress", (event) => {
//   if (event.keyCode === 13) {
//     getNewColorInput();
//   }
// });
