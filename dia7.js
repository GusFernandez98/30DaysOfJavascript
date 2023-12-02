/*
Funciones!
·Es un bloque reutilizable de codigo, diseñada para una determinada tarea.

· a) Se declara mediante la palabra clave 'function'
· b) Seguida de un nombre.
· c) un parentesis, el cual puede tomar parametros.
· Si una fn toma parametros, se llamara como un argumento
·Ej: -> function fn (parametro) {codigo};

·Una función se puede declarar o crear de un par de maneras:
1) Función declarativa
2) Función de expresión
3) Función anonima
4) Función flecha
*/

//Fn declarativa:
// function fnName () {
//     //va el codigo...
// }
// fnName() // Llamado a la fn -> por su nombre y parentesis.

// //Fn sin parametros y return:
// function square() {
//     let num = 3;
//     let alQ = num * num
//     console.log(alQ)
// };
// //square(); sin el llamado, no se ejecuta nunca.

// function sumTwo() {
//     let num = 15;
//     let numTwo = 20;
//     let allSum = num + numTwo;
//     console.log(allSum)
// };
// //sumTwo();

// function printMyName() {
//     let firstName = 'Gustavo';
//     let lastName = 'Fernández';
//     let fullName = `${firstName} ${lastName}`
//     console.log(fullName)
// };
// //printName();


// //Fn que retornan un valor:
// function printName() {
//     let nameOne = 'Agustina';
//     let nameTwo = 'Alvarez';
//     let fullName = `${nameOne} ${nameTwo}`
//     return fullName;    //Aca esta el valor de la fn
// };
// //console.log(printName())

// function sumN() {
//     let numOne = 150;
//     let numTwo = 12;
//     let numTrhee = 38;
//     let allNum = numOne + numTwo + numTrhee;
//     return allNum;
// };
// //console.log(sumN())


// //·Fn con parametros:
// //·El parametro va dentro del parentesis.
// //·Durante el llamado o invocacion es necesario el argumento.

// function areaCircle(r) {
//     let area = Math.PI * r * r;
//     return area;
// }
// //console.log(areaCircle(8)) -> la funcion es llamada con un argumento.

// function elevar(num) {
//     return num * num;
// };
// //console.log(elevar(10))


// //·Fn con dos parametros:
// function sumAll(num1, num2) {
//     let sum = num1 + num2;
//     console.log(sum)
// };
// //sumAll(20, 45);
// //si una función no es retorna esta no almacena datos.

// function myName(name, lastName) {
//     return `${name} ${lastName}`;
    
// };
// //console.log(myName('Gustavo', 'Fernandez'))

// function myPet(name, raza) {
//     return `Mi Mascota es un perro y se llama ${name}, es un ${raza}, es muy querida por la flia.`;
// };
// //console.log(myPet('Lucy', 'Rottwailer'))


//·Fn con varios parametros:
//·Esta fn toma un array como parametro y suma los elementos del arr.
// function sumArrNums(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum;
// };
// const nums = [1, 2, 3, 4, 5, 10, 5]
// //console.log(sumArrNums(nums)) -> suma total: 25


//·Fn declarativa con parametros ilimitados:
//Proporciona una fnccon alcance de argumentos array como objeto.
//·Se puede acceder a cualquier cosa que pasemos como argumento.
// function parmIli() {
//     console.log(arguments)
// };
// //parmIli(1, 'str1', 'str2', 4) -> [Arguments] { '0': 1, '1': 'str1', '2': 'str2', '3': 4 }

//·declaracion:
// function sumAllNum() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++){
//         sum += arguments[i]
//     }
//     return sum;
// };
//console.log(sumAllNum(1, 2, 3, 4, 5))
//console.log(sumAllNum(10, 20, 30, 40))

//·Arrow fn (flecha) con numero ilimitado de parametros:
//No tiene el objeto de alcance
//para implementar los parametros ilimitados se utiliza el spread operator -> ... (operador de propagacion)

// const allSumNum = (...args) => {
// console.log(arguments), objeto de argumentos no encontrado en la función flecha
// en su lugar, usamos un parámetro seguido de un operador de propagación (...)
//     console.log(args)
// };

//allSumNum(1, 2, 3, 4, 'hola', 5) //-> un arr con los argumentos.

//declaracion
// const sumNums = (...args) => {
//     let suma = 0;
//     // for (let i = 0; i < args.length; i++){
//     //     suma += args[i]
//     // }
//     // return suma
//     for(const elements of args){
//         suma += elements
//     }
//     return suma
// };

//console.log(sumNums(1, 2, 3, 20, 10, 4))

//·fn anonima o sin nombre:
// const anonymousFn = function () {
//     console.log('Fn anonima. El valor se almacena en a const')
// };
//anonymousFn()

