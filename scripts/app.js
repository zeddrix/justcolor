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
changeToRandomColor();

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
let newBackgroundColor;

const addNewColorButton = () => {
  newButton = document.createElement("button");
  // get current background color of page
  newBackgroundColor = document.body.style.backgroundColor;
  // new button's background color
  newButton.style.backgroundColor = newBackgroundColor;
  // upon click, change page's background color USING the button's background color
  newButton.addEventListener("click", () => changeColor(newBackgroundColor));
  colorsContainer.append(newButton);
  console.log("newBackgroundColor", newBackgroundColor);
};

const newColorInput = document.querySelector("#new-color-input");

const getNewColorInput = () => {
  // insert newColorInput.value as a label for the newButton
  const newColorInputValue = newColorInput.value;
  if (newColorInputValue !== "") {
    addNewColorButton();
    newButton.textContent = newColorInputValue;
    // console.log("NEW COLOR INPUT NAME:", newColorInput.value);
    const newColorNamesObject = {
      newColorName: newColorInputValue,
      newColorValue: newBackgroundColor,
    };

    let newColorNames;

    if (localStorage.getItem("newColorNames") === null) {
      newColorNames = [];
    } else {
      newColorNames = JSON.parse(localStorage.getItem("newColorNames"));
    }

    newColorNames.push(newColorNamesObject);
    localStorage.setItem("newColorNames", JSON.stringify(newColorNames));

    closeNewColorModal();
  } else if (newColorInputValue === "") {
    newColorInput.classList.add("name-required");
    newColorInput.focus();

    setTimeout(function () {
      newColorInput.classList.remove("name-required");
    }, 300);
  }
};

const getNewColorNames = () => {
  if (localStorage.getItem("newColorNames") === null) {
    newColorNames = [];
  } else {
    newColorNames = JSON.parse(localStorage.getItem("newColorNames"));
  }

  for (let i = 0; i < newColorNames.length; i++) {
    newButton = document.createElement("button");
    newButton.style.backgroundColor = newColorNames[i].newColorValue;
    newButton.addEventListener("click", () =>
      changeColor(newColorNames[i].newColorValue)
    );
    newButton.textContent = newColorNames[i].newColorName;
    colorsContainer.append(newButton);
  }
};

const DOMContentLoaded = () => {
  document.addEventListener("DOMContentLoaded", getNewColorNames);
};

DOMContentLoaded();

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
