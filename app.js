const changeColor = (color) => {
    document.body.style.backgroundColor = color;
}

const changeToRandomColor = () => {
    const rColor = fullColorHex(getRandomColorValue(), getRandomColorValue(), getRandomColorValue()); 
    document.body.style.backgroundColor = "#" + rColor;
}

const getRandomColorValue = () => {
    return Math.floor(Math.random()*256)
}

const rgbToHex = function (rgb) { 
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
};

const fullColorHex = function(r, g, b) {   
    const red = rgbToHex(r);
    const green = rgbToHex(g);
    const blue = rgbToHex(b);
    return red + green + blue;
};