//·Fn de expresion: son fn anonimas
//·Se crea una fn sin nombre y la asignamos en una var.
//·Para retornar el valor llamamos a la variable.
// const nSquare = function (n) {
//     return n * n // 3 * 3 = 9
// };
//console.log(nSquare(3)) -> 9


//·Fn de autoinvocacion:
//·son fn anonimas que no necesitan se llamadas para devolver un valor.
//·Se esta autoejecutando, por eso va dentro del parentesis
// (function (num) {
//     console.log(num + num)
// })
//va el argumento:(5) arg

//·En lugar de imprimir, quiero almacenar los datos:
// let sumaNums = (function (n) {
//     return n * n
// })
//(4) -> 16
//console.log(sumaNums)


//·Arrow fn: Se usa una flecha para reemplazar la palabra clave 'function'
// const squareOne = (n) => {
//     return n * n
// };
//console.log(squareOne(5))
//·En una sola linea, sin la palabra clave return, ya que en la arrow esta explicito:
// const sumaaTotal = (n) => n * n; 
//console.log(sumaaTotal(3))

//fn para cambiar un arr a mayusculas:
// const changeUpper = (arr) => {
//     const newArr = [];
//     for (const ele of arr) {
//         newArr.push(ele.toUpperCase());
//     }
//     return newArr;
// };
//·Como se ve, un solo bloque de codigo lo podemos repetir para distintos arr que quiera poner en mayus.
// const country = ['Argentina', 'Brasil', 'Uruguay', 'Perú'] //-> [ 'ARGENTINA', 'BRASIL', 'URUGUAY', 'PERÚ' ]
// const nameEmpre = ['Tesla', 'Amazon', 'Facebook', 'Ford'] //-> [ 'TESLA', 'AMAZON', 'FACEBOOK', 'FORD' ]
// console.log(changeUpper(nameEmpre))


// const printFullName = (firstName, lastName) => {
//     return `${firstName} ${lastName}`
// };
//console.log(printFullName('Gustavo', 'Fernández'))

//Esta fn al ser declarativa, se pude hacer mas corta:
// const fullName = (firstName, lastName) => `${firstName} ${lastName}`;
// console.log(fullName('Claudia', 'Baigorria'))


//·Fn con parametro por defecto, (el parametro tiene un valor por defecto):
// function (params = value){
//     codigo...
// }

// const fnWelcome = (name = 'Gus') => `${name}, Bienvenido a los 30 dias de js`;

//console.log(fnWelcome()) -> se ejecuta con el valor por defecto.
//console.log(fnWelcome('Agus')) -> le cambio el valor por defecto.

// const generateName = (firstName = 'Luis', secondName = 'Gustavo', lastName = 'Fernández') => `my full name is: ${firstName} ${secondName} ${lastName}`;
// console.log(generateName()) -> my full name is: Luis Gustavo Fernández

// const calculateAge = (birthYear, currentYear = 2023) => currentYear - birthYear;
// const calculateAge = (birthYear, currentYear = 2023) => {
//     let age = currentYear - birthYear;
//     return `Tu edad es: ${age}`
// }
// console.log(calculateAge(1998))

/********************************************************************************************************************************************************************************************/
//Ejercicios: NIVEL 1

//·2) Declare una función fullName e imprima su nombre completo:
const fnFullName = (firstName, lastName) => `Mi nombre completo: ${firstName} ${lastName}`;
//console.log(fnFullName('Gustavo', 'Fernández')) -> Mi nombre completo: Gustavo Fernández

//· 3) Declare una función addNumbers que toma dos parámetros y retorna la suma de ambos:
const addNumbers = (num1, num2) => {
    let suma = num1 + num2;
    return `El resultado de la suma es: ${suma}`
}
//console.log(addNumbers(4, 2)) -> El resultado de la suma es: 6

//·3) El área de un rectángulo se calcula de la siguiente manera: area = length x width,
//escribe una función areaOfRectangle que calcule el área de un rectángulo:
const areaOfRectangle = (length, width) => {
    let area = length * width
    return `el area de rectangulo es: ${area}`
};
//console.log(areaOfRectangle(10, 20)) -> el area de rectangulo es: 200

//·4) El perímetro de un rectángulo se calcula de la siguiente manera: perimeter= 2x(length + width), 
//escribe una función perimeterOfRectangle que calcule el perímetro de un rectángulo:
const perimeterOfRectangle = (length, width) => {
    let perimeter = 2 * (length + width)
    return `Perimeter of rectangle: ${perimeter}`
};
//console.log(perimeterOfRectangle(10, 20)) -> Perimeter of rectangle: 60
 

