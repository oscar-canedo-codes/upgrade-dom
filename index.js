/* // Iteration 1

// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
showButton = document.querySelector(".showme");
console.log(showButton);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
h1Pillado = document.querySelector("#pillado");
console.log(h1Pillado);

// 1.3 Usa querySelector para mostrar por consola todos los p
allPElements = document.querySelectorAll("p");
console.log(allPElements);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

pokemonClassElements = document.querySelectorAll(".pokemon");
console.log(pokemonClassElements);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
// data-function="testMe"

showAllFunction = document.querySelectorAll('[data-function="testMe"]');

console.log(showAllFunction);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe"

showCharacter = document.querySelectorAll('[data-function="testMe"]');

console.log(showCharacter[2]); */

// Iteration 2

// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

let createDiv = document.createElement("div");

document.body.appendChild(createDiv);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

let createDivWithP = document.createElement("div");

let createP = document.createElement("p");

createDivWithP.appendChild(createP);

document.body.appendChild(createDivWithP);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript

let createDivWith6P = document.createElement("div");

document.body.appendChild(createDivWith6P);

for (let i = 0; i < 6; i++) {
  let sixP = document.createElement("p");
  createDivWith6P.appendChild(sixP);
}

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'

let createPWithText = document.createElement("p");

createPWithText.textContent = "Soy dinámico!";

document.body.appendChild(createPWithText);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'

let h2ElementWithText = document.querySelector(".fn-insert-here")

h2ElementWithText.textContent = "Wubba Lubba dub dub";

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let newUl = document.createElement("ul");

for (const app of apps) {

    let newLi = document.createElement("li");
    newLi.textContent = app;
    newUl.appendChild(newLi);
}

document.body.appendChild(newUl);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

let eraseElements = document.querySelectorAll(".fn-remove-me"); 

for (const element of eraseElements) {
    element.remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// Recuerda que no solo puedes insertar elementos con .appendChild.

let newP = document.createElement("p");
selectDivs = document.querySelectorAll("div");

newP.textContent = "Voy en medio!";

document.body.insertBefore(newP, selectDivs[1]);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here 

let selectClass = document.querySelectorAll(".fn-insert-here");

for (const singleClass of selectClass) {
    
    let newPInside = document.createElement("p");
    newPInside.textContent = "Voy dentro!"

    singleClass.appendChild(newPInside);
}