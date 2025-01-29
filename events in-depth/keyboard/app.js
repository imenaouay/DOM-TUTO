
const input = document.querySelector("input");

input.addEventListener("keyboard", () => {
    console.log("key pressed");
})

input.addEventListener("keyup", () => {
    console.log("keyup");
})

input.addEventListener("keydown", () => {
    console.log("keydown");
})

//usefull properties and methods

input.addEventListener('keypress', e=>{
    // console.log(e.charCode);
    // console.log(e.Code);
    console.log(e.ctrlKey);
    console.log(e.key);
    console.log(e.shiftKey);


})