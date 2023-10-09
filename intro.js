//Asi añadi Js a HTML -> <script src='./intro.js'></script>
//console.log('log escrito en Javascript')

// Ejercicio 1:
// let base = prompt('Ingresar valor de base');
// let altura = prompt('Ingresar valor de altura');
// let areaTriangulo = base * altura / 2;
// alert(`El área del triángulo es: ${areaTriangulo}`)

//Ejercicio 2:
//parseInt -> se utiliza para convertir los valores a num, el promp recibe strings:
//Sin parse ->  Js me estaba sumando como strings, no realizaba la suma matematica:
// let ladoA = parseInt(prompt('Ingresar valor del lado A'));
// let ladoB = parseInt(prompt('Ingresar valor del lado B'));
// let ladoC = parseInt(prompt('Ingresar valor del lado C'));
// let perimetro = ladoA + ladoB + ladoC;
// alert(`El perímetro del triángulo es: ${perimetro}`);

//Ejercicio 9:
//El parseint no es necesario con la multiplicacion, funciona igual si no lo pongo.
//  let horas = parseInt(prompt('ingresar horas trabajadas'));
//  let tafira = parseInt(prompt('ingresar tarifa salarial'));
//  let ganancia = horas * tafira;
//  alert(`Su ganancia semanal es: ${ganancia}`)

//Ejercicio 13:
//·ParseInt -> para convertir en numero entero
// let añoDeNacimiento = prompt('Ingresa tu año de nacimiento:');
// //·Obtengo el año actual:
// let añoActual = new Date().getFullYear();
// //·Calcula la edad:
// let edadDeUsuario =  añoActual - añoDeNacimiento;

// //·Verificacion:
// if (edadDeUsuario < 0 || edadDeUsuario > 100) {
//     alert(`Datos erroneos`)
// }
// else if(edadDeUsuario >= 18 ) {
//     alert(`Tienes ${edadDeUsuario} años. Tienes la edad suficiente para manejar`)
// }
// else {
//     alert(`Tienes ${edadDeUsuario} años. No tienes la edad suficiente de conducir`)
// }

//Ejercicio 14:

let yourAgee = prompt(`Ingresa tu edad`);
//2) Guado informacion para calcular fecha:
let date = new Date();
//3) Se calcula la fecha de nacimiento del usuario, obteniendo info del mes y dia actual:
let brith = new Date(date.getFullYear() - yourAgee, date.getMonth(), date.getDate());
//4) Saco la diferencia entre fecha actual y fecha de cumpleaños.
//5) Se divide por 1000 para convertirlo en segundos.
let secondsLife = (date - brith) / 1000;
alert(`Has vivido aproximadamente ${secondsLife} segundos`);