//Ejercicio nivel 2:
//Importo los datos de country y webTech:
const tech = require('./web_techs');
const paises = require('./country');

// console.log('Paises:', paises);
// console.log('Tech:', tech);

//Ejercicio 2:
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let sinPuntuacion = text.replace(/[.,;!?]/g, "");
let arr = sinPuntuacion.split(' ')
//·Resultado:
//['I','love','teaching','and','empowering', 'people', 'I','teach','HTML','CSS','JS','React','Python']
let palabrasDelArr = arr.length
//·Resultado:
//13 console.log(arr)

//Ejercicio 3:
// Agregue 'Meat' al comienzo de su carrito de compras si aún no se ha agregado
// Agregue 'Sugar' al final de su carrito de compras si aún no se ha agregado
// Elimine 'Honey' si es alérgico a la miel (honey)
// Modificar Tea a 'Green Tea'

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift('Meat') //-> [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey' ]
shoppingCart.push('Sugar') //-> [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar' ]

let alergico = 'Honey';
let i = shoppingCart.indexOf(alergico) // Busco el indice del alimento que tengo alergia

//Si i no es igual a -1, significa que el elemento se encontró en el array
if(i !== -1){
    //1: Este segundo argumento de splice especifica cuántos elementos se deben eliminar a partir del índice dado.
    //En este caso, queremos eliminar solo un elemento, por lo que se utiliza 1.
    shoppingCart.splice(i, 1)
}

console.log(shoppingCart)

console.log(i)


  