window.addEventListener("click", function (event) {
  if (event.target.matches(".random")) {
    changeToRandomColor();
  } else if (event.target.matches(".add-button")) {
    addNewColorButton();
  } else {
    changeToRandomColor();
    console.log(
      "You haven't clicked on any button. You're just clicking everywhere. So I'll just paint the page with a RANDOM color."
    );
  }
});
