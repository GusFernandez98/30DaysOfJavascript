//  ·Desestructuración y Spread
//La desestructuración es una forma de desempaquetar arrays y objetos y asignarlos a una variable distinta.
const numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;
//console.log(numOne, numTwo, numThree) -> 1 2 3

const completeName = ['Luis', 'Gustavo', 'Fernández'];
let [firstName, secondName ,lastName] = completeName;
//console.log(lastName) -> Fernández

const fullStack = [
    ["HTML", "CSS", "JS", "React"],
    ["Node", "Express", "MongoDB"],
]
const [frontEnd, backEnd] = fullStack;
//console.log(frontEnd) -> [ 'HTML', 'CSS', 'JS', 'React' ]

//·Si queremos omitir uno de los valores del array utilizamos una coma adicional. La coma ayuda a omitir el valor en ese índice específico:
const numeros = [1, 2, 3];
let [num1, , num3] = numeros;
//console.log(num1,  num3) -> 1 3

//·No podemos asignar una variable a todos los elementos del array. 
//Podemos desestructurar algunos de los primeros y podemos obtener los restantes como array utilizando el operador spread(...):
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//let [nums1, nums2, nums3, ...rest] = nums;
//console.log(nums1, nums2, nums3); -> 1, 2 , 3
//console.log(rest); -> [4, 5, 6, 7, 8, 9, 10]

//·Desestructuración durante la iteración:
const countries = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"],
    ["Norway", "Oslo"],
];

for (const [country, city] of countries) {
    //console.log(country, city)
}

const fullStacks = [
    ["HTML", "CSS", "JS", "React"],
    ["Node", "Express", "MongoDB"],
  ];
  
for (const [first, second, third] of fullStacks) {
    //console.log(first, second, third);
}

//  ·Destructuración de objetos:
//Cuando desestructuremos el nombre de la variable que usamos para desestructurar 
//debe ser exactamente el mismo que la clave o propiedad del objeto. 
const rectangle = {
    width: 20,
    height: 10,
    area: 200
};
//let { area, widht } = rectangle;
//console.log(area, widht)  -> 200 20

//  ·Renombrar durante la estructuración:
//let { widht: w, height: h, area: a, perimeter } = rectangle;
//console.log(w, h, a, perimeter) -> 20 10 200 undefined

//Si la variable no se encuentra en el objeto, la variable se asignara undefined. A veces la clave puede no estar  en el objeto
//en ese caso podemos dar un valor por defecto durante la declaracion
//let { width, height, area, perimeter = 60 } = rectangle;
//console.log(width, height, area, perimeter) -> 20 10 200 60

//  ·Desestructuración de keys como parámetro de una funcion. 
//Creemos una funcion que toma un objeto rectangulo y devuelve el perímetro de un rectangulo:
const calculatePerimeter = ({width, height}) => {
    return 2 * (width + height)
};

// Creemos una función que proporcione información sobre el objeto persona con desestructuración:
const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  job: "Instructor and Developer",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  languages: ["Amharic", "English", "Suomi(Finnish)"],
};

const getPersonInfo = ({
  firstName,
  lastName,
  age,
  country,
  job,
  skills,
  languages,
}) => {
  const formattedSkills = skills.slice(0, -1).join(", ");
  const formattedLanguages = languages.slice(0, -1).join(", ");

  personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

  return personInfo;
};
//console.log(getPersonInfo(person));

//  ·Operador Spread o Rest:
//Cuando desestructuramos un array utilizamos el operador spread(...) para obtener el rest de elementos como array.
const numeritos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [nums1, nums2, nums3, ...rest] = numeritos
//console.log(nums1, nums2, nums3); -> 1 2 3
//console.log(rest) -> [4, 5,  6, 7,8, 9, 10]

const countriess = [
  "Germany",
  "France",
  "Belgium",
  "Finland",
  "Sweden",
  "Norway",
  "Denmark",
  "Iceland",
];

let [ger, fra, , ...nordicCountries] = countriess;
//console.log(nordicCountries) -> [ 'Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland' ]

//·Spread operator para copia de array:
const evens = [0, 2, 4, 6, 8, 10];
const evensNums = [...evens];

const odds = [1, 3, 5, 7, 9];
const oddsNums = [...odds];

