const root = document.documentElement;
const computedStyles = getComputedStyle(root);

const heroImg = document.querySelector("#Hero-img");

let tick = 0;
let seconds = 0;
let secondsUpdate = 0;

let timeInterval = setInterval(() => {
    tick++;
    seconds = Math.floor(tick/250);
    
    if(seconds > secondsUpdate){
        secondsUpdate = seconds;
    }
}, 1);

function easeOut(x){
    return Math.sin((x * Math.PI) / 2);
}

function easeIn(x){
    return 1 - Math.cos((x * Math.PI) / 2);
}

/* NAV START ================================================================== */
let navButton = document.querySelector("#Nav-button");
let navArrow = document.querySelector("#Nav-button-arrow");
let nav = document.querySelector("#Nav");
let navButtonClickEvent = navButton.addEventListener("click",()=>{
    if(nav.classList == ""){
        nav.classList.toggle("nav-open");
        navArrow.classList.toggle("nav-arrow-open");
    } else {
        nav.classList.toggle("nav-close");
        nav.classList.toggle("nav-open");
        navArrow.classList.toggle("nav-arrow-close");
        navArrow.classList.toggle("nav-arrow-open");
    }
});
/* ================================================================== NAV END */

/* HERO START ================================================================== */

/* ================================================================== HERO END */