const changeColor = (color) => {
  document.body.style.backgroundColor = color;
};

// const red = document.querySelector('.red');
// red.addEventListener('click', () => {
//     document.body.style.backgroundColor = 'red';
// })

const rgbToHex = function (rgb) {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
};

const fullColorHex = function (r, g, b) {
  const red = rgbToHex(r);
  const green = rgbToHex(g);
  const blue = rgbToHex(b);
  return red + green + blue;
};

const changeToRandomColor = () => {
  const rColor = fullColorHex(
    getRandomColorValue(),
    getRandomColorValue(),
    getRandomColorValue()
  );
  document.body.style.backgroundColor = "#" + rColor;
};

const getRandomColorValue = () => {
  return Math.floor(Math.random() * 256);
};

const arrayLength = colors.length;
const parent = document.querySelector(".container");

for (let c = 0; c < arrayLength; c++) {
  const button = document.createElement("button");
  button.innerText = colors[c].label;
  button.classList.add(colors[c].name);
  button.addEventListener("click", () => changeColor(colors[c].colorValue));
  parent.append(button);
}

const addNewColorButton = () => {
  const newButton = document.createElement("button");
  const newColor = document.body.style.backgroundColor;
  // newButton.innerText = "";
  newButton.classList.add("button-prop");
  newButton.style.backgroundColor = newColor;
  newButton.addEventListener("click", () => changeColor(newColor));
  parent.append(newButton);
  console.log(newButton);
};

const showNewColorModal = () => {
  const newColorModal = document.querySelector(".new-color-modal");
  const backdrop = document.querySelector("#backdrop");
  backdrop.style.display = "block";
  newColorModal.style.display = "block";
};

const getNewColorInputName = () => {
  const newColorInputName = document.querySelector("#new-color-input-name")
    .value;
  console.log(newColorInputName);
};

// const addNewColorButton = () => {
//     const newButton =
//     document.body.style.backgroundColor =
// }
