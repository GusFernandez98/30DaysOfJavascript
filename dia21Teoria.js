//  ·Document Object Model -> DOM (parte 1)
//·El documento HTML esta estructurado como un objeto JavaScript, cada elemento HTML tienen propiedades que pueden ayudar a manipularlos
//Es posible obtener, crear, añadir o eliminar elementos HTML mediante Javascript.
//·Para seleccionar un elemento HTML -> se utiliza el nombre de la etiqueta, el id, el nombre de la clase o atributo.

//  ·Obtencion del elemento:
//Para acceder u obtener elementos utilizamos diferentes métodos:
//<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document Object Model - (Modelo de objeto de documento)</title>
  </head>
  <body>
    <h1 class="title" id="first-title">First Title</h1>
    <h1 class="title" id="second-title">Second Title</h1>
    <h1 class="title" id="third-title">Third Title</h1>
    <h1></h1>
  </body>
</html>

//  ·Obtener elementos por nombre de etiqueta -> getElementsByTagName() 
//Toma un nombre de etiqueta como parametro de cadena y este método devuelve un objeto HTMLCollection. 
//Una HTMLCollection es un objeto tipo array de elementos HTML.
// sintaxis
document.getElementsByTagName("tagname");
const allTitles = document.getElementsByTagName("h1");
//console.log(allTitles) -> HTMLCollections
//console.log(allTitles.length) ->  4
for (let i = 0; i < allTitles.length; i++) {
    //console.log(allTitles[i]) imprime cada uno de los elementos de la HTMLCollection
  }

//  ·Obtener elementos por el nombre de la clase -> getElementsByClassName()
document.getElementsByClassName("classname");
const allTitless= document.getElementsByClassName("title");

//  ·Obtener un elemento por id -> getElementsById()
//sintaxis
document.getElementById("id");
let firstTitle = document.getElementById("first-title");
//console.log(firstTitle) -> <h1>First Title</h1>

//  ·Obtener elementos mediante métodos querySelector -> document.querySelector
//El método document.querySelector puede seleccionar un HTML o elementos HTML por nombre de etiqueta, por id o por nombre de clase.

//·querySelector: se puede utilizar para seleccionar elementos HTML por su nombre de etiqueta, id o clase. Si se utiliza el nombre de la etiqueta, sólo se selecciona el primer elemento.
let firstTitle1 = document.querySelector("h1"); // seleccionar el primer elemento h1 disponible
let firstTitle2 = document.querySelector("#first-title"); // selecciona el id con first-title
let firstTitle3 = document.querySelector(".title"); // seleccionar el primer elemento disponible con clase title

//·querySelectorAll: se puede utilizar para seleccionar elementos html por su nombre de etiqueta o clase. Devuelve un nodeList que es un objeto tipo array que soporta métodos de array
const todosLosTitulos = document.querySelectorAll('h1') //# selects all the available h1 elements in the page

console.log(todosLosTitulos.length) // 4
for (let i = 0; i < todosLosTitulos.length; i++) {
  console.log(todosLosTitulos[i])
}

todosLosTitulos.forEach(title => console.log(title))
const allT = document.querySelectorAll('.title') // lo mismo ocurre con la selección mediante la clase

//  ·Añadir atributo
//En la etiqueta de apertura de HTML se añade un atributo que proporciona información adicional sobre el elemento. 
//Atributos HTML comunes: id, class, src, style, href, disabled, title, alt. Añadamos id y class para el cuarto título.
const titles = document.querySelectorAll("h1");
titles[3].className = "title";
titles[3].id = "fourth-title";

//  ·Añadir un atributo con setAttribute
//El método setAttribute() establece cualquier atributo html. Toma dos parametros -> tipo del atributo y nombre del atributo.
const titlesOne = document.querySelectorAll("h1");
titlesOne[3].setAttribute("class", "title");
titlesOne[3].setAttribute("id", "fourth-title");

//  ·Añadir atributo sin setAttribute
//Se puede utilizar el metodo normal de configuracion, pero este no puede funcionar para todo. pero esto no puede funcionar para todos los elementos
titles[3].className = "title";
titles[3].id = "fourth-title";

//  ·Añadir una clase mediante classList
//El método classList es un buen método para añadir clases adicionales. No anula la clase original si existe una clase, sino que añade una clase adicional para el elemento.
titles[3].classList.add("title", "header-title");

//  ·Eliminación de la clase mediante remove
//De forma similar a la adición, también podemos eliminar la clase de un elemento. Podemos eliminar una clase específica de un elemento.
titles[3].classList.remove("title", "header-title");

//  ·Añadir texto a un elemento HTML
//Un HTML es un bloque compuesto por una etiqueta de apertura, una etiqueta de cierre y un contenido de texto.
//utilizando la propiedad textContent o *innerHTML.

//Añadir contenido de texto usando textContent
//La propiedad textContent se utiliza para añadir texto a un elemento HTML.
const titles = document.querySelectorAll("h1");
titles[3].textContent = "Fourth Title";

//Añadir contenido de texto usando innerHTML
//La mayoría de la gente se confunde entre textContent y innerHTML. textContent está pensado para añadir texto a un elemento HTML, sin embargo innerHTML puede añadir un elemento o elementos de texto o HTML como hijo.

//textContent
//Asignamos la propiedad del objeto HTML textContent a un texto
const titles = document.querySelectorAll("h1");
titles[3].textContent = "Fourth Title";

//  ·Añadir estilo
//·Añadir estilo Color
//·Añadamos un poco de estilo a nuestros títulos. Si el elemento tiene índice par le damos color verde sino rojo:
const titles = document.querySelectorAll("h1");
titles.forEach((title, i) => {
  title.style.fontSize = "24px"; // todos los títulos tendrán un tamaño de letra de 24px
  if (i % 2 === 0) {
    title.style.color = "green";
  } else {
    title.style.color = "red";
  }
});

// Añadir estilo Background Color
// Añadamos un poco de estilo a nuestros títulos. Si el elemento tiene índice par le damos color verde sino rojo.
const titles = document.querySelectorAll("h1");
titles.forEach((title, i) => {
  title.style.fontSize = "24px"; // todos los títulos tendrán un tamaño de letra de 24px
  if (i % 2 === 0) {
    title.style.backgroundColor = "green";
  } else {
    title.style.backgroundColor = "red";
  }
});

// Añadir estilo Font Size
// Añadamos algo de estilo a nuestros títulos. Si el elemento tiene índice par le damos 20px sino 30px
const titles = document.querySelectorAll("h1");
titles.forEach((title, i) => {
  title.style.fontSize = "24px"; // todos los títulos tendrán un tamaño de letra de 24px
  if (i % 2 === 0) {
    title.style.fontSize = "20px";
  } else {
    title.style.fontSize = "30px";
  }
});