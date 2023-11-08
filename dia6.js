// ·Bucles -> se utilizan para hacer tares repetitivas. Hay varios tipos:

//·Bucle for:
// for (inicializacion; condicion; incremento/decremento){
//     el codigo va aqui
// }
//Ejemplo de incrementacion: (inicia en 0, i es menor o igual a 5 frena, va sumando de uno en uno)
for (let i = 0; i <= 5; i++) {
    //console.log(i)
}
//Resultado -> 0 1 2 3 4 5

//Ejemplo decrementación: (inicia en 5, i es mayor o igual a 0 frena, va restando de uno en uno)
for (let i = 5; i >= 0; i--) {
    //console.log(i)
}
//Resultado -> 5 4 3 2 1 0

for (let i = 1; i <= 9; i++) {
    //console.log(`${3} * ${i} = ${3 * i}`);
};
//Resultado:
// 0 * 0 = 0
// 1 * 1 = 1
// 2 * 2 = 4
// 3 * 3 = 9
// 4 * 4 = 16
// 5 * 5 = 25
// ·Cambiando la condicion puedo obtener las tablas:
// 3 * 1 = 3
// 3 * 2 = 6
// 3 * 3 = 9
// 3 * 4 = 12
// 3 * 5 = 15
// 3 * 6 = 18
// 3 * 7 = 21
// 3 * 8 = 24
// 3 * 9 = 27

//Ejemplo con arr y str:
const countries = ['Argentina', 'Brasil', 'España', 'Italia' ,'Alemania' ]
const newArr = [];
for (let i = 0; i < countries.length; i++) {
    newArr.push(countries[i].toUpperCase())
}
//console.log(newArr) -> Resultado: [ 'ARGENTINA', 'BRASIL', 'ESPAÑA', 'ITALIA', 'ALEMANIA' ]

//Ejemplo de sumar todos los elementos del arr:
const num = [1, 2, 3, 4, 5, 6]
let sum = 0;
for ( let i = 0; i < num.length; i++) {
    sum += num[i];  // === sum = sum + num[i]
}
//console.log(sum) -> resultado: 1

//Crear un nuevo arr, en relacion al que existe:
const oldArr = [2, 4, 6, 8, 10];
const newArray = [];
for (let i = 0; i < oldArr.length; i++) {
    newArray.push(oldArr[i] ** 2) //potencio los numeros del del viejo arr y los guardo en el arr vacio.
}
//console.log(newArray) -> resultado: [ 4, 16, 36, 64, 100 ]

//Creo un nuevo arr, con la primer letra mayus:
const pets = ['perro', 'gato', 'conejo', 'hamster'];
const mayus = [];
for (let i = 0; i < pets.length; i++) {
    let modif = pets[i];
    let firstStr = modif.charAt(0).toUpperCase() + modif.slice(1);
    mayus.push(firstStr)
}
//console.log(mayus) -> [ 'Perro', 'Gato', 'Conejo', 'Hamster' ]


//·Bucle while -> Ejecuta su instrucciones siempre que su condicion true, corta su ejecucion cuando es false.
// while (condicion) {
//     codigo
// }
//Ejemplo:
let i = 0;
while (i <= 5) {
    //console.log(i); -> Va aca para que imprima el primer valor que es 0, si no se hace asi comienza en 1.
    i++;
}
//Resultado -> 0 1 2 3 4 5

//·Bucle do while -> El bloque de codigo se ejecuta al menos una vez, independiente de si la condicion es true o false,
//Luego de la primer ejecucion verifica la condicion y sigue ejecutando mientras es true.
let index = 0;
do {
    //console.log(index);
    index++;
} while (index <= 5)
//Resultado -> 0 1 2 3 4 5


//·Bucle for of -> Se utiliza para iterar arrays, str... Proporciona una forma mas concisa y legible de recorrer elementos.
// -> for (const element of arr)
//Ejemplo:
let arr = ['Hola', 'Como estas?'];
for (const str of arr) {
    //console.log(str)
}
//Resultado -> Hola Como estas?

let numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
    //console.log(num * num)
}
//Resultado -> 1, 4, 9, 16, 25

//Sumar los numeros del arr de arriba:
let suma = 0;
for (const numero of numbers) {
    suma += numero
}
//console.log(suma) Resultado -> 15 (se sumo en arr numbers, linea 106)

//Pasar a minus el arr:
const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
  ];

for (const skills of webTechs){
    let primerStr = skills.charAt(0) + skills.slice(1);
    //console.log(primerStr) -> La primer str queda en mayus.
    let allStr = skills.toLowerCase();
    //console.log(allStr) -> todas las str quedan en minuscula.
}


