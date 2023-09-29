// const color = `hsl(${percentage}, 100%, 50%)`;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
let star =document.getElementById("star");
let mountain_front =document.getElementById("mountain_front");
let mountain_behind =document.getElementById("mountain_behind");
let moon =document.getElementById("moon");
let text =document.getElementById("text");

const maxScrollDistance = 600;

window.addEventListener("scroll", function () {
    let value = window.scrollY;
    if (value <= maxScrollDistance) {
        star.style.left = value * 0.25 + 'px';
        moon.style.top = value * 1.05 + 'px';
        mountain_behind.style.top = value * 0.5 + 'px';
        mountain_front.style.top = value * 0 + 'px';
        text.style.marginRight = value * 2 + 'px';
    }
});