//·5) El volumen de un prisma rectangular se calcula de la siguiente manera: volume = length x width x height, 
//escribe una función volumeOfRectPrism que calcule el volumen de un prisma:
const volumeOfRectPrism = (length, width, height) => {
    let volume = length * width * height;
    return `Volume of prisma: ${volume}`
};
//console.log(volumeOfRectPrism(4, 10, 6)) -> Volume of prisma: 240


//·6) El área de un círculo se calcula de la siguiente manera: area = π x r x r, 
//escribe una función areaOfCircle que calcule el área de un círculo:
const areaOfCircle = (r) => {
    let area = Math.PI * r * r;
    return area;
};
//console.log(areaOfCircle(5)) -> 78.53981633974483


//·7) La circunferencia de un círculo se calcula de la siguiente manera: circumference = 2πr, 
//escribe una función circumOfCircle que calcule la circunferencia de un círculo:
const circumOfCircle = (r) => {
    let circumference = 2 * Math.PI * r;
    return `circumference is: ${circumference}`;
}
//console.log(circumOfCircle(4)) -> circumference is: 25.132741228718345


//·8) La densidad de una sustancia se calcula de la siguiente manera:density= mass/volume,
//escribe una función density que calcule la densidad de una sustancia:
const density = (mass, volume) => {
    let densidad = mass / volume;
    return `The density is: ${densidad}`;
};
//console.log(density(3, 5)) -> The density is: 0.6


//·9) La velocidad se calcula dividiendo el total de la distancia recorrida por un objeto en movimiento entre el tiempo total, 
//escribe una función que calcule la velocidad de un objeto en movimiento, speed:
const speed = (distancia, tiempo) => {
    let velo = distancia / tiempo;
    return `La velocidad es: ${velo} km/h`;
};
//console.log(speed(200, 5)) -> La velocidad es: 40 km/h


//·10) El peso de una sustancia se calcula de la siguiente manera: weight = mass x gravity,
// escribe una función weight que calcule el peso de una sustancia:
const weight = (mass, gravity) => {
    let peso = mass * gravity;
    return `El peso es de la sustancia es: ${peso}`;
};
//console.log(weight(90, 15)) -> El peso es de la sustancia es: 1350


//·11) La temperatura en °C se puede convertir a °F usando esta fórmula: °F = (°C x 9/5) + 32,
// escribe una función convertCelsiusToFahrenheit que convierta °C a °F:
const convertCelsiusToFahrenheit = (celsius) => {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
};
let tempCelsius = 30; //valor del parametro en variable
let tempFaherenheit = convertCelsiusToFahrenheit(tempCelsius);
//console.log(`${tempCelsius}°C es igual a ${tempFaherenheit}°F`) -> 30°C es igual a 86°F

//·12) El índice de masa corporal (IMC) se calcula de la siguiente manera: imc = peso en Kg / (altura x altura) en m2. 
//Escribe una función que calcule imc. El IMC se utiliza para definir de forma amplia diferentes grupos de peso en adultos de 20 años o más.
//Compruebe si una persona tiene un peso bajo, peso normal,con sobrepeso u obeso según la información que se proporciona a continuación:
// Se aplican los mismos parámetros de grupos tanto a hombres como a mujeres.
// Peso bajo: IMC inferior a 18,5
// Peso normal: IMC de 18,5 a 24,9
// Sobrepeso: IMC de 25 a 29,9
// Obeso: IMC es 30 o más

const imc = (weight, height) => {
    //consvierto la altura en metros:
    let heightXmeter = height / 100;
    let indice = weight / (heightXmeter * heightXmeter);
    //redondeo el imc:
    indice = indice.toFixed(2)

    return indice
};

let ingresarPeso = 85;
let ingresarAltura = 182;
//invoco la funcion en una var:
let result = imc(ingresarPeso, ingresarAltura)
//console.log(`El indice de masa corporal es: ${result}`);


//·13) Escribe una función llamada checkSeason, 
//toma un parámetro de mes y retorna la estación: Otoño, Invierno, Primavera o Verano.
const checkSeason = (month) => {
//para no tener errores con min o mayus:
    let monthLower = month.toLowerCase();

    let verano = 'Verano';
    let invierno = 'Invierno';
    let otoño = 'Otoño';
    let primavera = 'Primavera';

    if (monthLower === 'diciembre' || monthLower === 'enero' || monthLower === 'febrero' ) return verano;
    else if (monthLower === 'marzo' || monthLower === 'abril' || monthLower === 'mayo') return otoño;
    else if (monthLower === 'junio' || monthLower === 'julio' || monthLower === 'agosto') return invierno;
    else if (monthLower === 'septiembre' || monthLower === 'octubre' || monthLower === 'noviembre') return primavera;
    else return 'Mes invalido';
};
//ejecucion:
//let currentMonth = 'MARZO'; //parametro por variable
//let calledFn = checkSeason(currentMonth); //fn ejecutada en variable
//console.log(`La estacion del mes ${currentMonth} es: ${calledFn}`);


