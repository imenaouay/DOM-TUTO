// let firstLi = document.querySelector("li");
console.log(firstLi);
console.log(firstLi.parentElement);
console.log(firstLi.parentElement.parentElement);
console.log(firstLi.parentElement.parentElement.parentElement);


let ul = document.querySelector("ul")
console.log(ul.children);
console.log(ul.children[0]);
console.log(ul.children[0].innerText);

let firstLi = document.querySelector("li");
console.log(firstLi.nextElementSibling.textContent);
console.log(firstLi.nextElementSibling.nextElementSibling.textContent);


let fourthLi = document.querySelector(".fourth");
console.log(fourthLi);
console.log(fourthLi.previousElementSibling);
console.log(fourthLi.previousElementSibling.previousElementSibling);