const world = ['Argentina', 'Italia', 'España', 'Portugal'];
const newWorld = [];
for (const country of world){
    newWorld.push(country.toUpperCase())
}
//console.log(newWorld) -> [ 'ARGENTINA', 'ITALIA', 'ESPAÑA', 'PORTUGAL' ]


//·Break (traduccion: freno) -> se utiliza para interrumpir el bucle.
for (let i = 0; i <= 5; i++){
    if (i === 3){ //·Lo que haces es detenerse cuando i es igual a 3.
        break
    }
    //console.log(i) -> Resultado donde frenó: 0 1 2
}

//·Continue (traduccion: continuar) -> Se utiliza para saltar a la siguiente iteracion sin ejecutar el codigo restante
//dentro del bucle en la iteracion actual.
for (let i = 0; i <= 6; i++) {
    if (i === 4) { //Salta la iteracion cuando i es igual a 4.
        continue;
    }
    //console.log(i) Por ende se consologuean todos los numeros -> 0 1 2 3 4 5 6
}


//Ejercicios nivel 1:

//1 -> Itera de 0 a 10 usando el bucle for, haga lo mismo usando los bucles while y do while:
//Bucle for:
for (let i = 0; i <= 10; i++) {
    //console.log(i)
};
//Bucle while:
let acumulador = 0;
while (acumulador <= 10) {
    //console.log(acumulador);
    acumulador++
};
//bucle do while:
// let sumador = 0;
// do {
//     //console.log(sumador);
//     sumador++;
// } while (sumador <= 10)


//2 -> Itera 10 to 0 usando el bucle for, haga lo mismo usando los bucles while y do while:
//for:
for (let i = 10; i >= 0; i--){
    //console.log(i)
}

//while:
let aRestar = 10;
while (aRestar >= 0) {
    //console.log(aRestar);
    aRestar--
}

//do while:
let numResta = 10;
do {
    //console.log(numResta);
    numResta --;
} while (numResta >= 0)


// Itera de 0 a n usando el bucle for:
let n = 15;
for (let i = 0; i <= n; i++) {
    //console.log(i) -> 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
}

// Escribe un bucle que haga el siguiente patrón usando console.log():
//Forma -> con el metodo repeat:
for (let i = 1; i <= 7; i++) {
    //console.log('#'.repeat(i))
};

//Forma -> anidando un for:
for (let i = 1; i <= 7; i++) {
    let linea = '';     //str vacio
    for (let j = 1; j <= i; j++) { //for dentro de otro for (anidado)
        linea += '#'    //al str le asigno valor
    }
    //console.log(linea)
}


//Ejercicio 5:
for (let i = 0; i <= 10; i++) {
    //console.log(`${i} * ${i} = ${i * i}`);
};

//Ejercicio 6:
//imprimo encabezado:
//console.log('i     i^2    i^3');

for (let i = 0; i <= 10; i++) {
    const alQuadrado = i * i;
    const alCubo = i * i * i;
    //console.log(`${i}     ${alQuadrado}     ${alCubo}`)
}

//Usa el bucle for para iterar de 0 a 100 e imprima solo números pares
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0){
        //console.log(i)
    }
}

//Usa el bucle for para iterar de 0 a 100 e imprima solo números impares:
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        //console.log(i)
    }
}

//Usa el bucle for para iterar de 0 a 100 e imprima los solo números primos:
// for (let i = 0; i <= 100; i++) {
//     if (i % 1 === 0 || i % i === 0) {
//         console.log(i)
//     }
// }

//Si no se encuentra ningun divisor, el numero se considera primo y se imprime en consola.
for (let i = 2; i <= 100; i++){
    let esPrimo = true;

    for (let j = 2; j < i; j++){
        if (i % j === 0) {  //si i es divisible por j sin dejar resto
            esPrimo = false; // se estable que i no es primo, ya que encontro un divisor distinto de uno y si mismo.
            break;
        }
    }
    //if(esPrimo) console.log(i);
}

//·Usa el bucle for para iterar de 0 a 100 e imprima la suma de todos los números:
let sumatotal = 0;
for (let i = 0; i <= 100; i++) {
    sumatotal += i
}
//console.log('La suma de todos los numeros de 0 a 100 es =',sumatotal) -> 5050

//·Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares:
let esPar = 0;
let impar = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        esPar += i
    } else {
        impar += i
    }
}
// console.log('suma de numeros par:', esPar)
// console.log('suma de numeros impar:', impar)
//·Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares.
//Imprimir suma de pares y suma de impares como un array
const sumArr = [esPar, impar]
//console.log(sumArr) -> [ 2550, 2500 ]


//Desarrolla un pequeño script que genera una matriz de 5 números aleatorios:
const matriz = [];

for (let i = 1; i <= 5; i++) {
    let numAleatorio = Math.floor(Math.random() * 100); // Esto generará números enteros entre 0 y 99
    matriz.push(numAleatorio)
}
//console.log(matriz) -> [ 2, 94, 13, 65, 45 ]