//·14) Math.max retorna su argumento más grande. 
//Escriba una función findMax que tome tres argumentos y devuelva su máximo sin usar el método Math.max.
// console.log(findMax(0, 10, 5));
// 10;
// console.log(findMax(0, -10, -2));
// 0;

const findMax = (n1, n2, n3) => {
    //asumo que el n1 es max:
    let max = n1;
//Compraro los valores y actualizo la variable 'max':
    if (n2 > max) max = n2;
    if (n3 > max) max = n3;

    return max;
};
//console.log(findMax(12, 20, 9))

/**********************************************************************************************************************************************/
//Ejercicios: NIVEL 2

//·1) La ecuación lineal se calcula de la siguiente manera: ax + by + c = 0. 
//Escribe una función que calcule el valor de una ecuación lineal, solveLinEquation.
const solveLinEquation = (a, b, c, x) => {
//Se implementa la formula -> dividir ambos lados por b, para resolver y.
//por ende a y c, son divididos por b.
    let valorY = (-a/b) * x - (c/b);
    return valorY;
};
//ejecucion:
let valorX = 2;
//El tercer arg se pasa negativo, por regla algebraica... ya que a es negativo, c tambien debe serlo.
let call = solveLinEquation(3, 5, -3, valorX);
//console.log(`cuando X es: ${valorX}, Y es: ${call}`) //->cuando X es: 2, Y es: -0.6


//·2) La ecuación cuadrática se calcula de la siguiente manera: ax2 + bx + c = 0. 
//Escribe una función que calcule el valor o los valores de una ecuación cuadrática, solveQuadEquation:
//explicacion:
//Si el discriminante es positivo, hay dos soluciones reales diferentes.
// Si el discriminante es igual a cero, hay una solución real doble (una raíz doble).
// Si el discriminante es negativo, no hay soluciones reales; sin embargo, hay soluciones complejas o conjugadas.
    

const solveQuadEquation = (a, b, c) => {
    //calculo el discriminante:
    let discriminante = b ** 2 - 4 * a * c;

//si el discriminante es positivo (mayor a 0), hay dos soluciones:
    if (discriminante > 0) {
        let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        return [x1, x2];
    } //· si el discriminante es igual a 0, hay una solucion real doble:
    else if (discriminante === 0) {
        let x = -b / (2 * a);
        return [x];
    }
    else {
        return []; //discriminante negativo, no hay solucion:
    }
};
//ejecucion:
let coeficienteA = 1;
let coeficienteB = -1;
let coeficienteC = -2;
let solucion = solveQuadEquation(coeficienteA, coeficienteB, coeficienteC);
//console.log('la solucion es:', solucion) -> la solucion es: [ 2, -1 ]


//·3)Declare una función llamada printArray. Toma un array como parámetro e imprime cada valor del array:
const printArray = (arr) => {
    // for(const nums of arr){
    //     console.log(nums);
    // }
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
};
let arr = [1, 3, 4, 5, 6]
//printArray(arr) -> me da los numeros impresos en consola.


//·4) Declare una función llamada showDateTime que muestre la hora en este formato: 01/08/2020 04:08 usando el objeto Date.
const showDateTime = () => {
    let allData = new Date();
    let minutos = allData.getMinutes();
    let hora = allData.getHours();
    let dia = allData.getDate()
    let mes = allData.getMonth() + 1;
    let año = allData.getFullYear()
    console.log(`${dia}/${mes}/${año} ${hora}:${minutos}`)
};
//showDateTime() //-> 16/11/2023 18:15


//·5)Declare una función llamada swapValues. Esta función intercambia el valor de x a y:
const swapValues = (x, y) => {
    let temporal = x;
    x = y;
    y = temporal;
    return [x, y]
};
//console.log(swapValues(4, 3)) -> [ 3, 4 ]


//·6) Declare una función llamada reverseArray.
//Toma un array como parámetro y retorna el array invertido (no use el método reverse()):
const reverseArray = (array) => {
    for (let i = array.length - 1; i >= 0; i--){
        console.log(array[i])
    }
};
let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//reverseArray(arrayNum)  -> 9 8 7 6 5 4 3 2 1
//·let i = array.length - 1 -> inicia i con el ultimo elemento del arr


//·7) Declare una función llamada capitalizeArray. Toma un array como parámetro y retorna el array - capitalizedarray:

const capitalizeArray = (arr) => {
    let capitalizedarray = [];
    
    for (const ele of arr) {
        //capitalizedarray.push(ele.toUpperCase()) asi pongo en mayus todas(capitalizo)
        let capiOne = ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase();
        capitalizedarray.push(capiOne)
    }
    return capitalizedarray
};

let originalArray = ["apple", "banana", "orange"];
let res = capitalizeArray(originalArray);
//console.log(res) -> [ 'Apple', 'Banana', 'Orange' ]


//·8) Declare una función llamada addItem.
// Toma un elemento de paŕametro y retorna un array después de agregar el un elemento:
// const addItem = (elemento) => {
//     let arrEl = [];
//     arrEl.push(ele)
//     return arrEl;
// };
//forma resumida: retorna un array con el elemento
const addItem = (elemento) => [elemento];
//console.log(addItem('vaso'))


//·9) Declare una función llamada removeItem.
// Toma como parámetro un index y retorna un array después de eleminar el elemento con ese index:
const removeItem = (index, arr) => {
    arr.splice(index, 1);
    return arr;
};
const arrOrigi = ['vaso', 'agua'];
//console.log(removeItem(0, arrOrigi.slice())) //se pasa un 0, por el tema indice que empiezan en 0.


//·10) Declare una función llamada sumOfNumbers. 
//Toma un número como parámetro y suma todos los números en ese rango:
const sumOfNumbers = (num) => {
    let suma = 0;
    for (let i = 1; i <= num; i++){
        suma += i
    }
    return suma
};
//console.log(sumOfNumbers(5))


//·11) Declare una función llamada sumOfOdds. 
//Toma un parámetro numérico y suma todos los números impares en ese rango:
const sumOfOdds = (nums) => {
    let sumaImpar = 0;
    for (let i = 1; i <= nums; i += 2){
        sumaImpar += i;
    }
    return sumaImpar;
}; 
//console.log(sumOfOdds(10)) -> 25


//·12) Declare una función llamada sumOfEven. 
//Toma un parámetro numérico y suma todos los números pares en ese rango:
const sumOfEven = (nums) => {
    let sumaPar = 0;
    for(let i = 2; i <= nums; i += 2){
        sumaPar += i
    }
    return sumaPar;
};
//console.log(sumOfEven(10)) -> 30


//·13) Declare una función llamada evensAndOdds.
//Toma un entero positivo como parámetro y cuenta el número de pares e impares:
const evensAndOdds = (num) => {
    let numPar = 0;
    let numIpar = 0;
    for (let i = 0; i <= num; i++){
        if(i % 2 === 0) {
            numPar++;
        }
        else {
            numIpar++
        }
    }
    return `numeros pares: ${numPar} y numeros impares: ${numIpar}`
};
//console.log(evensAndOdds(100)) -> numeros pares: 51 y numeros impares: 50.


//·14) Escriba una función que tome cualquier número de argumentos y retorne la suma de los argumentos:
const sumAll = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++){
        total += args[i]
    }
    return total;
};
//console.log(sumAll(1, 2, 3, 4, 5)) -> 15


//·15) Escriba una función randomUserIp que genere una ip de usuario aleatoria:
const randomUserIp = () => {
    let apli = () => Math.floor(Math.random() * 256); //·256 -> genera un numero aleatorio en el rango de 0 a 255.
    let ipRandom = `${apli()}.${apli()}.${apli()}.${apli()}`; //se va ejecutando y genera un numero
    return ipRandom;
};
//console.log(randomUserIp()) -> 99.198.211.188


//·16) Escriba una función randomMacAddress que genere una dirección mac aleatoria:
const randomMacAddress = () => {
    const caracteresHexa = '012345679ABCDEF';
    let macAleatoria = '';

    for (let i = 0; i < 12; i++) { //12 -> porque las mac contienen esa cantidad de caracteres.
        let iAleatorio = Math.floor(Math.random() * caracteresHexa.length); //num random en el rango de los caracteres hexa
        macAleatoria += caracteresHexa.charAt(iAleatorio);
    }
    
    return macAleatoria.match(/.{1,2}/g).join(':');
    //·match -> se utiliza para dividir una cadena en fragmentos de 1 y 2 caracteres.
    // '.' -> representa cualquier caracter, excepto un salto de linea.
    // '{1,2} -> indica que se espera que haya 1 y 2 repeticiones del caracter anterior (representado por el punto)
};
//console.log(randomMacAddress()) -> EB:32:D3:55:AE:99


//·17) Declare una función llamada randomHexaNumberGenerator. Cuando se llama a esta función, genera un número hexadecimal aleatorio. 
//La función retorna el número hexadecimal:
const randomHexaNumberGenerator = () => {
    let generatorHexa = () => Math.floor(Math.random() * 16).toString(16);
    //array.from -> crea un nuevo arr con 6 elementos. Cada el es resultado del llamado de la fn generatorHexa.
    const colorHexadecimal = Array.from({ length: 6 }, generatorHexa).join('');
    
    return `#${colorHexadecimal}`;
};
//console.log(randomHexaNumberGenerator()) -> #1633b1


