//·Ejercicios: Nivel 1
//1) Crear un archivo index.html y poner cuatro elementos p: Obtenga el primer párrafo utilizando document.querySelector(tagname) y el nombre de la etiqueta
let primerParrafo = document.querySelector('p');
//console.log(primerParrafo) -> <p class="parrafoPrincipal">Trato de mejorar dia a dia</p>

//2) Obtener cada uno de los párrafos usando document.querySelector('#id') mediante su id
let parrafoId = document.querySelector('#secundario')
//console.log(parrafoId) -> <p id="secundario">No voy a bajar los brazos para conseguir el trabajo</p>

//3) Obtener todos los p como nodeList usando document.querySelectorAll(tagname) por su nombre de etiqueta
let allP = document.querySelectorAll('p');
// console.log(allP) -> 
// NodeList(2) [p.parrafoPrincipal, p#secundario]
// 0 : p.parrafoPrincipal
// 1 : p#secundario
// length : 2
// [[Prototype]] : NodeList


//·Ejercicios: Nivel 2
//1) Cambiar el estilo de cada párrafo mediante JavaScript (ej, color, fondo, borde, tamaño de la fuente, familia de la fuente)
const parrafoStyle = document.querySelectorAll('p');
parrafoStyle.forEach((parra, i) => {
    parra.style.fontSize = '20px';
    parra.style.color = "green";
});