const wholeNums = [...evensNums, ...oddsNums];
//console.log(wholeNums) -> [0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9]

//·Spread operator para copiar objetos:
const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
};

const copiedUser = { ...user };
//console.log(copiedUser);

//·Modificar o cambiar el objeto mientras se copia:
const copiedNewUser = { ...user, name: 'Luis'}
//console.log(copiedNewUser)

//·Operador Spread con función flecha:
//Si quiero escribir una funcion flecha que tome un numero ilimitado de argumentos, utilizaremos un operador spread.
//al utilizarlo como parametro, el argumento pasado cuando invocamos una funcion cambiará a un array
// const sumAllNums = (...args) => {
//   console.log(args)
// }
//sumAllNums(1, 2, 3, 4) -> [ 1, 2, 3, 4 ]
const sumAllNums = (...args) => {
  let count = 0;
  for (const num of args){
    count += num
  }
  return count;
}
//console.log(sumAllNums(1, 2, 3, 4, 5)) -> 15

/**************************************************************************************************************************************/
//Ejercicios NIVEL 1
const constants = [2.72, 3.14, 9.81, 37, 100];
const paises = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectanguloo = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

//·1) Desestructurar y asignar los elementos del array de constantes para e, pi, gravedad, humanBodyTemp, waterBoilingTemp:
let [ e, pi, gravedad, humanBodyTemp, waterBoilingTemp] = constants;

//·2) Desestructurar y asignar los elementos del array de países a fin, est, sw, den, nor:
let [ fin, est, sw, den, nor ] = paises;

//·3) Desestructurar el objeto rectángulo por sus propiedades o keys:
let { width, height, area, perimeter } = rectanguloo;

//Ejercicios NIVEL 2:

//·1) Iterar a través del array de usuarios y obtener todas las keys del objeto utilizando la desestructuración:
for (const {name, scores, skills, age} of users){
  //console.log(name, scores, skills, age)
};
// Brook 75 [ 'HTM', 'CSS', 'JS' ] 16
// Alex 80 [ 'HTM', 'CSS', 'JS' ] 18
// David 75 [ 'HTM', 'CSS' ] 22
// John 85 [ 'HTML' ] 25
// Sara 95 [ 'HTM', 'CSS', 'JS' ] 26
// Martha 80 [ 'HTM', 'CSS', 'JS' ] 18
// Thomas 90 [ 'HTM', 'CSS', 'JS' ] 20

//·2) Encuentra las personas que tienen menos de dos habilidades:
for (const {name, skills} of users){
  //if(skills.length < 2) console.log(`Usuario con menos skill: ${name}`)
};

//Ejercicios NIVEL 3:

//Desestructure la siguiente matriz nombre a nombre, array de habilidades a habilidades, array de puntuaciones a puntuaciones, puntuación de JavaScript a jsScore y puntuación de React a reactScore variable en una línea.
//const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
//const [namee, skills, [jsScore, reactScore]] = student;
//console.log(namee, skills.length, skills, jsScore, reactScore) -> David 4 [ 'HTM', 'CSS', 'JS', 'React' ] 98 85

//Escribe una función llamada convertArrayToObject que pueda convertir el array en un objeto estructurado:
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

const convertArrayToObject = (arr) => {
  const result = {};

  arr.forEach(array => {
    const [name, skills, scores] = array;
    result[name] = { name, skills, scores };
  });

  return result;
};
//console.log(convertArrayToObject(students))

//·Copie el objeto estudiante a newStudent sin mutar el objeto original. En el nuevo objeto añade lo siguiente:
const student = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};
const newStudent = {...student};
// Añadir Bootstrap con el nivel 8 a los conjuntos de habilidades de front end
newStudent.skills.frontEnd.push({ skill: 'Bootstrap', level: 8});
// Añadir Express con nivel 9 a los conjuntos de habilidades del back end
newStudent.skills.backEnd.push({ skill: 'Express', level: 9});
// Añadir SQL con nivel 8 a los conjuntos de habilidades de la base de datos
newStudent.skills.dataBase.push({ skill: 'SQL', level: 8});
// Añadir SQL sin nivel a los conjuntos de habilidades de ciencia de datos
newStudent.skills.dataScience.push('SQL');
//console.log(newStudent)

