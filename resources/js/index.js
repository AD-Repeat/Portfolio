/* NAV START ================================================================== */
let navButton = document.querySelector("#NavButton");
let navArrow = document.querySelector("#NavButtonArrow");
let nav = document.querySelector("#Nav");
let navButtonClickEvent = navButton.addEventListener("click",()=>{
    nav.classList.toggle("navClose");
    nav.classList.toggle("navOpen");
    navArrow.classList.toggle("navArrowClose");
    navArrow.classList.toggle("navArrowOpen");
});
/* ================================================================== NAV END */