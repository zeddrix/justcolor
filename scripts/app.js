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

const plusBtn = document.querySelector(".plus-btn");

const disableAddBtn = () => {
  plusBtn.classList.add("disabled");
  plusBtn.setAttribute("disabled", "");
};

const enableAddBtn = () => {
  plusBtn.classList.remove("disabled");
  plusBtn.removeAttribute("disabled");
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
  enableAddBtn();
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
  button.classList.add("editable-btn");
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
  newButton.classList.add("editable-btn");
  // upon click, change page's background color USING the button's background color
  newButton.addEventListener("click", () => changeColor(newBackgroundColor));
  colorsContainer.append(newButton);
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

    setTimeout(() => {
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
    newButton.classList.add("editable-btn");
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
  newColorModal.style.display = "block";
  backdrop.style.display = "block";

  newColorInput.focus();
  newColorInput.value = "";
};

const closeNewColorModal = () => {
  newColorModal.style.display = "none";
  backdrop.style.display = "none";
};

// EDIT COLOR MODAL
const editColorModal = document.querySelector(".edit-color-modal");

const showEditColorModal = () => {
  editColorModal.style.display = "block";
  backdrop.style.display = "block";

  const editColorInput = document.querySelector("#edit-color-input");
  editColorInput.focus();
};

const closeEditColorModal = () => {
  editColorModal.style.display = "none";
  backdrop.style.display = "none";
};
