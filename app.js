const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const purple = document.querySelector('.purple');
const orange = document.querySelector('.orange');
const bluegreen = document.querySelector('.bluegreen');
const blueviolet = document.querySelector('.blueviolet');
const yellowgreen = document.querySelector('.yellowgreen');
const redviolet = document.querySelector('.redviolet');
const redorange = document.querySelector('.redorange');
const yelloworange = document.querySelector('.yelloworange');

red.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
})
yellow.addEventListener('click', () => {
    document.body.style.backgroundColor = 'yellow';
})
blue.addEventListener('click', () => {
    document.body.style.backgroundColor = 'rgb(0, 119, 255)';
})
green.addEventListener('click', () => {
    document.body.style.backgroundColor = 'green';
})
purple.addEventListener('click', () => {
    document.body.style.backgroundColor = 'purple';
})
orange.addEventListener('click', () => {
    document.body.style.backgroundColor = 'orange';
})
bluegreen.addEventListener('click', () => {
    document.body.style.backgroundColor = 'rgb(32, 123, 131)';
})
blueviolet.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blueviolet';
})
yellowgreen.addEventListener('click', () => {
    document.body.style.backgroundColor = 'yellowgreen';
})
redviolet.addEventListener('click', () => {
    document.body.style.backgroundColor = '#c71585';
})
redorange.addEventListener('click', () => {
    document.body.style.backgroundColor = 'rgb(255, 102, 0)';
})
yelloworange.addEventListener('click', () => {
    document.body.style.backgroundColor = '#ffae42';
})
