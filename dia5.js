/*
Arrays
·Se puede almacenar múltiples valores.
·Cada valor tiene un indice(index).
·Para acceder a cada valor usando el indice.
·Puede tener valores de diferentes tipos de datos.
·Puede estar vacio.

Ej:
let arr = ['banana', 'manzana', 'durazno', 'frutilla'];

console.log('Furtas:', arr); -> Me muesta la info que tiene el array.
console.log('Frutas:', arr.length) -> me muestra la cantidad de elementos que contiene el array.

Creando un array usando split:
let js = 'JavaScript';
let strAarr = js.split(''); ['J', 'a', 'v', 'a','S', 'c', 'r', 'i','p', 't']
let strAarray = js.split(' '); [ 'JavaScript' ]
console.log(strAarray)


const skill = [     forma de contar:
    "HTML",                 0
    "CSS",                  1
    "JavaScript",           2
    "React",                3
    "Redux",                4
    "Node",                 5
    "MongoDB",              6
  ];
console.log(skill[0]) -> HTML 

Modificar elementos de array
const num = [1, 2, 3, 4, 5];
console.log(num) -> [ 1, 2, 3, 4, 5 ]
num[0] = 'Hola';
num[1] = 'Cambio';
console.log(num) -> [ 'Hola', 'Cambio', 3, 4, 5 ]

Métodos para manipular arrays:
·Array: Para crear un array
const arr = Array(); // crea un array vacío
console.log(arr);

·concat: Para concatenar dos arrays.
let arr1 = ['Hola'];
let arr2 = ['como estas?']
let arrfin = arr1.concat(arr2);
console.log(arrfin) -> [ 'Hola', 'como estas?' ]

·Length:Para saber el tamaño del array
let rap = ['2pac', 'Ice Cube', '50Cent', 'Kendrick lamar']
console.log(rap.length) -> 4 es el tamaño del array.

·indexOf:Para verificar si un elemento existe en un array.
Si existe, devuelve el index, de lo contrario devuelve -1.
let names = ['Gus', 'Agus', 'Lucy']
console.log(names.indexOf('1')) -> -1
console.log(names.indexOf('Gus')) -> 0 (indice, donde esta el str)

const fruits = ["banana", "orange", "mango", "lemon"];
let i = fruits.indexOf("banana");

if ( i === -1){
    console.log('No existe la fruta')
} 
else {
    console.log('Si existe la fruta en el arr')
}

·lastIndexOf: Da la posición del último elemento en el array.
Si existe, devuelve el index, de lo contrario, devuelve -1.
const nums = [1, 2, 3, 4, 5, 3, 1, 2];
console.log(nums.lastIndexOf(2)) -> 7
console.log(nums.lastIndexOf(0)); // -1

·includes:Para verificar si un elemento existe en un array. 
Si existe, devuelve true, de lo contrario devuelve false.
const frutas = ["banana", "orange", "mango", "lemon"];
console.log(frutas.includes("lemon")) -> true

·Array.isArray:Para verificar si el tipo de dato en un array
let cars = ['FiatUno', 'Corsa']
console.log(Array.isArray(cars)) -> true

·toString:Convierte un array a string
let saludo = ['Hola', 'Como estas?']
console.log(saludo.toString()) -> Hola,Como estas?

·join: Se usa para unir los elementos del array,
el argumento que pasamos en el método join se unirá en array y regresará como una cadena.
De forma predeterminada, se une con una coma,
pero podemos pasar diferentes parámetros de string que se pueden unir entre los elementos.
let front = ['html', 'css', 'javaScript' ,'react']
console.log(front.join(', ')) -> html, css, javaScript, react
console.log(front.join(' || ')) -> html || css || javaScript || react

·Slice: Para cortar varios elementos en el rango.
Toma dos parámetros: posición inicial y final. Puede no incluir la posición final
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.slice(2)) -> [ 3, 4, 5 ]
console.log(numbers.slice(2, 3)) -> [ 3 ]

·Splice: Toma tres parámetros:
posición inicial, número de elementos a eliminar y cantidad de elementos que se agregarán.
let names = ['Gus', 'Agus', 'Lucy', 'Clau']
console.log(names.splice(1)) -> [ 'Agus', 'Lucy', 'Clau' ] ·elimina 3 elementos.
console.log(names.splice(0, 1)) -> [ 'Gus' ] ·Elimina el primer elemento

·Push: agrega elementos al final.
let arr = ['Gustavo'];
arr.push('Fernandez')
console.log(arr) -> [ 'Gustavo', 'Fernandez' ]

·pop: Elimina el elemento final.
let simps = ['Homero', 'Bart', 'Marge', 'Lisa', 'Apú']
simps.pop();
console.log(simps) -> [ 'Homero', 'Bart', 'Marge', 'Lisa' ]

·shift: Eliminación de un elemento de un array al comienzo de un array.
let simps = ['Krosty', 'Homero', 'Bart', 'Marge', 'Lisa',]
simps.shift();
console.log(simps) -> [ 'Homero', 'Bart', 'Marge', 'Lisa' ]

·unshift: Agrega un elemento al inicio del array
let mascota = ['Perro'];
mascota.unshift('Gato')
console.log(mascota) -> [ 'Gato', 'Perro' ]

·reverse: invertir el orden de un array.
let nums = [1, 2, 3, 4, 5]
nums.reverse()
console.log(nums) -> [ 5, 4, 3, 2, 1 ]

·Un array puede almacenar diferentes tipos de datos, incluido un array en sí mismo:h
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "PostgreSQL"];
const fullStack = [frontEnd, backEnd];
console.log(fullStack[0]) -> ingreso al primer arr: [ 'HTML', 'CSS', 'JS', 'React', 'Redux' ]
*/

