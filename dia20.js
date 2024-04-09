//  ·Codigo limpio: 
// Utilizamos camelCase para las variables y las funciones.
// Todos los nombres de las variables comienzan con una letra.
// Hemos optado por utilizar const para las constantes, los arrays, los objetos y las funciones.
//En lugar de las comillas dobles, hemos optado por utilizar las comillas simples o backtick. Las comillas simples se están poniendo de moda.
// También hemos eliminado el punto y coma de nuestro código, pero es una cuestión de preferencia personal.
// Espacio alrededor de los operadores aritméticos, operadores de asignación y después de la coma
// Función de flecha en lugar de declaración de función
// Retorno explícito en lugar de implícito si la función es de una línea
// No hay coma final en el último valor de un objeto
// Preferimos este +=, -=, *= /=, **= en lugar de la versión más larga
// Cuando usamos console.log() es bueno imprimir con una cadena de etiquetas para identificar de dónde viene la consola

//·Variables:
let firstName = 'Luis';
let secondName = 'Gustavo';
let country = 'Argentina';
let city = 'San Luis';

const PI = Math.PI;
const gravity = 9.81;

//·Array:
//Hemos optado por hacer nombres de los arr plurales:
const names = ['Luis', 'Gustavo', 'Fernandez'];
const numbers = [0, 3.14, 9.81, 37, 98.6];
const countries = ['Argentina', 'Brasil', 'Uruguay', 'Estados Unidos'];
const languages = ['Español', 'Ingles', 'Frances'];
const skills = ['HTML5', 'CSS', 'Javascript', 'React', 'Express', 'PostgreSQL'];
const fruits = ['banana', 'manzana', 'durazno', 'naranja'];
const vegetables = ['Tomate', 'lechuga', 'papa', 'zanahoria'];

//  ·Funciones
//La función flecha no sustituye a otras funciones. Además, las funciones de flecha y las declaraciones de función no son exactamente iguales.
//Por lo tanto, debes saber cuándo usarla y cuándo no.

// función que devuelve el nombre completo de una persona
const printFullName = (firstName, lastName) => firstName + " " + lastName;

// función que calcula el cuadrado de un número
const square = (n) => n * n;

// una función que genera colores hexa al azar
const hexaColor = () => {
  const str = "0123456789abcdef";
  let hexa = "#";
  let index;
  for (let i = 0; i < 6; i++) {
    index = Math.floor(Math.random() * str.length);
    hexa += str[index];
  }
  return hexa;
};

// una función que muestra la fecha y la hora
const showDateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  const dateMonthYear = date + "." + month + "." + year;
  const time = hours + ":" + minutes;
  const fullTime = dateMonthYear + " " + time;
  return fullTime;
};
//console.log(showDateTime()) -> 13.3.2024 13:32

//  ·Bucles
for (let i = 0; i < n; i++) {
  console.log();
}

// declaración de una variable array
const namess = ["Asabeneh", "Mathias", "Elias", "Brook"];

// iteración de un array mediante un bucle for regular
let len = names.length;
for (let i = 0; i < len; i++) {
  console.log(names[i].toUpperCase());
}

// iteración de un array mediante for of
for (const name of names) {
  console.log(name.toUpperCase());
}

// iteración de un array mediante forEach
names.forEach((name) => name.toUpperCase());

const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: true,
};
for (const key in person) {
  console.log(key);
}

//  ·Condicional
// sintaxis
if (condition) {
  // esta parte del código se ejecuta para la condición de verdad
} else {
  // esta parte del código se ejecuta para una condición falsa
}
// if else
let num = 3;
if (num > 0) {
  console.log(`${num} is a positive number`);
} else {
  console.log(`${num} is a negative number`);
}
//  3 is a positive number
// if else if else if else

let a = 0;
if (a > 0) {
  console.log(`${a} is a positive number`);
} else if (a < 0) {
  console.log(`${a} is a negative number`);
} else if (a == 0) {
  console.log(`${a} is zero`);
} else {
  console.log(`${a} is not a number`);
}
// Switch Más Ejemplos
let dayUserInput = prompt("What day is today ?");
let day = dayUserInput.toLowerCase();

switch (day) {
  case "monday":
    console.log("Today is Monday");
    break;
  case "tuesday":
    console.log("Today is Tuesday");
    break;
  case "wednesday":
    console.log("Today is Wednesday");
    break;
  case "thursday":
    console.log("Today is Thursday");
    break;
  case "friday":
    console.log("Today is Friday");
    break;
  case "saturday":
    console.log("Today is Saturday");
    break;
  case "sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("It is not a week day.");
}
// ternario

let isRaining = true;
isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");


//  ·Clases
//Declaramos la clase con CamelCase que empieza con mayúscula.

// sintaxis
class ClassName {
  // el código va aquí
}
// definir la clase
class Person {
  constructor(firstName, lastName) {
    console.log(this); // Compruebe el resultado desde aquí
    this.firstName = firstName;
    this.lastName = lastName;
}
}
