colors = [{
    name: 'red',
    colorValue: 'red',
    label: 'r',
},
{
    name: 'yellow',
    colorValue: 'yellow',
    label: 'y',
},
{
    name: 'blue',
    colorValue: '#0077FF',
    label: 'b',
},
{
    name: 'green',
    colorValue: 'green',
    label: 'g',
},
{
    name: 'purple',
    colorValue: '#800080',
    label: 'p',
},
{
    name: 'orange',
    colorValue: '#FFA500',
    label: 'o',

},
{
    name: 'bluegreen',
    colorValue: '#0d98ba',
    label: 'bg',
},
{
    name: 'blueviolet',
    colorValue: '#8a2be2',
    label: 'bv',
},
{
    name: 'yellowgreen',
    colorValue: '#9acd32',
    label: 'yg',
},
{
    name: 'redviolet',
    colorValue: '#c71585',
    label: 'rv',
},
{
    name: 'redorange',
    colorValue: '#ff6600',
    label: 'ro',
},
{
    name: 'yelloworange',
    colorValue: '#ffae42',
    label: 'yo',
}];

const changeColor = (color) => {
    document.body.style.backgroundColor = color;
}

// const red = document.querySelector('.red');
// red.addEventListener('click', () => {
//     document.body.style.backgroundColor = 'red';
// })

const changeToRandomColor = () => {
    const rColor = fullColorHex(getRandomColorValue(), getRandomColorValue(), getRandomColorValue()); 
    document.body.style.backgroundColor = "#" + rColor;
}

// const addColorButton = () => {
//     const addColor = 
//     document.body.style.backgroundColor = 
// }
    
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

const arrayLength = colors.length;
for (let c = 0; c < arrayLength; c++) {
    console.log(colors[c])
}
