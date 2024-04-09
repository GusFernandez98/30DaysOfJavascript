//  DOM (parte 2)
//·Crear un elemento html:
//se utiliza el nombre de la etiqueta. La creación de un elemento HTML mediante JavaScript se utiliza el metodo:
//document.createElement() -> toma un nombre de etiqueta de elemento HTML como parametro cadena
//·sintaxis
document.createElement("tagname");

<html>
  <head>
    <title>Document Object Model:30 Days Of JavaScript</title>
  </head>

  <body>
    <script>
      let title = document.createElement("h1");
      title.className = "title";
      title.style.fontSize = "24px";
      title.textContent = "Creating HTML element DOM Day 2";

      console.log(title);
    </script>
  </body>
</html>

//·Para crear multiples elementos, se debe utilizar el bucle:
let title;
for (let i = 0; i < 3; i++) {
  title = document.createElement("h1");
  title.className = "title";
  title.style.fontSize = "24px";
  title.textContent = i;
  console.log(title);
}

//·Añadir un hijo a un elemento padre:
//Para ver un elemento creado en el documento HTML debemos añadirlo al padre como elemento hijo.
//para acceder al body se utiliza -> document.body y este soporta el metodo -> appendChild().
// creación de múltiples elementos y anexión al elemento padre
let titletwo;
for (let i = 0; i < 3; i++) {
    titletwo = document.createElement("h1");
    titletwo.className = "title";
    titletwo.style.fontSize = "24px";
    titletwo.textContent = i;
    document.body.appendChild(titletwo);
};

//·Eliminar un elemento hijo de un nodo padre:
//es posible que queramos eliminar uno o varios elementos y podemos utilizar el método -> removeChild().
<ul>
<li>30DaysOfPython Challenge Done</li>
<li>30DaysOfJavaScript Challenge Done</li>
<li>30DaysOfReact Challenge Coming</li>
<li>30DaysOfFullStack Challenge Coming</li>
<li>30DaysOfDataAnalysis Challenge Coming</li>
<li>30DaysOfReactNative Challenge Coming</li>
<li>30DaysOfMachineLearning Challenge Coming</li>
</ul>

const ul = document.querySelector('ul')
const lists = document.querySelectorAll('li')
for (const list of lists) {
    ul.removeChild(list)

};

//· hay una forma mejor de eliminar todos los elementos HTML internos o hijos de un elemento padre utilizando el método innerHTML propiedades
const ulist = document.querySelector('ul')
ulist.innerHTML = ''