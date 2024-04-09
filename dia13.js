/*
·Metodos de objeto consola -> console.log(), document.write() o document.getElementById. 
Se utilizan para mostrar la salida en la consola del navegador.
document.write muestra la salida en el documento del navegador (view port)
·Ambos se utilizan unicamente con fines de prueba y depuracion.
·Metodo console -> es la herramienta de prueba y depuracion mas popular 
·document.getElementById() cuando se quiere interactuar con el DOM usando JavaScript.
*/

//  ·CONSOLE.LOG():
//se usa para mostrar la salida en la consola del navegador. Se pueden sustituir valores y también estilizar la salida
//del registro utilizando -> %c.

//·Mostrando la salida en la consola del navegador:
//console.log('30 days of JavaScript');
//·Sustitución:
//console.log('%d %s of JavaScript', 30, 'Days');

//·Css -> Podemos darle estilo al mensaje de registro utilizando css
//console.log("%c30 Days Of JavaScript", "color:green") //la salida es color verde
//console.log("%c30 Day%c %cOf%c %cJavaScript%c",
// "color: green",
// "",
// "color: red",
// "",
// "color: yellow"
// ); salida del registro texto verde rojo y amarillo

//  ·CONSOLE.WARN():
//Se utiliza para dar avisos al navegador.
//Por ejemplo: para informar o avisar de la depreciación de la version de una paquete o de malas prácticas.
// console.warn("This is a warning");
// console.warn(
//   "You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!"
// );
// console.warn("Warning is different from error");

//  ·CONSOLE.ERROR():
//Este método muestra un mensaje de error
// console.error("This is an error message");
// console.error("We all make mistakes");

//  ·CONSOLE.TABLE():
//Muestra los datos como una tabla en la consola.
//toma un argumento requerido data, que debe ser un array o un objeto, y un parámetro adicional opcional columna.
//·con array:
const names = ["Asabeneh", "Brook", "David", "John"];
// console.table(names);
// ┌─────────┬────────────┐
// │ (index) │   Values   │
// ├─────────┼────────────┤
// │    0    │ 'Asabeneh' │
// │    1    │  'Brook'   │
// │    2    │  'David'   │
// │    3    │   'John'   │
// └─────────┴────────────┘
//·con objeto:
const user = {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
};
//   console.table(user);
// ┌─────────┬──────────────┐
// │ (index) │    Values    │
// ├─────────┼──────────────┤
// │  name   │  'Asabeneh'  │
// │  title  │ 'Programmer' │
// │ country │  'Finland'   │
// │  city   │  'Helsinki'  │
// │   age   │     250      │
// └─────────┴──────────────┘
const countries = [
["Finland", "Helsinki"],
["Sweden", "Stockholm"],
["Norway", "Oslo"],
];
//   console.table(countries);
// ┌─────────┬───────────┬─────────────┐
// │ (index) │     0     │      1      │
// ├─────────┼───────────┼─────────────┤
// │    0    │ 'Finland' │ 'Helsinki'  │
// │    1    │ 'Sweden'  │ 'Stockholm' │
// │    2    │ 'Norway'  │   'Oslo'    │
// └─────────┴───────────┴─────────────┘

//  ·CONSOLE.TIME()
//Inicia un temporizador que se puede utilizar para controlar el tiempo que dura una operacion.
//Se puede dar a cada temporizador un nombre unico, y puedes tener hasta 10.000 temporizadores funcionando en una pagina determinada
// Cuando llame a console.timeEnd() con el mismo nombre, el navegador mostrará el tiempo, en milisegundos, que ha transcurrido desde que se inició el temporizador.
const countriess = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"],
    ["Norway", "Oslo"],
];
//sintaxis:
// console.time("Regular for loop");
// for(let i = 0; i < countriess.length; i++){
//     console.log(countriess[i][0], countriess[i][1]);
// }
// console.timeEnd("Regular for loop");
// Finland Helsinki
// Sweden Stockholm
// Norway Oslo
// Regular for loop: 40.062ms

// console.time("for of loop");
// for (const [name, city] of countries) {
//   console.log(name, city);
// }
// console.timeEnd("for of loop");

// console.time("forEach loop");
// countries.forEach(([name, city]) => {
//   console.log(name, city);
// });
// console.timeEnd("forEach loop");

//Salida:
// Finland Helsinki
// Sweden Stockholm
// Norway Oslo
// Regular for loop: 0.34716796875ms
// Finland Helsinki
// Sweden Stockholm
// Norway Oslo
// for of loop: 0.26806640625ms
// Finland Helsinki
// Sweden Stockholm
// Norway Oslo
// forEach loop: 0.358154296875ms

//  ·CONSOLE.INFO():
//Muestra un mensaje de informacion en la consola del navegador:
//console.info("30 Days Of JavaScript challenge is trending on Github");
//console.info("30 Days Of fullStack challenge might be released");
//console.info("30 Days Of HTML and CSS challenge might be released");

//  ·CONSOLE.ASSERT():
//Escribe un mensaje de error en la consola si la afirmacion es falsa, si es verdadera no pasa nada
//console.assert(4 > 3, '4 es mayor a 3')  no hay resultado
//console.assert(4 < 3, '3 no es mayor a 4') Assertion failed: 3 no es mayor a 4
for (let i = 0; i <= 10; i += 1){
    let errorMessage = `${i} is not even`;
    //console.log("the # is " + i);
    //console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage });
};

//  ·CONSOLE.GROUP
//Puede ayudar a agrupar diferentes grupos de registros 
const namess = ["Asabeneh", "Brook", "David", "John"];
// console.group("Namess");
// console.log(namess);
// console.groupEnd();

//  ·CONSOLE.COUNT():
//Imprime el numero de veces que se llama a console.count. Toma un parámetro de etiqueta de cadena. Es muy útil para contar el número de veces que se llama a una función:
const func = () => {
  console.count("Function has been called");
};
// func();
// func();
// func();
// Function has been called: 1
// Function has been called: 2
// Function has been called: 3

//  ·CONSOLE.CLEAR
//El console.clear() limpia la consola del navegador.