// //createelement

// const h1 = document.createElement("h1");
// h1.textContent = "hello h1";
// h1.classList.add("greentings");
// console.log(h1.textContent);


// const body = document.body
// body.apprendChild(h1);

// const ul = document.querySelector('ul')

// const newLi = document.createElement("li")
// newLi.innerText = "i'm li tag"
// ul.appendChild(newLi)

// const fristLi = document.querySelector('li')

// //selector inssert before what and where

// ul.insertBefore(newLi,fristLi); 

// const fristp = document.querySelector('p')
// const i = document.createElement("i")
// i.innerText = " I'm italics"
// i.style.color = "skyblue"

// fristp.insertAdjacentElement("beforebegin", i)
// fristp.insertAdjacentElement("beforebegin", i)
// fristp.insertAdjacentElement("beforeend", i)
// fristp.insertAdjacentElement("afterend", i)



let section = document.querySelector('section')
const i = document.createElement("i");
i.innerText = " I'm italics"
i.style.color = "skyblue"
section.append(i);
const h4 = document.createElement("h4")
h4.innerText ="imen"
h4.style.color = "crimson"
section.append(i,span);
section.prepend(i,span);

const newlist = document.querySelector('.new-list')
const fourth = document.querySelector('.fourth')
newlist.removeChild(fourth);
newlist.removeChild();