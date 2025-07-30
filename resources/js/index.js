const root = document.documentElement;
const computedStyles = getComputedStyle(root);

let tick = 0;
let seconds = 0;
let secondsUpdate = 0;

let timeInterval = setInterval(() => {
    tick++;
    seconds = Math.floor(tick/250);
    
    if(seconds > secondsUpdate){
        secondsUpdate = seconds;
    }
    spotLightAnimation();
}, 1);

let spotLightY = 0;
let spotLightEaseOut = 0;
let spotLightMoveDone = false;

let spotLightAlpha = 0;
let spotLightAlphaEaseIn = 0;

function spotLightAnimation(){
    
    if(spotLightEaseOut < 100){
        spotLightEaseOut = spotLightEaseOut + 0.2;
        spotLightY = easeOut(spotLightEaseOut/100) * 101;
        spotLightY = Math.floor(spotLightY * 100)/100;
        root.style.setProperty("--spotLightY",`calc(-50% + ${spotLightY}%)`);
    } else {
        spotLightMoveDone = true;
    }

    if(spotLightMoveDone == true && spotLightAlphaEaseIn < 100){
        spotLightAlphaEaseIn = spotLightAlphaEaseIn + 0.5;
        spotLightAlpha = easeOut(spotLightAlphaEaseIn/100);
        spotLightAlpha = Math.floor(spotLightAlpha * 100)/100;
        root.style.setProperty("--heroSpotLightAlpha",`${spotLightAlpha}`);
    }
}

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