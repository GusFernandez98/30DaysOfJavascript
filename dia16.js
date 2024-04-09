// ·JSON -> JavaScript Object Notation (Notación de objetos de JavaScript)
//La sintaxis es un objeto de js, pero el formato es sólo de texto o cadena.
//JSON es un formato de datos ligeros para almacenar y transportar, se utiliza sobre todo cuando se envían datos de un servidor a un cliente.
//Ejemplo:
// {
//     "users":[
//       {
//         "firstName":"Asabeneh",
//         "lastName":"Yetayeh",
//         "age":250,
//         "email":"asab@asb.com"
//       },
//       {
//         "firstName":"Alex",
//         "lastName":"James",
//         "age":25,
//         "email":"alex@alex.com"
//       },
//       {
//       "firstName":"Lidiya",
//       "lastName":"Tekle",
//       "age":28,
//       "email":"lidiya@lidiya.com"
//       }
//     ]
// }
//·La diferencia es que la clave de un objeto JSON debe ir con comillas dobles o debe ser una cadena.
//Ejemplo:
// {
//     "Alex": {
//         "email": "alex@alex.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 30
//     },
//     "Asab": {
//         "email": "asab@asab.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Redux",
//             "MongoDB",
//             "Express",
//             "React",
//             "Node"
//         ],
//         "age": 25,
//         "isLoggedIn": false,
//         "points": 50
//     },
//     "Brook": {
//         "email": "daniel@daniel.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Redux"
//         ],
//         "age": 30,
//         "isLoggedIn": true,
//         "points": 50
//     },
//     "Daniel": {
//         "email": "daniel@alex.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Python"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     },
//     "John": {
//         "email": "john@john.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Redux",
//             "Node.js"
//         ],
//         "age": 20,
//         "isLoggedIn": true,
//         "points": 50
//     },
//     "Thomas": {
//         "email": "thomas@thomas.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     },
//     "Paul": {
//         "email": "paul@paul.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "MongoDB",
//             "Express",
//             "React",
//             "Node"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     }
// }

//  ·Convertir JSON en objeto JavaScript -> la palabra clave JSON tiene los métodos parse() y stringify().
//·.parse() -> Cuando se quiere cambiar el JSON a un objeto.
//·.stringify() -> Cuando se quiere pasar el objeto a JSON.

//JSON.parse(json[, reviver])
// json or text , los datos
//reviver es una función opcional de callback
/* JSON.parse(json, (key, value) => {

})
*/

const usersTexxt = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`;
//const objUser = JSON.parse(usersText, undefined, 4)
//console.log(objUser)

//  ·Uso de una función de recuperación con JSON.parse()
//Para utilizar la fn reviver como formateador, se pone la clave que quiero para formatear el valor del nombre y del apellido.
//En resumen estoy interesado en formatear el nombre y apellido de los datos JSON.
const usersText = `{
  "users":[
    {
      "firstName":"Asabeneh",
      "lastName":"Yetayeh",
      "age":250,
      "email":"asab@asb.com"
    },
    {
      "firstName":"Alex",
      "lastName":"James",
      "age":25,
      "email":"alex@alex.com"
    },
    {
    "firstName":"Lidiya",
    "lastName":"Tekle",
    "age":28,
    "email":"lidiya@lidiya.com"
    }
  ]
  }`;

const useObj = JSON.parse(usersText, (key, value) => {
  let newValue = typeof value == 'string' && key != 'email' ? value.toUpperCase() : value; //-> nombres en mayus
  return newValue;
});
//console.log(useObj)

//  ·Conversión de objetos a JSON:
//Se utiliza JSON.stringify() -> Toma un parametro obligatorio y dos opcionales.
//Replacer se utiliza como filtro y space es una identación, si no quiero filtrar ninguna clave se puede pasar undefined.
//JSON.stringify(obj, replacer, space);
// json or text , los datos
// reviver es una función opcional de callback

const usuarios = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

const txt = JSON.stringify(usuarios, undefined, 4);
//console.log(txt) -> text significa JSON- porque json es una forma de cadena de un objeto.

//  ·Usando un filtro de array con JSON.stringify:
//Replace como filtro:
const user = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  country: "Finland",
  city: "Helsinki",
  email: "alex@alex.com",
  skills: ["HTML", "CSS", "JavaScript", "React", "Python"],
  age: 250,
  isLoggedIn: false,
  points: 30,
};

const userOne = JSON.stringify(
  user,
  ["firstName", "lastName", "country", "city", "age"], //-> filtre solo esta info
  4
);
//console.log(userOne)

//  EJERCICIOS:

//·1) Cambiar el array de habilidades a JSON usando JSON.stringify():
const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
const skillsConvert = JSON.stringify(skills, undefined, 4);
// console.log(skillsConvert)
// [
//     "HTML",
//     "CSS",
//     "JS",
//     "React",
//     "Node",
//     "Python"
// ]

//·2) Stringify la variable de la edad:
let age = 250;
const ageConvert = JSON.stringify(age);
//console.log(ageConvert) -> 250 se convierte en una cadena JSON.

//·3) Stringify la variable isMarried:
let isMarried = true;
const marriedConvert = JSON.stringify(isMarried);
//console.log(marriedConvert)

//·4) Stringify el objeto estudiante:
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
}
const studentConvert = JSON.stringify(student, undefined, 4)
// console.log(studentConvert)
// {
//     "firstName": "Asabeneh",
//     "lastName": "Yetayehe",
//     "age": 250,
//     "isMarried": true,
//     "skills": [
//         "HTML",
//         "CSS",
//         "JS",
//         "React",
//         "Node",
//         "Python"
//     ]
// }

//  ·Ejercicios Nivel 2
//·1) Stringify el objeto estudiantes con sólo las propiedades firstName, lastName y skills:
const studentFilter = JSON.stringify(
  student,
  ["firstName", "lastName", "skills"],
  4
  );
//console.log(studentFilter)
//   {
//     "firstName": "Asabeneh",
//     "lastName": "Yetayehe",
//     "skills": [
//         "HTML",
//         "CSS",
//         "JS",
//         "React",
//         "Node",
//         "Python"
//     ]
// }