//Ejercicios!
//1) Declara un array vacío:
let arr = [];

//2) Declara un array com mas de 5 elementos:
let simps = ['Homero', 'Bart', 'Marge', 'Lisa', 'Maggy']

//3) Encuentra la longitud de tu array:
let longitud = simps.length; //console.log(longitud) -> 5

//4) Obtenga el primer elemento, el elemento del medio y el último elemento de un array:
let primerElemento = simps.shift(); //console.log(primerElemento) -> Homero
let medio = simps.slice(1,2)    //console.log(medio) -> [ 'Marge' ]
let ultimo = simps.pop()    //console.log(ultimo) ->  Maggy

/*5) Declara un array llamado mixedDataTypes,
coloque diferentes tipos de datos en el array y encuentre la longitud del array.
El tamaño del array debe ser mayor que 5:*/
let mixedDataTypes = [1, 'Gus', true, false, null, 2, 'Hola', undefined];
let longDeArr = mixedDataTypes.length; // console.log(longDeArr) -> 8

//6)Declare un variable array de nombre itCompanies y
//asignarles valores iniciales Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon:
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//·Imprima el array usando console.log():
// console.log(itCompanies) 
// [
//     'Facebook',
//     'Google',
//     'Microsoft',
//     'Apple',
//     'IBM',
//     'Oracle',
//     'Amazon'
//   ]

//·Imprima el número de empresas en el array:
let numEmpresas = itCompanies.length; //console.log(numEmpresas) -> 7

//· Imprime la primer empresa , la intermedia y la última empresa
//let primerEmpresa = itCompanies.shift(); //console.log(primerEmpresa) -> Facebook
//Averiguo con exactitud cual es el elemento del medio:
//let intermedia = Math.floor(itCompanies.length / 2) //console.log(intermedia) -> 3 
//console.log(itCompanies[3])
//let segundaEmpresa = itCompanies.slice(3,4).toString() //  -> IBM
//let ultimaEmpresa = itCompanies.pop(); // console.log(ultimaEmpresa) -> Amazon

//·Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos:
let mayusOne = itCompanies[0].toUpperCase(); //FACEBOOK
let mayusTwo = itCompanies[1].toUpperCase(); //GOOGLE
let mayusThre = itCompanies[2].toUpperCase(); //MICROSOFT
let mayusFour = itCompanies[3].toUpperCase(); //APPLE
let mayusFive = itCompanies[4].toUpperCase(); //IBM
let mayusSix = itCompanies[5].toUpperCase(); //ORACLE
let mayusSeven = itCompanies[6].toUpperCase(); //AMAZON

//·Imprime el array como una oración: 
//Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI.
//·el join se utiliza ->  para combinar los elementos de un array en una sola cadena de texto.
//toma un argumento, que es el separador -> ', '
let toStr = itCompanies.join(', ')
let oracion = `${toStr} son grandes empresas de TI.`
//console.log(oracion) Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon son grandes empresas de TI.

//·Compruebe si existe una determinada empresa en el array itCompanies.
//Si existe, retorna la empresa; de lo contrario, retorna la empresa no existe:
// let empresaBuscada = 'Amazon'
// itCompanies.includes(empresaBuscada) 
// ? console.log(empresaBuscada)
// : console.log('la empresa no existe')

// ·Filtre las empresas que tienen más de una 'o' sin el método filter()
let empresasO = [];

//Itero sobre el arr -> itCompanies:
for(let i = 0; i < itCompanies.length; i++){
    //accedo al elemento del array, en la posicion indicada por 'let i' que es 0, el i++ va incrementando, para asi pasar al siguiente elemento.
    const itC = itCompanies[i];
    //Verifico las palabras que tienen O
    if(itC.includes('o')){
        //pusheo las palabras con o al arr vacio.
        empresasO.push(itC)
    }
}
//console.log(empresasO) [ 'Facebook', 'Google', 'Microsoft', 'Amazon' ]s

//· Ordene el array usando el método sort()
// Se ordena de manera alfabetica -> ['Amazon','Apple','Facebook','Google','IBM','Microsoft','Oracle']
//let orden = itCompanies.sort()
// console.log(orden)

// ·Invierte la array usando el método reverse():
//revierte las posiciones -> ['Oracle','Microsoft','IBM','Google','Facebook','Apple','Amazon']
//let reversa = itCompanies.reverse();
//console.log(reversa)

//let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//·Cortar las primeras 3 empresas del array:
//let empresasOne = itCompanies.slice(0,3)
// console.log(empresasOne) -> [ 'Facebook', 'Google', 'Microsoft' ]

//·Cortar las últimas 3 empresas del array:
//let empresasTwo = itCompanies.slice(4,7)
//console.log(empresasTwo) -> [ 'IBM', 'Oracle', 'Amazon' ]

//·Cortar la empresa o empresas intermedias de TI del array:
//let empresaInter = itCompanies.slice(3,4)
//console.log(empresaInter) -> [ 'Apple' ]

//·Eliminar la primera empresa de TI del array:
//let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// let firstEl = itCompanies.shift() //  -> Facebook
// let secondEl = itCompanies.slice(2,3).toString() // -> Apple
// let lastEl = itCompanies.pop(); //-> Amazon
//let arrVacio = itCompanies.splice(0) //-> Retorna los elementos eliminados.
//console.log(itCompanies) -> []




























