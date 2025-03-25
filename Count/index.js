let substruct = document.querySelector('#substract');
let add = document.querySelector('#add');
let reset = document.querySelector('#reset');

console.log(substruct);

substruct.addEventListener("click", function (){
let output = document.querySelector('#result');
let result = Number(output.textContent) - 1;
output.textContent = result;
console.log(output);
});

add.addEventListener("click", function (){
let output = document.querySelector('#result');
let result = Number(output.textContent) + 1;
output.textContent = result;
console.log(output);
});

reset.addEventListener("click", function (){
    let output = document.querySelector('#result');
    let result  = 0;
    output.textContent = result;
    console.log(output);
});