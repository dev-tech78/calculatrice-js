// 1) Lorsque l'utilistauer clique sur un bouton, ça va l'afficher dans l'input 
// à l'id result 

// on accèdes aux valeurs avec value 

let num1= document.querySelector('#num1');
let num2= document.querySelector('#num2');
let num3= document.querySelector('#num3');
let num4= document.querySelector('#num4');
let num5= document.querySelector('#num5');
let num6= document.querySelector('#num6');
let num7= document.querySelector('#num7');
let num8= document.querySelector('#num8');
let num9= document.querySelector('#num9');
let num0 = document.querySelector("#num0");
let mul = document.querySelector("#mul");
let div = document.querySelector('#div');
let sub = document.querySelector("#sus");
let add = document.querySelector("#add")

console.log(num1.value)
num1.addEventListener('click', function(){
    display(num1.value)
})
num2.addEventListener('click', function(){
    display(num2.value)
})
num3.addEventListener('click', function(){
    display(num3.value)
})
num3.addEventListener('click', function(){
    display(num3.value)
})
num4.addEventListener('click', function(){
    display(num4.value)
})
num5.addEventListener('click', function(){
    display(num5.value)
})
num6.addEventListener('click', function(){
    display(num6.value)
})
num7.addEventListener('click', function(){
    display(num7.value)
})
num8.addEventListener('click', function(){
    display(num8.value)
})
num9.addEventListener('click', function(){
    display(num9.value)
})
num0.addEventListener('click', function(){
    display(num0.value)
})
mul.addEventListener('click', function(){
    display(mul.value)
})
div.addEventListener('click', function(){
    display(div.value)
})
sus.addEventListener('click', function(){
    display(sus.value)
})
add.addEventListener('click', function(){
    display(add.value)
})
function display(valeur){
    result.value+=valeur
}

// programmer la fonction qui permet de faire le calcul 
// ce qu'il faut faire c'est récupérer le nombre qu'il y a AVANT l'opérande et le mettre dans une variable
// faire pareil pour le deuxième nombre

// faire le calcul selon l'opérande

