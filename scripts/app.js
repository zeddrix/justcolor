// Click JUST COLOR title to fade-out
const justColorTitleToggle = () => {
  const justColorTitle = document.querySelector(".just-color-title");
  justColorTitle.classList.toggle("fade-out");
};

// converts rgb color value into hexadecimal
const rgbToHex = (rgb) => {
  // converts any value from 0-256 into a hex value of 0-F
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    // Add '0' to a 1 digit hex value
    hex = "0" + hex;
  }
  return hex;
};

const fullColorHex = (r, g, b) => {
  // This already returns a hex value, not rgb
  const red = rgbToHex(r);
  const green = rgbToHex(g);
  const blue = rgbToHex(b);
  return red + green + blue;
};

// return any RANDOM number from 0-256
const getRandomColorValue = () => {
  return Math.floor(Math.random() * 256);
};

const changeToRandomColor = () => {
  // Get a set of three random numbers
  // This already returns a hex value, not rgb
  const rColor = fullColorHex(
    getRandomColorValue(),
    getRandomColorValue(),
    getRandomColorValue()
  );
  document.body.style.backgroundColor = "#" + rColor;
};

// 'color' is argument
// 'colors[c].colorHex' in changeColor(colors[c].colorHex) is the argument
const changeColor = (color) => {
  document.body.style.backgroundColor = color;
};

const colorsContainer = document.querySelector(".colors-container");

for (let c = 0; c < colors.length; c++) {
  const button = document.createElement("button");
  button.innerText = colors[c].label;
  button.classList.add(colors[c].name);
  button.addEventListener("click", () => changeColor(colors[c].colorHex));
  colorsContainer.append(button);
}

let newButton;

const addNewColorButton = () => {
  newButton = document.createElement("button");
  // get current background color of page
  const newBackgroundColor = document.body.style.backgroundColor;
  // new button's background color
  newButton.style.backgroundColor = newBackgroundColor;
  // upon click, change page's background color USING the button's background color
  newButton.addEventListener("click", () => changeColor(newBackgroundColor));
  colorsContainer.append(newButton);
};

const newColorInput = document.querySelector("#new-color-input");

const getNewColorInput = () => {
  console.log("NEW COLOR INPUT NAME:", newColorInput.value);
  // insert newColorInput.value as a label for the newButton
  newButton.textContent = newColorInput.value;
};

const newColorModal = document.querySelector(".new-color-modal");
const backdrop = document.querySelector("#backdrop");

const showNewColorModal = () => {
  backdrop.style.display = "block";
  newColorModal.style.display = "block";

  newColorInput.focus();
  newColorInput.value = "";
};

const closeNewColorModal = () => {
  backdrop.style.display = "none";
  newColorModal.style.display = "none";
};