//·Desarrolla un pequeño script que genera un id aleatorio de seis caracteres:
//let cadena = '5kjsd';
const cadenaOriginal = "5j2khz";
let id = '';

for (let i = 0; i < 6; i++) {
  const indiceAleatorio = Math.floor(Math.random() * cadenaOriginal.length);
  id += cadenaOriginal.charAt(indiceAleatorio);
}
//console.log(id); -> k2525j


//·Desarrolla un pequeño script que genera un id con cualquier número de caracteres aleatorios:
const longDeseada = 10;
const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // Caracteres permitidos
let idAleatorio = '';

for (let i = 0; i <= longDeseada; i++){
    const idA = Math.floor(Math.random() * caracteres.length);
    idAleatorio += caracteres.charAt(idA)
}
//console.log(idAleatorio)


//·Escribe un script que genere un número hexadecimal aleatorio:
const long = 6;
const caracterHexa = '0123456789ABCDEF';
let numHexaAleatorio = 'Ox' //-> Prefijo ox: Indica que es un numero hexadecimal.

for (let i = 0; i < long; i++) {
    const hexaAle = Math.floor(Math.random() * 16) //el 16 -> se utiliza para generar un numero en el rango de 0 a 15
    numHexaAleatorio += caracterHexa.charAt(hexaAle)
};
//console.log(numHexaAleatorio)


//·Escribe un script que genere un número de color rgb aleatorio:
let colorRgb = 'rgb(';

for (let i = 0; i < 3; i++) {
    const componente = Math.floor(Math.random() * 256) //Genera un valor aleatorio para cada componente (o-255);
    colorRgb += `${componente}`

    if (i < 2) {
        colorRgb += ', ' //agrega coma y espacio entre los componentes.
    }
}
colorRgb += ')';
//console.log('El color rgb es:', colorRgb) // -> El color rgb es: rgb(212, 154, 123)


//·Usando el array countries anterior, crea un array como el siguiente:
const countriesMinus= [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
    "Iceland",
  ];
const countriesMayus = [];

for (let i = 0; i < countriesMinus.length; i++) {
    countriesMayus[i] = countriesMinus[i].toUpperCase();
};
//console.log('Arr en mayus:', countriesMayus);

//·Usando el array countries anterior, crea un array para saber la longitud de cada país:
let longPais = [];

for (let i = 0; i < countriesMinus.length; i++){
    longPais[i] = countriesMinus[i].length
}
//console.log('longitud de cada pais:', longPais)

//·Utiliza el array countries para crear la siguiente array de arrays
//[['Albania', 'ALB', 7],]
let paisInfo = [];

for (let i = 0; i < countriesMinus.length; i++) {
    const codePais = countriesMinus[i].substring(0, 3).toUpperCase(); //guardo la abrebiatura del pais (tres primeros str y en mayus)
    const detailPais =  [countriesMinus[i], codePais ,countriesMinus[i].length]; // Aca le doy forma al array (pais, abre, longitud)
    paisInfo.push(detailPais) //Pusheo la info al arr vacio
};
//console.log(paisInfo)


//·En el array countries anterior, verifica si hay un país que contenga la palabra 'land':
let strLand = 'land';
//let paisConLand = [];

for (let i = 0; i < countriesMinus.length; i++) {
    //Con esta forma sin el arr vacio:
     if (countriesMinus[i].includes(strLand)) {
        //console.log(countriesMinus[i])
     }
    }

    //pusheando a un arr vacio:
    // if (countriesMinus[i].includes(strLand)) {
    //     paisConLand.push(countriesMinus[i])
    // }
//console.log(paisConLand)


//·En el array countries anterior, verifica si hay un país que termina con una subcadena (substring) 'ia':
let strIa = 'ia';

for (let i = 0; i < countriesMinus.length; i++) {
    if (countriesMinus[i].endsWith(strIa)) {
        //console.log(countriesMinus[i])
    }
}


//·Usando el array countries anterior, encuentre el país que contiene la mayor cantidad de caracteres:
//Gracias a un bucle de arriba, se que la longitud mas larga es 8.
// let paisLong = '' -> la var es para guardar el valor, sirve cuando el valor es solo uno, por ejemplo en el bucle de arriba no funciona.
for (let i = 0; i < countriesMinus.length; i++) {
     if (countriesMinus[i].length >= 8){            //mayor o igual a 8
         //console.log(countriesMinus[i])             //para guardar en var -> paisLong = countriesMinus[i]
     }
}
//console.log(paisLong)


//·Usando el array countries anterior, encuentre el país que contiene sólo 5 caracteres:
for (let i = 0; i < countriesMinus.length; i++) {
    if (countriesMinus[i].length === 5) {
        console.log(countriesMinus[i])
    }
}