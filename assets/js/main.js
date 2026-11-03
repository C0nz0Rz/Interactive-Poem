// main.js


let grid = document.querySelectorAll(".grid-container");
let divs = document.querySelectorAll(".grid-container div");

let neonWords = document.querySelectorAll(".neon");
let neonColors = ["#ff2079", "rgb(255, 51, 255)", "#67ff20", "#fff01f", "#bc13fe", "#ff6e27"];
let dullWords = document.querySelectorAll(".dull");
let dullColors= ["#755461", "rgb(71, 59, 71)", "#384930", "#686436", "#5e3e6b", "#5f4436"];
let colorIndex = 0;

function randomize() {
    console.log(divs.length, "randomize!")

    // affects the whole grid

    grid[0].computedStyleMap.transform = `rotate(${Math.random()*360}deg)`;

    // just the grid divs
    divs.forEach(function (div) {
        let scale = randomNumber(0.7, 2.5);
        let translateX = randomNumber(0, 55);
        let translateY = randomNumber(0, 25);
        let rotate = randomNumber(-95, 95);

        //50 percent of the time...
        if (Math.random() > .5) {
            scale = 1; //don't affect scale
            translateX = randomNumber(0, 80);
            translateY = randomNumber(0, 80);
        }

        div.style.transform = `scale(${scale}) translate(${translateX}%, ${translateY}%) rotate(${rotate}deg)`;

    });
}

function cycleColors() {
    neonWords.forEach(function (word, i) {
        let color = neonColors[(colorIndex + i) % neonColors.length];
        <!-- i allows for each word to have a diff colorr  -->
        word.style.color = color;
        word.style.textShadow = `0 0 10px ${color}, 0 0 25px ${color}`;
        <!-- text shadow for neon glow. Idk how to add to CSS with all of this other code, so just added here in javascript. -->
    });
        colorIndex++;
}

function cycleColors2() {
    dullWords.forEach(function (word, i) {
        let color = dullColors[(colorIndex + i) % dullColors.length];
        word.style.color = color;
    });
        colorIndex++;
}

document.addEventListener("click", randomize);
document.addEventListener("click", cycleColors);
document.addEventListener("click", cycleColors2);


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
