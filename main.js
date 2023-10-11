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

// let alergico = 'Honey';
// let i = shoppingCart.indexOf(alergico) // Busco el indice del alimento que tengo alergia

//Si i no es igual a -1, significa que el elemento se encontró en el array
// if(i !== -1){
    //1: Este segundo argumento de splice especifica cuántos elementos se deben eliminar a partir del índice dado.
    //En este caso, queremos eliminar solo un elemento, por lo que se utiliza 1.
//     shoppingCart.splice(i, 1)
// }

//Busco el indice a modificar:
let i = shoppingCart.indexOf('Tea')
//console.log(i) -> 3
//Modifico:
shoppingCart[i] = 'Green tea'
//console.log(shoppingCart)


//Ejercicio 4:
//concatenar 
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
//El método concat se utiliza para combinar dos o más arrays en uno nuevo:
const fullStack = frontEnd.concat(backEnd)
//Resultado:
// console.log(fullStack);
// [
//     'HTML',    'CSS',
//     'JS',      'React',
//     'Redux',   'Node',
//     'Express', 'MongoDB'
//   ]


//Ejercicios nivel 3:

//Ordene el array y encuentre la edad mínima y máxima
//Encuentre la edad media (un elemento intermedio o dos elementos intermedios divididos por dos)
//Encuentre la edad promedio (todos los elementos divididos por el número de elementos)
//Encuentre el rango de las edades (max menos min)
//Compare el valor de (mín - promedio) y (máx - promedio), use el método _abs()

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]


//EJERCICIO 1:
let arrMenorMayor = ages.sort((a, b) => a - b) // -> [ 19, 19, 20, 22, 24,24, 24, 25, 25, 26 ]
//·Con metodos:
// let edadMin = Math.min(...ages); //19
// let edadMax = Math.max(...ages); //26

//·Con un bucle, recorriendo el array:
//let edadMinima = ages[0]; 
//let edadMaxima = ages[0];

//·La i se inicia en 1, ya que las var de arriba tienen el primer elemento del arr.
//for(let i = 1; i < ages.length; i++){
    //·Si el valor actual de ages es menor a edadMin -> actualizo el valor de edadMin:
    //if (ages[i] < edadMinima) edadMinima = ages[i];
    //·Si el valor actual de ages es mayor a edadMax -> actualizo el valor de edadMax:
//     else if (ages[i] > edadMaxima) edadMaxima = ages[i];
// }
// console.log('Edad minima:', edadMinima)
// console.log('Edad maxima:', edadMaxima)

//EJERCICIO 2
//Acumulador 
let suma = 0;

for (let i = 0; i < ages.length; i++){
    //En cada iteracion se suma el valor de age al acumulador:
    suma += ages[i];   //+= -> evita esto: suma = suma + ages[i]
}
//console.log(suma) -> 228 es la suma de todas las edades 
const mediaDeEdad = suma / ages.length;
//console.log('La edad media es:', Math.floor(mediaDeEdad)) //-> La media es: 22

//EJERCICIO 4: Rango de edad entre el menor y el mayor
const min = Math.min(...ages);
const max = Math.max(...ages);
const rango = max - min;
//console.log('El rango de edad es:', rango) -> El rango de edad es: 7

//EJERCICIO 5:
let acum = 0;

const edadMinima = Math.min(...ages);
const edadMaxima = Math.max(...ages);

for (let i = 0; i < ages.length; i++){
    acum += ages[i];
}
const promedio = acum / ages.length
//console.log('Edad Promedio:', Math.floor(promedio));  -> edad promedio: 22

//Dif entre minimo y el promedio:
const difMinima = Math.abs(edadMinima - promedio)
//console.log('Dif entre min y el promedio:', Math.floor(difMinima)) -> Diferencia entre la edad minima y el promedio: 3

//dif entre maximo y el promedio:
const difMaxima = Math.abs(edadMaxima - promedio);
//console.log('Dif entre el max y el promedio:', Math.ceil(difMaxima)); -> Diferencia entre la edad maxima y el promedio: 4