const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    //'Sass'
  ];

  // module.exports = webTechs;

  let sass = 'Sass';
  let search = webTechs.includes(sass);

  if(search) return console.log('Sass es un preproceso de CSS');
  else webTechs.push(sass);
  // console.log(webTechs)


//·Encuentra la palabra más larga en el array webTechs:
let strLarga = '';
// for (let i = 0; i < webTechs.length; i++) {
//   //console.log(webTechs[i].length) -> Verifico la longitud de cada elemento
//   if (webTechs[i].length > 9) {
//     strLarga = webTechs[i]
//   }
// }
//console.log(strLarga) -> JavaScript

//· for of
for (const tech of webTechs){
  if (tech.length > 9) {
    strLarga = tech
  }
}
//console.log(strLarga)


//·Una aplicación creada con MongoDB, Express, React y Node se denomina MERN stack app.
//Crea el acrónimo MERN usando el array mernStack:
const mernStack = ["MongoDB", "Express", "React", "Node"];
// for (let i = 0; i < mernStack.length; i++) {
//   const firstStr = mernStack[i].substring(0, 1)
//   //console.log(firstStr) //-> M E R N
// }

//for of:
for (const mern of mernStack) {
  const firstStr = mern.substring(0, 1);
  //console.log(firstStr)
}


//·Utiliza el array de webTechs para crear la el siguiente array de arrays:
//[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
const longWebTech = [];

for (let i = 0; i < webTechs.length; i++) {
  const detail = [webTechs[i], webTechs[i].length]
  longWebTech.push(detail)
}
//console.log(longWebTech)

//·for of:
const webLong = [];
for (const long of webTechs){
  const det = [long, long.length];
  webLong.push(det)
}
//console.log(webLong)


//·nvierte el orden usando un bucle sin usar el método reverse():
let fruits = ['banana', 'orange', 'mango', 'lemon'];
let size = fruits.length;
// /2 -> el proposito de dividir el tamaño en 2 es solo para recorrer la mitad del arr.
//Si iteras sobre la mitad del array,
//cada elemento en la primera mitad se intercambiará con su respectivo elemento en la segunda mitad,
for (let i = 0; i < size / 2; i++) { 
  let reverse = fruits[i];
  fruits[i] = fruits[size - i - 1];
  fruits[size - i - 1] = reverse;
}
//console.log(fruits) -> [ 'lemon', 'mango', 'orange', 'banana' ]


//·Imprime todos los elementos del array:
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

for (const stack of fullStack){ //entro al primer arr
  for (const skill of stack){  //segundo arr
    let consola = skill.toUpperCase(); // elementos en mayus
    console.log(consola) //muestro en consola.
  }
}
// for (let i = 0; i < fullStack.length; i++){
//   for (let j = 0; j < fullStack[i].length; j++){
//     console.log(fullStack[i][j].toUpperCase())
//   }
// }