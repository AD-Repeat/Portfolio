const root = document.documentElement;
const computedStyles = getComputedStyle(root);

const heroImg = document.querySelector("#HeroImg");

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
let navButton = document.querySelector("#NavButton");
let navArrow = document.querySelector("#NavButtonArrow");
let nav = document.querySelector("#Nav");
let navButtonClickEvent = navButton.addEventListener("click",()=>{
    if(nav.classList == ""){
        nav.classList.toggle("navOpen");
        navArrow.classList.toggle("navArrowOpen");
    } else {
        nav.classList.toggle("navClose");
        nav.classList.toggle("navOpen");
        navArrow.classList.toggle("navArrowClose");
        navArrow.classList.toggle("navArrowOpen");
    }
});
/* ================================================================== NAV END */

/* HERO START ================================================================== */

/* ================================================================== HERO END */