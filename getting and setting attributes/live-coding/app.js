
//getting attribut
const a = document.querySelctor('a')
const input = document.querySelector('input')
// console.log(a.href);
console.log(input.value);
console.log(input.type);
console.log(a.href="www.youtube.com ");

// selling attribut
a.href = "https://youtube.com";
console.log(input.value="hello");
console.log(input.type="password");
console.log(input.placeholder="password");

//getattribute attrname

console.log(input.getAttribute("type"));


//setattribute attrname
input.setAttribute("type" , "password");