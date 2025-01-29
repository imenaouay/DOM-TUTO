const secondbtn = document.querySelector(".second-btn");
secondbtn.onclick= function() {
    console.log("imen");
}


const best = document.querySelector(".best");

best.addEventListener("click", () => {
    console.log("imen");
})


const para = document.querySelector(".para");

para.addEventListener('click', (event) => {
    console.log(event);
})


//event object

const from = document.querySelector("from");
const input = document.querySelector("input");

from.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(input.value);
})


/// definition : event  it is javascript interction with html when user or the browser manipulates a page
// for exemple when page loads called event and when user click a button called also event . 