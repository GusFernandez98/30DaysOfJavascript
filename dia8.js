/***                                                              DAY 8 - Object                                                                   ***/
/*Scope -> Es el alcance que tienen las variables (var, let, const), pueden ser:
·Global.
·Local.
·Las variables pueden ser declaradas en un scope global o local, cualquier cosa declarada con sin var,let o const tiene alcance global.
a = "JavaScript"; // declarar una variable sin let o const la hace disponible en el objeto window y esta se encuentra en cualquier lugar.

·Global scope:
una variable declarada globalmente puede ser accedida de cualquier parte del mismo archivo.
El termino global puede ser relativo: a) global al archivo      b)global relativo al bloque de codigo
*/
//scope.js
let a = "JavaScript"; // es un scope global que se encontrará en cualquier parte de este archivo
let b = 10; // es un scope global que se encontrará en cualquier parte de este archivo
function letsLearnScope() {
//  console.log(a, b); // JavaScript 10 (consologuea a y b que estan fuera de la fn)
  if (true) {
    let a = "Python";
    let b = 100;
//    console.log(a, b); // Python 100
  }
//  console.log(a, b);
}
letsLearnScope();
//console.log(a, b); // JavaScript 10 (consologuea a y b del principio)

//·Local scope:
//Una variable declarada como local, sólo puede ser accedida en determinados bloques de código.
//scope.js
let aa = "JavaScript"; // es un scope global
let bb = 10; // es un scope global 
// Scope de la función
function letsLearnScope() {
//  console.log(a, b); // JavaScript 10, accesible
  let value = false;
  // Scope del bloque (LOCAL)
  if (true) {
    // podemos acceder desde la función y fuera de la función pero
    // las variables declaradas dentro del if no serán accesibles fuera del bloque if
    let a = "Python";
    let b = 20;
    let c = 30;
    let d = 40;
    value = !value;
//    console.log(a, b, c, value); // Python 20 30 true (imprime las var LOCAL)
  }
  // no podemos acceder a c porque el scope de c es sólo el bloque if
//  console.log(a, b, value); // JavaScript 10 true (global)
}
letsLearnScope();
//console.log(a, b); // JavaScript 10, accesible (global)
//·Cuando usamos let nuestra variable tiene alcance de bloque.
//·El ámbito let y const es el mismo. La diferencia es sólo la reasignación. No podemos cambiar o reasignar el valor de la variable const.