//·18) Declare una función llamada userIdGenerator. 
//Cuando se llama a esta función, genera un id de siete caracteres. La función devuelve el id:
const userIdGenerator = () => {
    let caracterPermitidos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let userId = '';

    for (let i = 0; i < 7; i++){
        let id = Math.floor(Math.random() * caracterPermitidos.length);
        userId += caracterPermitidos.charAt(id)
    }

    return userId;
};
//console.log(userIdGenerator()) -> jlI2OfX


/*****************************************************************************************************************************/
//Ejercicios NIVEL 3:

//·1:
const userIdGeneratedByUser = (prompt1, prompt2) => {
    let caracterPermitidos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let cantidadCaracteres = prompt1//parseInt(prompt('Ingresa cantidad de caracteres por ID'));
    let generadorId = prompt2//parseInt(prompt('Ingrese la cantidad de id a generar'));

    //validacion de numeros validos:
    if (isNaN(cantidadCaracteres) || isNaN(generadorId) || cantidadCaracteres <= 0 || generadorId <= 0){
        console.log('Ingresar datos correctos')//alert('Por favor ingresar números validos y mayores a 0s');
        return
    }

    let idGenerados = [];

    for (let j = 0; j < generadorId; j++){
        let userId = '';
        for (let i = 0; i < cantidadCaracteres; i++){
            let id = Math.floor(Math.random() * caracterPermitidos.length);
            userId += caracterPermitidos.charAt(id);
        }
        idGenerados.push(userId);
    }
    return idGenerados;
};
//ejecucion:
let lengthChar = 6; //Le paso la cantidad de caracteres que tiene cada id;
let ids = 8; //le paso cuantos id quiero que me genere
let callFnId = userIdGeneratedByUser(lengthChar, ids);
//console.log(callFnId) -> ['JvpNel', 'bgKELe','CbccVY', 'thxPg0','IPgQMq', 'QYsH9K','cKbdr7', 'MeWY9K']


//·2) Escriba una función llamada rgbColorGenerator que genera colores rgb:
const rgbColorGenerator = () => {
    let generadorColor = () => Math.floor(Math.random() * 256);
    //llamado a fn, para cada color:
    let r = generadorColor();
    let g = generadorColor();
    let b = generadorColor();

    return `rgb(${r},${g},${b})`;
};
//console.log(rgbColorGenerator()) -> Color rgb aleatorio: rgb(122,227,41)


//·3) Escriba una función arrayOfHexaColors que retorna cualquier cantidad de colores hexadecimales en un array:
const generatorOfHexaColors = () => {
    let generatorHexa = () => Math.floor(Math.random() * 256).toString(16);
    return `${generatorHexa()}${generatorHexa()}${generatorHexa()}`
}
const arrayOfHexaColors = (cantidadColor) => {
    const arrayColor = []
    for (let i = 0; i < cantidadColor; i++){
        arrayColor.push(generatorOfHexaColors()) // pusheo la fn de arriba
    }
    return arrayColor;
};
//ejecucion:
let agregarCantidad = 6;
let fnColores = arrayOfHexaColors(agregarCantidad);
//console.log(fnColores) -> [ '81fb76', '9decb3', '2deef1', '864426', '58ea3d', 'a324a1' ];

//·4) Escriba una función arrayOfRgbColors que retorna cualquier cantidad de colores RGB en un array:
const arrayOfRgbColors = (colorsRgb) => {
    const arrayRgb = [];
    for (let i = 0; i < colorsRgb; i++){
        arrayRgb.push(rgbColorGenerator()) //Reutilizo la funcion de arriba que genera colores rgb y lo unico que hago e pushear al arr que pide
    }
    return arrayRgb;
}
//ejecucion:
let canRgbColor = 3;
let fnRgb = arrayOfRgbColors(canRgbColor);
//console.log(fnRgb) -> [ 'rgb(175,36,160)', 'rgb(129,89,209)', 'rgb(27,253,25)' ]

