//  ·Storage (Almacenamiento) web HTML5:
//Se puede acceder a los datos almacenados mediante JavaScript, lo que permite aprovechar las secuencias de comandos 
//del lado del cliente para hacer muchas cosas que tradicionalmente han implicado la programación del lado del servidor
//y las bases de datos relacionales.Hay dos objetos de almacenamiento web:

// ·sessionStorage -> está disponible dentro de la sesión de la pestaña o ventana del navegador.
// Está diseñado para almacenar datos en una sola sesión de la página web. Esto significa que si la ventana se cierra, los datos de la sesión se eliminarán.

// ·localStorage -> es para la API de almacenamiento web que se utiliza para almacenar datos en el navegador sin caducidad.

//·En ambos casos, los datos del almacenamiento web no están disponibles entre distintos navegadores.

//  ·Objetos de almacenamiento web HTML5:
//El almacenamiento (storage) web HTML proporciona dos objetos para almacenar datos en el cliente:
// ·window.localStorage -> almacena datos sin fecha de caducidad
// ·window.sessionStorage -> almacena datos para una sesión

// ·Objetos Web Storage:
// localStorage - para mostrar el objeto localStorage
// localStorage.clear() - para remover todo lo que hay en el almacenamiento local
// localStorage.setItem() - para almacenar datos en el localStorage. Toma como parámetros una clave y un valor.
// localStorage.getItem() - para mostrar los datos almacenados en el localStorage. Toma una clave como parámetro.
// localStorage.removeItem() - para remover un ítem almacenado de un localStorage. Toma la clave como parámetro.
// localStorage.key() - para mostrar un dato almacenado en un localStorage. Toma el índice como parámetro.

//  ·Establecer el elemento en el localStorage
//Cuando establecemos conjunto los datos que se almacenan en un localStorage, se almacenarán como una cadena.
localStorage.setItem("key", "value");

//  ·Almacenamiento de una cadena en un localStorage
localStorage.setItem("firstName", "Asabeneh"); // ya que el valor es una cadena, no lo encadenamos
// console.log(localStorage) -> Storage {firstName: 'Asabeneh', length: 1}

//  ·Almacenar el número en un storage local
localStorage.setItem("age", 200);
// console.log(localStorage) ->  Storage {age: '200', firstName: 'Asabeneh', length: 2}

//  ·Almacenando un array en un localStorage
const skills = ["HTML", "CSS", "JS", "React"];
//El array de Skills tiene que ser encadenado primero para mantener el formato.
const skillsJSON = JSON.stringify(skills, undefined, 4);
localStorage.setItem("skills", skillsJSON);
//console.log(localStorage) -> Storage {age: '200', firstName: 'Asabeneh', skills: 'HTML,CSS,JS,React', length: 3}

//  ·Almacenamiento de un objeto en un localStorage
const user = {
    firstName: "Asabeneh",
    age: 250,
    skills: ["HTML", "CSS", "JS", "React"],
  };
  
const userText = JSON.stringify(user, undefined, 4);
localStorage.setItem("user", userText);

//  ·Obtener un elemento de localStorage
//Obtenemos los datos del almacenamiento local utilizando el método localStorage.getItem().
//sintaxis
localStorage.getItem("key");

let firstName = localStorage.getItem("firstName");
let age = localStorage.getItem("age");
let skillss = localStorage.getItem("skills");
//console.log(firstName, age, skills) -> 'Asabeneh', '200', '['HTML','CSS','JS','React']'

//  ·Utilizando JSON.parse() para convertirlo en un arr normal:
let skillsss = localStorage.getItem("skills");
let skillsObj = JSON.parse(skillsss, undefined, 4);
//console.log(skillsObj) -> ['HTML','CSS','JS','React']

// ·Limpiando el localStorage
//El método clear, borrará todo lo almacenado en la memoria local
localStorage.clear();