//·Objeto: Estructura de datos que agrupa datos y funciones relacionadas en un solo lugar.
//Por lo que un objeto es un par de clave y valor. key -> value
//·Obj vacio:
const objVacio = {};
//·Obj con valores:
const objConInfo = {
  //key         value
  firstName: 'Luis Gustavo',
  lastName: 'Fernandez',
  age: 25,
  country: 'Argentina',
  city: 'San Luis',
  skill: [
    'html', 'css3', 'javascript', 'react', 'nodejs', 'postgresql'
  ]
}
//·Obtener valores del objeto:
//a) usando nombre del objeto . (punto) seguido del nombre de la clave.
//b) usando corchetes y comillas.
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
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`; //Este this se refiere al objeto person, para no estar repitiendo... varia dependiendo del scope en donde se encuentre.
  },
  "phone number": "+3584545454545",
};
//·Accediendo con . :
// console.log(person.country); -> Finland
// console.log(person.city); -> Helsinki
// console.log(person.skills[2]) -> JavaScript

//·accediendo con ['']:
// console.log(person['age']); -> 250
// console.log(person['phone number']) -> +3584545454545
// console.log(person['skills'][3]) -> React

/*
·Mètodos de objetos:
·getFullName es una funcion dentro del objeto y se llama método de objeto.
·La palabra this se refiere al mismo objeto (en este caso this === Obj: Person), la podemos utilizar para acceder a los valores
de diferentes propiedades del objeto.
·No se puede utilizar arrow function como método de objeto. 
*/ 

//·Establecer una nueva clave para un objeto:
//·Un obj es una estructura de datos mutable y se puede modificar el contenido después de su creación:
//·Objeto creado:
const personB = {
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
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

//·Cambio de datos en el objeto personB creado arriba:
personB.nationality = "Ethiopian";
personB.country = "Finland";
personB.title = "teacher";
personB.skills.push("Meteor");
personB.skills.push("SasS");
personB.isMarried = true;

//·Se agrega un nuevo método al objeto: //Los this de esta fn hacen referencia al objeto personB.
personB.getPersonInfo = function () {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(", ");
  let lastSkill = this.skills.splice(this.skills.length - 1)[0];

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
  let fullName = this.getFullName();
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
  return statement;
};
// console.log(personB);
// console.log(personB.getPersonInfo());

//·Métodos para manipular un objeto:

//a) Object.assign -> Para copiar un objeto sin modificar el objeto original:
const copyObj = Object.assign({}, personB);
//console.log(copyObj)

//b) Object.key() -> para obtener las claves o propiedades del objeto:
const keys = Object.keys(copyObj);
//console.log(keys) -> consologuea todas los claves (nombres)

//c) Objetc.value() -> Para obtener los valores de un objeto como un array
const values = Object.values(copyObj);
//console.log(values) -> consologuea todos los valores (value de la key);

//d) Object.entries() -> Para obtener las claves y valores en un array.
const entries = Object.entries(copyObj);
//console.log(entries) -> Ej: [ 'firstName', 'Asabeneh' ] -> Consologuea todo en arrays

//·Comprobacion de propiedades:
//hasOwProperty -> Para comprobar si una clave o propiedad especifica exite en un objeto.
// console.log(copyObj.hasOwnProperty('age')) -> true (si existe en el objeto)
// console.log(copyObj.hasOwnProperty('name')) -> false (no existe).

//Manipulacion de info
//·Notación de puntos:
//Puedes agregar propiedades al objeto usando la notación de puntos.
//miObjeto.nombre = 'Gus';

//·Notación de corchetes:
//También puedes agregar propiedades utilizando la notación de corchetes.
//miObjeto['nombre'] = 'Gus';

//Puedes usar Object.assign para combinar propiedades en un objeto existente o crear uno nuevo:
//Object.assing(miObjeto, {nombre: 'Gus', edad: 25});
 
/************************************************************************************************************************/
//Ejercicios nivel 1:

//· 1) Crear un objeto vacío llamado dog:
const dog = {};
//· 2) Imprime el objeto dog en la consola:
//console.log(dog) -> {}
//· 3)Añade las propiedades name, legs, color, age y bark para el objeto dog. La propiedad bark es un método que devuelve woof woof
dog.name = 'Lucy';
dog.legs = 4;
dog.color = 'black & brown';
dog.age = 12;
dog.bark = function () {return 'woof woof'};
//· 4)Obtener name, legs, color, age y el valor de bark del objeto dog:
let infoDog = Object.keys(dog);
let fnDog = dog.bark;
// console.log(infoDog) -> [ 'name', 'legs', 'color', 'age', 'bark' ]
// console.log(fnDog) -> [Function (anonymous)]
//· 5) Establecer nuevas propiedades al objeto dog: breed, getDogInfo:
dog.breed = 'Rotwailler';
dog.getDogInfo = function () {};
// console.log(dog); -> Asi queda conformado el objeto dog:
// {
//   name: 'Lucy',
//   legs: 4,
//   color: 'black & brown',
//   age: 12,
//   bark: [Function (anonymous)],
//   breed: 'Rotwailler',
//   getDogInfo: [Function (anonymous)]
// }

//Ejercicios: NIVEL 2

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  IceCube: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

//· 1) Encuentra a la persona que tiene muchas habilidades en el objeto de los usuarios:
let userMaxSkill;
let cantidadMax = 0;
//·bucle for in para recorrer todas las props del objeto
for(let user in users){
  if(users.hasOwnProperty(user)) {  //compruebo si existe la prop
    let userSkill= users[user].skills; //selecciono la prop skills
    let skill = userSkill.length; // longitud del arr de la prop de skills

    if(skill > cantidadMax) { //si el arr es mayor a la variable, se actualizan los valores:
      cantidadMax = skill;  
      userMaxSkill = user // guardo el usuario con mas habbilidades
    }
  }
}
//console.log(`User con mas habilidades: ${userMaxSkill}`);


// ·2) Contar los usuarios conectados, contar los usuarios que tienen más de 50 puntos del siguiente objeto:
let countPoints = 0;
let countConnect = 0;
let noUser50 = true;  //afirmo que no hay user con 50 puntos

for (let user in users){
  if(users.hasOwnProperty(user)){
     if(users[user].points >= 50) {
       countPoints++;
       noUser50 = false   //se cambia a false si hay usuarios con mas de 50 puntos
    } 
    // if (users[user].isLoggedIn) {
    //   countConnect++;
    // }
  }
  }

// if(noUser50){ si es true entra aca, caso contrario va al else:
//   console.log(`No hay usuarios que superen los 50 puntos`)
// } else {
// console.log(`Usuario con mas de 50 puntos: ${countPoints}`);
// }


//·3) Encontrar personas que sean desarrolladores MERN stack del objeto de los usuarios:
const mernDevelopers = [];

for (let stack in users) {
  if (users.hasOwnProperty(stack)){
    const skill = users[stack].skills;
    //verifico si el usuario tiene stack mern:
    if (
      skill.includes('MongoDB') &&
      skill.includes('Express') &&
      skill.includes('React') &&
      skill.includes('Node')
    ) {
      mernDevelopers.push(stack)
    }
  }
};
//console.log('Developers con stack MERN:', mernDevelopers) -> Developers con stack MERN: [ 'IceCube', 'Paul' ]


//·4) Establezca su nombre en el objeto usuarios sin modificar el objeto usuarios original:
//Hago una copia del obj original users:
const newUser = {...users};

//·New Obj, entrada al nuevo obj:
const myName = 'Gustavo';
//agrego props:
newUser[myName] = {
  email: 'gusFer98@gmail.com',
  skills: ['Html', 'css', 'JavaScript', 'React', 'Node', 'Express', 'PostgreSQL'],
  age: 25,
  isLogged: true,
  points: 90
};
//asi queda en nuevo obj:
//console.log(newUser) -> se agrego al final.


//·5) Obtener todas las claves o propiedades del objeto usuarios:
let allKeys = [];

for (let keys in users) {
  if (users.hasOwnProperty(keys)){
    let code = Object.keys(users[keys]);
    allKeys = allKeys.concat(code)
  }
}
//console.log(allKeys) -> [email, skills, age, isLoggendIn, points...]

//·6) Obtener todos los valores del objeto usuarios -> MISMA CODE DE ARRIBA, SOLO SE CAMBIA EL MÉTODO.
let allValue = [];

for (let value in users) {
  if (users.hasOwnProperty(value)){
    let props = Object.values(users[value]);
    allValue = allValue.concat(props)
  }
}
//console.log(allValue); ->   ['alex@alex.com',[ 'HTML', 'CSS', 'JavaScript' ] ,20, false, 30...]

//Ejericios NIVEL 3:
//·1) Crea un objeto literal llamado personAccount.
//Tiene las propiedades firstName, lastName, incomes, expenses y tiene los metodos totalIncome, totalExpense, accountInfo,addIncome, addExpense y accountBalance.
//Incomes es un conjunto de ingresos y su descripción y expenses es un conjunto de ingresos y su descripción.

// const personAccount = {
//   firstName: 'Luis',
//   lastName: 'Fernández',
//   incomes: [],
//   expenses: [],
//   //·Reduce -> método de arr que se utiliza para reducir o acumular los elementos del arr en único valor. 0 -> es el valor inicial
//   //·se utiliza para sumar todos los montos ingresados en el array incomes, retorna el total de ingresos.
//   //·El this hace referencia a personAccount -> el objeto.
//   totalIncome: function() {
//     return this.incomes.reduce((total, incomes) => total + incomes.amount, 0);
//   },

//   //·lo mismo de arriba, solo que retorna el total de gastos:
//   totalExpense: function() {
//     return this.expenses.reduce((total, expenses) => total + expenses.amount, 0);
//   },

// //·Retorna una cadena de texto que contiene informacion de la cuenta (nombre, ingreso y gastos) 
// //·\n -> salto de linea 
//   accountInfo: function() {
//     //·map se utiliza para transformar cada objeto de ingreso y gasto en string y con el join se las concateno
//     let incomeDetails = this.incomes.map(income => `${income.description}: $${income.amount}`);
//     let expenseDetails = this.expenses.map(expense => `${expense.description}: $${expense.amount}`);

//     return `Account Information:\nName: ${this.firstName} ${this.lastName}\nTotal Income: ${incomeDetails.join(', ')}\nTotal Expenses: ${expenseDetails.join(', ')}`
//     //return `Account info:\nName: ${this.firstName} ${this.lastName}\ntotal Income: ${this.incomes}\nTotal Expense: ${this.expenses}`
//   },

// //·Agrega un nuevo ingreso al arr incomes, con la descripcion y la cantidad.
// //·consologuea informacion sobre el nuevo ingreso.
//   addIncome: function(description, amount) {
//     this.incomes.push({description, amount});
//     console.log(`Income added: ${description} - $${amount}`)
//   },

// //·Lo mismo que la fn de arriba, solo que agrega info al arr exprenses
//   addExpense: function(description, amount) {
//     this.expenses.push({description, amount});
//     console.log(`Expense added: ${description} - $${amount}`)
//   },

// //·Calcula el saldo que queda en la cuenta, restando entre los ingresos y los gastos
//   accountBalance: function() {
//     let balance = this.totalIncome() - this.totalExpense() 
//     return `Account balance: ${balance}`
//   },
// };

// personAccount.addIncome('Sueldo', 250000)
// personAccount.addExpense('Alquiler', 60000)
// personAccount.addExpense('impuestos', 10000)

// console.log(personAccount.accountInfo());
// console.log(personAccount.accountBalance());
// Income added: Sueldo - $250000
// Expense added: Alquiler - $60000
// Expense added: impuestos - $10000
// Account Information:
// Name: Luis Fernández
// Total Income: Sueldo: $250000
// Total Expenses: Alquiler: $60000, impuestos: $10000
// Account balance: 180000


//un array, dentro contiene un objeto con info de usuarios
const usuarios = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

//·Imagina que estás obteniendo la colección de usuarios anterior de una base de datos MongoDB. 
// a) Crear una función llamada signUp que permita al usuario añadirse a la colección,
//si el usuario existe, informar al usuario que ya tiene una cuenta.
// b) Crear una función llamada signIn que permita al usuario iniciar sesión en la aplicación



//Fn para generar id unico:
const generateUniqueId = () => Math.random().toString(36).substring(2, 6);

//Fn para el tiempo actual:
const getCurrentTimeStap = () => {
  const now = new Date();
  const formato = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
  return formato;
}

//·Fn para crear nuevo usuario:
const signUp = (userName, email, password) => {
//verifico si el correo esta en uso:
//·some -> método de arr, se utiliza para verificar si al menos un elemento del array coincide con cierta condicion:
const emailExists = usuarios.some(user => user.email === email);

if (emailExists){
  console.log('El correo electronico ya esta en uso. Por favor, elija otro');
  return;
}

//generador id:
const newId = generateUniqueId();

//nuevo usuario (nuevo Obj)
const newUser = {
  _id: newId,
  userName,
  email,
  password,
  createdAt: getCurrentTimeStap(),
  isLoggedIn: false
}

//Agregar nuevo usuario al arr usuarios:
usuarios.push(newUser);

console.log('¡Registro exitoso!\n');
console.log('Nuevo usuario:', newUser);
};

signUp('Luis F',"gus@fer", "lloWorld23")
//console.log(usuarios)