//·5) Escriba una función convertHexaToRgb que convierta el color hexa a rgb y retorna un color rgb:
//console.log(generatorOfHexaColors()) -> 3db22b
const convertHexaToRgb = (colorHexa) => {
    //·validacion de longitud:
    if(colorHexa.length !== 3 && colorHexa.length !==6) console.error('Color hexa invalido');

    //expancion de formato corto: (eso se aplica cuando hay pocos caracteres: abc -> pasaria -> aabbcc)
    if(colorHexa.length === 3) {
        colorHexa = colorHexa
        .split('')
        .map(ele => ele + ele)
        .join('');
    }
    //conversion de hexa a numeros decimaless
    const r = parseInt(colorHexa.substring(0,2), 16);
    const g = parseInt(colorHexa.substring(2, 4), 16);
    const b = parseInt(colorHexa.substring(4, 6), 16);

    return `rgb(${r},${g},${b})`;
};
//ejecucion:
let fnGenerator = generatorOfHexaColors();
let fnConvertor = convertHexaToRgb(fnGenerator);
//console.log(fnConvertor); -> rgb(186,116,234)


//·6) Escriba una función convertRgbToHexa que convierta rgb a color hexa y retorna un color hexa.
const convertRgbToHexa = (colorRgb) => {
    //Extraer los componentes rgb: (Exp.Regular para entraer rojo, verde, azul)
    const match = colorRgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

    //verificacion sobre el formato rgb para ver si es correcto:
    if(!match) console.error('Formato rgb no valido');

    //Conversion de componente a hexa:
    //·padStar -> Rellena el comienzo de una str con un caracter esfecifico (longitud 2, empieza con 0)
    const rHexa = Number(match[1]).toString(16).padStart(2, '0');
    const gHexa = Number(match[2]).toString(16).padStart(2, '0');
    const bHexa = Number(match[3]).toString(16).padStart(2, '0');

    const colorHexa = `#${rHexa}${gHexa}${bHexa}`;

    return colorHexa;
};
//Ejecucion: 
let generatorRgb = rgbColorGenerator();
let convertorHexa = convertRgbToHexa(generatorRgb)
//console.log(convertorHexa) -> #e92dd2


//·7) Escriba una función generateColors que pueda generar cualquier número de colores hexa o rgb:
const generateColors = (form, cant) => {
    let genHexa = generatorOfHexaColors();  //fn reutilizada.
    //console.log(genHexa) -> b6a24f
    let genRgb = rgbColorGenerator();       //fn reutilizada.

    const generadorColor = form === 'hexa' ? genHexa : genRgb;

    if (cant === 1) {
        return generadorColor;
    } else {
        const variosColores = [];
        for (let i = 0; i < cant; i++){
            variosColores.push(generadorColor)
        }
        return variosColores;
    }
};
//console.log(generateColors('rgb', 2)) -> [ 'rgb(11,129,88)', 'rgb(11,129,88)' ]
//console.log(generateColors('hexa', 3)) -> [ '4e957', '4e957', '4e957' ]


//·8) Llame a su función shuffleArray, toma un array como parámetro y devuelve un array mezclada:
const shuffleArray = (arr) => {
    const arrMezclado = [...arr]; //copia del arr

    for (let i = arrMezclado.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        //intercambiar elementos con destructuring:
        [arrMezclado[i], arrMezclado[j]] = [arrMezclado[j], arrMezclado[i]];
    }

    return arrMezclado;
};
//Ejecucion: 
let myArr = [1, 2, 3, 4, 5];
let arrMez = shuffleArray(myArr);
//console.log(arrMez) -> [ 2, 4, 1, 5, 3 ]


//·9) Llame a su función factorial, toma un número entero como parámetro y devuelve un factorial del número:
//Funcion recursiva -> es llamada a si misma durante su ejecucion.
const factorial = (n) => {
    //caso base:
    if (n === 0 || n === 1) return 1;
    else if (n < 2) return 'No definido para -n' //con eso se evitan numeros negativos

    return n * factorial(n - 1) // 4 * 3 * 2 * 1  = 24-> secuencia de esta operacion ---- Aca ocurre la recursividad
};
let ress = factorial(4); 
//console.log(ress)


//·10) Llame a su función isEmpty, toma un parámetro y verifica si está vacío o no.
const isEmpty = (params) => {
    if (params === null || params === undefined) return 'Se encuentra vacio';
    else return 'Se encuentra con info';
};
//console.log(isEmpty('hola'))
const isEmptyTernario = (params) => (params === undefined || params === null) 
? 'Se encuentra vacio'
: 'Contiene info';
//console.log(isEmptyTernario('hola')) 


//·11) Llame a su función sum, toma cualquier cantidad de argumentos y devuelve la suma:
const sum = (...nums) => {
    //reduce -> Metodo de los arr, que se utiliza para reducir un arr a un solo valor.
    //total es el acumulador, current es el valor actual del arr y cada iteracion.
    return nums.reduce((total, current) => total + current, 0)
};
//console.log(sum(12, 28, 10, 8 , 2))


