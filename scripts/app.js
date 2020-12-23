const appendBtn = document.querySelector(".append-btn");
const palette = document.querySelector(".palette");
const backdrop = document.querySelector("#backdrop");
const invisibleBackdrop = document.querySelector("#invisible-backdrop");
const newColorInput = document.querySelector("#new-color-input");
const editColorInput = document.querySelector("#edit-color-input");
const newColorModal = document.querySelector(".new-color-modal");
const editColorModal = document.querySelector(".edit-color-modal");
const settingsDiv = document.querySelector("#settings__div");
const toggleButtonCircles = document.querySelectorAll(".circle");
let uneditableColorBtn;
let colorNameInLS;
let selectedColorBtn;
let selectedColorBtnName;
let newButton;
let newColorsArray;
let newBackgroundColor;
let selectedColorBtnRGB;

const justColorTitleToggle = () => {
  const justColorTitle = document.querySelector(".justcolor-title");
  justColorTitle.classList.toggle("fade-out");
};

const changeColor = (color) => {
  document.body.style.backgroundColor = color;
};

const adaptableAppendBtn = () => {
  appendBtn.style.backgroundColor = document.body.style.backgroundColor;
};

const disableAppendBtn = () => {
  appendBtn.style.color = "#202020";
  appendBtn.style.backgroundColor = "#202020";
  appendBtn.setAttribute("disabled", "");
  appendBtn.classList.add("disabled");
  appendBtn.classList.add("tooltip");
};

const enableAppendBtn = () => {
  appendBtn.style.color = "black";
  adaptableAppendBtn();
  appendBtn.removeAttribute("disabled");
  appendBtn.classList.remove("disabled");
  appendBtn.classList.remove("tooltip");
};

const getSelectedColorBtn = (event) => {
  uneditableColorBtn = event.target;
};

const showTooltipOnUneditableBtn = () => {
  uneditableColorBtn.classList.add("tooltip");
};

const removeTooltipFromUneditableBtn = () => {
  uneditableColorBtn.classList.remove("tooltip");
};

const togglePalette = () => {
  palette.classList.toggle("disappear");

  const togglePaletteBtn = document.querySelector("#toggle-palette-btn");
  if (togglePaletteBtn.textContent === "▼") {
    togglePaletteBtn.textContent = "▲";
  } else {
    togglePaletteBtn.textContent = "▼";
  }
};

const addNewColorButton = () => {
  newButton = document.createElement("button");
  newBackgroundColor = document.body.style.backgroundColor;
  const colorValue = document.body.style.backgroundColor;
  newButton.style.backgroundColor = newBackgroundColor;
  newButton.addEventListener("mousedown", () => changeColor(colorValue));
  newButton.addEventListener("touchdown", () => changeColor(colorValue));
  newButton.classList.add("editable-btn");
  palette.append(newButton);
  disableAppendBtn();
  newButton.focus();
  newButton.click();
};

const getNewColorInput = () => {
  const newColorInputValue = newColorInput.value;
  if (newColorInputValue !== "") {
    addNewColorButton();
    newButton.textContent = newColorInputValue;
    const newColorsArrayObject = {
      newColorName: newColorInputValue,
      newColorValue: newBackgroundColor,
    };
    if (localStorage.getItem("newColorsArray") === null) {
      newColorsArray = [];
    } else {
      newColorsArray = JSON.parse(localStorage.getItem("newColorsArray"));
    }
    newColorsArray.push(newColorsArrayObject);
    localStorage.setItem("newColorsArray", JSON.stringify(newColorsArray));

    closeNewColorModal();
  } else if (newColorInputValue === "") {
    newColorInput.classList.add("name-required");
    newColorInput.focus();
    setTimeout(() => {
      newColorInput.classList.remove("name-required");
    }, 300);
  }
};

const getNewColorNamesFromLS = () => {
  if (localStorage.getItem("newColorsArray") === null) {
    newColorsArray = [];
  } else {
    newColorsArray = JSON.parse(localStorage.getItem("newColorsArray"));
  }

  for (let i = 0; i < newColorsArray.length; i++) {
    newButton = document.createElement("button");
    newButton.style.backgroundColor = newColorsArray[i].newColorValue;
    newButton.classList.add("editable-btn");
    newButton.addEventListener("mousedown", () =>
      changeColor(newColorsArray[i].newColorValue)
    );
    newButton.addEventListener("touchdown", () =>
      changeColor(newColorsArray[i].newColorValue)
    );
    newButton.textContent = newColorsArray[i].newColorName;
    palette.append(newButton);
  }
};

const DOMContentLoaded = () => {
  document.addEventListener("DOMContentLoaded", getNewColorNamesFromLS);
};

const getSelectedColorBtnName = (event) => {
  selectedColorBtn = event.target;
  selectedColorBtnName = selectedColorBtn.textContent;
  editColorInput.value = selectedColorBtnName;
  selectedColorBtnRGB = selectedColorBtn.style.backgroundColor;
};

const doneInEditingColorName = () => {
  // find newColorValue that is equal to the selectedColorBtnName and then set the edited name to that property
  if (selectedColorBtnName !== editColorInput.value) {
    selectedColorBtn.textContent = editColorInput.value;
    const findResult = newColorsArray.find(({ newColorValue }) => {
      let booleanValue = newColorValue === selectedColorBtnRGB;
      return booleanValue;
    });
    findResult.newColorName = editColorInput.value;
    localStorage.setItem("newColorsArray", JSON.stringify(newColorsArray));
    closeEditColorModal();
  } else {
    closeEditColorModal();
  }
};

const deleteColorButton = () => {
  selectedColorBtn.remove();
  for (var i = 0; i < newColorsArray.length; i++) {
    var newColor = newColorsArray[i];
    if (selectedColorBtnName.indexOf(newColor.newColorName) !== -1) {
      newColorsArray.splice(i, 1);
      i--;
    }
  }

  localStorage.setItem("newColorsArray", JSON.stringify(newColorsArray));

  closeEditColorModal();
  enableAppendBtn();
};

changeToArbitraryColor();
renderBuiltInColorButtons();
DOMContentLoaded();
