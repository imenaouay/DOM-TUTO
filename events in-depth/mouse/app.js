let one = document.querySelector(".click");
let two = document.querySelector(".contextmenu");
let three = document.querySelector(".dblclick");
let four = document.querySelector(".mousedown");
let five = document.querySelector(".mouseenter");
let six = document.querySelector(".mouseleave");
let seven = document.querySelector(".mousemove");
let eight = document.querySelector(".mouseout");
let none = document.querySelector(".mouseover");
let ten = document.querySelector(".mouseup");

one.addEventListener("click", () => {
    one.classList.toggle("red");
});

two.addEventListener("contextmenu", () => {
    one.classList.toggle("blue");
});

three.addEventListener("dblclick", () => {
    three.classList.toggle("teal");
});

four.addEventListener("mousedown", () => {
    four.classList.toggle("blue");
});
five.addEventListener("mouseenter", () => {
    five.classList.toggle("orange");
});
six.addEventListener("mouseleave", () => {
    six.classList.toggle("purple");
});

even.addEventListener("mousemove", () => {
    even.classList.toggle("pink");
});

eight.addEventListener("mouseout", () => {
    eight.classList.toggle("red");
});

nine.addEventListener("mouseover", () => {
    nine.classList.toggle("red");
});
ten.addEventListener("mouseup", () => {
    ten.classList.toggle("red");
});