//·12) Escriba una función llamada sumOfArrayItems, toma un array como parámetro y retorna la suma de todos los elementos.
//Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta razonable.
const sumOfArrayItems = (arr) => {
    if (!Array.isArray(arr)) return 'Se acepta un arr como argumento';
//·Every -> Metodo que verifica si todos los elementos de un array cumplen una condicion:
    if(!arr.every(el => typeof el === 'number')) return 'Todos los elementos deben ser números';

    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum;
};
//let arrSum = [1, 2, 3, 4, 'hola'] -> Todos los elementos deben ser números
let arrSum = [1, 2, 3, 4]; //-> 10
//console.log(sumOfArrayItems(arrSum))


//·13)Escribe una función llamada average, toma un array como parámetro y retorna el promedio de los elementos.
//Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta adecuada:
const average = (arr) => {
    if (!Array.isArray(arr)) return 'Se acepta un arr como argumento';
    if(!arr.every(ele => typeof ele === 'number')) return 'Todos los elementos deben ser números';

    let acu = 1;
    for(const nums of arr){
        acu *= nums;
    }
    return acu;
};
let arrMul = [3,5, 2, 4]; //-> 120
//console.log(average(arrMul))


//·14) Escriba una función llamada modifyArray que tome un array como parámetro y modifique el quinto elemento del array y retorna el array.
//Si la longitud del array es inferior a cinco, retorna 'elemento no encontrado'.
const modifyArray = (arr, newValue) => {
    if (arr.length >= 5){
        arr[4] = newValue;
        return arr;
    } else {
        console.error('Elemento no encontrado')
        return arr;
    }
}
//let arrFive = ['Hola', 'como', 'estas?', 'Yo', 'ERROR', 'Estudiando!'] -> [ 'Hola', 'como', 'estas?', 'Yo', 'estoy', 'Estudiando!' ]
//let arr3 = ['Google', 'Facebook','Apple', 'Amazon'] -> Elemento no encontrado


//·15) Escribe una función llamada isPrime, que verifica si un número es un número primo:
const isPrime = (num) => {
    //·Compruebo si el numero es igual o menor a 1, indica que no es primo.
    if (num <= 1) return false;

    for (let i = 2; i < num; i++){
        if (num % i === 0) return false; //Se utiliza para verificar si tiene algun divisor distinto de 1 y si mismo
    }
    return true
};
// const miNumero = 97;
// if (isPrime(miNumero)) console.log(`${miNumero} es primo.`); 
// else console.log(`${miNumero} no es primo.`);


//·16) Escriba una función que verifique si todos los elementos son únicos en un array:
//Set -> Un conjunto solo puede contener elementos unicos, por lo que si convertimos el arr a conjunto
//y si la longitud de los dos 
const verificacion = (arr) => {
    let newArr = new Set(arr);
    return newArr.size === arr.length
};
let arrOne = [1, 2, 3, 4, 5];
let arrTwo = [1, 1, 2, 3, 4]
//console.log(verificacion(arrOne)) -> true (no se repiten elementos)
//console.log(verificacion(arrTwo)) -> false (se repiten elementos)


//·17) Escriba una función que verifique si todos los elementos de un array son del mismo tipo de datos:
const dataType = (array) => {
    //if(array.length === 0) return true; //·si el arr esta vacio, se considera que son del mismo tipo.
    const tipoDeDato = typeof array[0];
    for (let i = 1; i < array.length; i++){
        if (typeof array[i] !== tipoDeDato) return false;
    }
    return true;
};
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['Hola', 'Hello', 'GutenTag', 1, 2];
//console.log(dataType(arr1)) //return true -> significa que son todos del mismo tipo
//console.log(dataType(arr2)) //return false -> lo elementos no son del mismo tipo


//·18) Escriba una función que devuelva un array de siete números aleatorios en un rango de 0-9. Todos los números deben ser únicos:
const FnArr = () => {
    const genArr = [];

    while (genArr.length < 7){               //condicion -> la ejecucion se corta cuando la longitud de arr sea menor a 7
        let random = Math.floor(Math.random() * 10);
        if (!genArr.includes(random)){      //·Verifico que no exista el numero en el array, de no existir se pushea...
        genArr.push(random);
        }
    };

    return genArr;
}
//console.log(FnArr()) [8, 0, 3, 7, 6, 9, 4]


//·19) Escriba una función llamada reverseCountries, toma el array de países y primero copia el array y retorna el array original invertido:
const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
];
//con metodo reverse:
const reverseCountry = () => {
    const countriesTwoArr = [...countries];
    return countriesTwoArr.reverse()
};

//con bucle:
const reverseCount = () => {
    const countriesTwoArr = [...countries];
    for (let i = countriesTwoArr.length - 1; i >= 0; i--){
        console.log(countriesTwoArr[i])
    }
};
//reverseCountry();

