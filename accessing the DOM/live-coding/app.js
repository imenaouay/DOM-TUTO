//                       dom selectors //

// 1.getElementByTagName

// console.log(document.getElementsByTagName('h1'));
// console.log(document.getElementsByTagName('h1').length);

// 2.getElementById

// console.log(document.getElementById("main"));

//3.document.getElementsByClassName('className');
// console.log(document.getElementsByClassName("cls"));

//4.querrySelector
console.log(document.querySelector("h1"));
console.log(document.querySelector(".cls"));
//5.querrySelectorAll
console.log(document.querySelectorAll(".cls"));
console.log(document.querySelectorAll("li"));

//Storing data in variables
const h1 = document.querySelector("h1");
console.log(h1); 