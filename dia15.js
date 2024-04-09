//  ·CLASES
//la clase permite crear muchos objetos. Esto ayuda a reducir la cantidad de código y la repetición del mismo.

/*
·Definir una clase:
Necesitamos la palabra clave -> class, el nombre de una clase en CamelCase y bloque de codigo (dentro de dos corchetes).
sintaxis:
class NombreDeClase {
    bloque de codigo
};
*/
//Ejemplo:
//class Person {
    //el codigo
//};

//·Instanciar clases:
//Significa crear un objeto a partir de una clase. Se necesita la palabra clave -> New
//y llamar al nombre despues de la palabra new.
//Creacion de objeto persona a partir de la clase Persona:
//const person = new Person();
//console.log(person) -> Person {} -> he creado un objeto persona. Como la clase aún no tiene propiedades, el objeto también está vacío.

/*
·Constructor: (se usa el constructor de la clase para pasar diferentes propiedades a la clase)
La funcion constructora comienza con la palabra clave -> constructor, seguida de parentesis. Dentro del parentesis se pasá
la propiedad del objeto como parametro. Utiliza la palabra clave -> this, para adjuntar los parametros del constructor con la clase.

·El siguiente constructor de la clase Persona tiene las propiedades firstName y lastName.
Estas propiedades se adjuntan a la clase Persona utilizando la palabra clave this. this se refiere a la propia clase:
*/
// class Person {
//     constructor (firstName, lastName, age, country, city) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.country = country;
//         this.city = city;
//     }
// };

//const person = new Person();
//console.log(person);
//Person { firstName: undefined, lastName: undefined }

//·Todas las claves del objeto son undefined. Siempre que instanciemos debemos pasar el valor de las propiedades:
//const person1 = new Person("Luis", "Gustavo");
//console.log(person1) -> Person { firstName: 'Luis', lastName: 'Gustavo' }

//·una vez que creamos una clase podemos crear muchos objetos utilizando la clase. Ahora se puede crear muchos objetos persona utilizando la clase Persona:
//const person2 = new Person("Lidiya", "Tekle");
//const person3 = new Person("Abraham", "Yetayeh");
//console.log(person2) -> Person { firstName: 'Lidiya', lastName: 'Tekle' }
//console.log(person3) -> Person { firstName: 'Abraham', lastName: 'Yetayeh' }

//·añado más propiedades a la clase:
//const updatePerson1 = new Person("Luis", "Gustavo", 25, "Argentina", "San Luis");
//console.log(updatePerson1);
//Person {
//     firstName: 'Luis',
//     lastName: 'Gustavo',
//     age: 25,
//     country: 'Argentina',
//     city: 'San Luis'
//};

//·Valores por defecto con el constructor:
// class Person {
//     constructor(
//       firstName = "Asabeneh",
//       lastName = "Yetayeh",
//       age = 250,
//       country = "Finland",
//       city = "Helsinki"
//     ) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.age = age;
//       this.country = country;
//       this.city = city;
//     }
// }
// const person1 = new Person(); // tomará el valor por defecto values
// const person2 = new Person("Lidiya", "Tekle", 28, "Finland", "Espoo");
// console.log(person1);
// console.log(person2);

//·Metodos de clase
//En una clase podemos crear métodos de clase. Los métodos son funciones de JavaScript dentro de la clase:
// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//   }
//   getFullName() {
//     const fullName = `${this.firstName} ${this.lastName}`;
//     return fullName;
//   }
// }
// const person1 = new Person("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
//console.log(person1.getFullName()); -> Asabeneh Yetayeh

//·Propiedades con valor inicial:
// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//     this.score = 0;
//     this.skills = [];
//   }
//   getFullName() {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   }
// }
// const person1 = new Person("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
// const person2 = new Person("Lidiya", "Tekle", 28, "Finland", "Espoo");
// console.log(person1.score); -> 0
// console.log(person2.score); -> 0
// console.log(person1.skills); -> []
// console.log(person2.skills); -> []

//  ·GETTER:
//Nos permite acceder al valor del objeto. Escribimos un método get utilizando la palabra clave get seguida de una función
// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//     this.score = 0;
//     this.skills = [];
//   }
//   getFullName() {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   }
//   get getScore() {
//     return this.score;
//   }
//   get getSkills() {
//     return this.skills;
//   }
// }
// const person1 = new Person("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
// const person2 = new Person("Lidiya", "Tekle", 28, "Finland", "Espoo");
//console.log(person1.getScore); -> 0 -> No necesitamos paréntesis para llamar a un método getter
//console.log(person2.getScore); -> 0

//  ·SETTER
//Nos permite modificar el valor de ciertas propiedades. Escribimos un método setter utilizando la palabra clave set seguida de una función:
// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//     this.score = 0;
//     this.skills = [];
//   }
//   getFullName() {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   }
//   get getScore() {
//     return this.score;
//   }
//   get getSkills() {
//     return this.skills;
//   }
//   set setScore(score){
//     this.score += score;
//   }
//   set setSkill(skill){
//     this.skills.push(skill)
//   }
// }
// const person1 = new Person("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
// const person2 = new Person("Lidiya", "Tekle", 28, "Finland", "Espoo");

// person1.setScore = 1;
// person1.setSkill = "HTML";
// person1.setSkill = "CSS";
// person1.setSkill = "JavaScript";

// person2.setScore = 1;
// person2.setSkill = "Planning";
// person2.setSkill = "Managing";
// person2.setSkill = "Organizing";

// console.log(person1.score); 1
// console.log(person2.score); 1
// console.log(person1.skills); [ 'HTML', 'CSS', 'JavaScript' ]
// console.log(person2.skills); [ 'Planning', 'Managing', 'Organizing' ]

//  ·Método Static:
//Define un método estatico para una clase. No se llaman en las instancias de la clase.
//se trata de funciones de utilidad, como las funciones para crear o clonar:

// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//     this.score = 0;
//     this.skills = [];
//   }
//   getFullName() {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   }
//   get getScore() {
//     return this.score;
//   }
//   get getSkills() {
//     return this.skills;
//   }
//   set setScore(score) {
//     this.score += score;
//   }
//   set setSkill(skill) {
//     this.skills.push(skill);
//   }
//   getPersonInfo() {
//     let fullName = this.getFullName();
//     let skills =
//       this.skills.length > 0 &&
//       this.skills.slice(0, this.skills.length - 1).join(", ") +
//         ` and ${this.skills[this.skills.length - 1]}`;

//     let formattedSkills = skills ? `He knows ${skills}` : "";

//     let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
//     return info;
//   }
//   static favoriteSkill() {
//     const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"];
//     const index = Math.floor(Math.random() * skills.length);
//     return skills[index];
//   }
//   static showDateTime() {
//     let now = new Date();
//     let year = now.getFullYear();
//     let month = now.getMonth() + 1;
//     let date = now.getDate();
//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     if (hours < 10) {
//       hours = "0" + hours;
//     }
//     if (minutes < 10) {
//       minutes = "0" + minutes;
//     }

//     let dateMonthYear = date + "." + month + "." + year;
//     let time = hours + ":" + minutes;
//     let fullTime = dateMonthYear + " " + time;
//     return fullTime;
//   }
// }

// console.log(Person.favoriteSkill());
// console.log(Person.showDateTime());


//  ·Herencia:
//Utilizando herencia se puede acceder a todas las propiedades y métodos de la clase padre. Esto reduce la repeticion de codigo.
//sintaxis:
// class childClassName extends {
//  codigo...
// };

// class Student extends Person {
//   saySomething() {          ·funcion que se encuentra en la clase padre
//     console.log("I am a child of the person class");
//   }
// }

// const s1 = new Student("Asabeneh", "Yetayeh", "Finland", 250, "Helsinki");
// console.log(s1);
// console.log(s1.saySomething());
// console.log(s1.getFullName());
// console.log(s1.getPersonInfo());

//  ·Anulacion de metodo
//La clase Persona no tenía género pero ahora vamos a dar la propiedad género para la clase hija, Student.
//Si se utiliza el mismo nombre de método en la clase hija, se anulará el método padre.

// class Student extends Person {
//   constructor(firstName, lastName, age, country, city, gender) {
//     super(firstName, lastName, age, country, city);
//     this.gender = gender;        <----- esto es lo nuevo
//   }

//   saySomething() {
//     console.log("I am a child of the person class");
//   }
//   getPersonInfo() {
//     let fullName = this.getFullName();
//     let skills =
//       this.skills.length > 0 &&
//       this.skills.slice(0, this.skills.length - 1).join(", ") +
//         ` and ${this.skills[this.skills.length - 1]}`;

//     let formattedSkills = skills ? `He knows ${skills}` : "";
//     let pronoun = this.gender == "Male" ? "He" : "She";

//     let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`;
//     return info;
//   }
// }

// const s1 = new Student(
//   "Asabeneh",
//   "Yetayeh",
//   250,
//   "Finland",
//   "Helsinki",
//   "Male"
// );
// const s2 = new Student("Lidiya", "Tekle", 28, "Finland", "Helsinki", "Female");
// s1.setScore = 1;
// s1.setSkill = "HTML";
// s1.setSkill = "CSS";
// s1.setSkill = "JavaScript";

// s2.setScore = 1;
// s2.setSkill = "Planning";
// s2.setSkill = "Managing";
// s2.setSkill = "Organizing";

// console.log(s1);

// console.log(s1.saySomething());
// console.log(s1.getFullName());
// console.log(s1.getPersonInfo());

// console.log(s2.saySomething());
// console.log(s2.getFullName());
// console.log(s2.getPersonInfo());

// · Ejercicios Nivel 1
//·Crea una clase de Animal. La clase tendrá propiedades de nombre, edad, color, piernas y creará diferentes métodos.
class Animal {
  constructor (nombre, edad, color) {
    this.nombre = nombre;
    this.edad = edad;
    this.color = color;
  }
  nameOfPet() {
    const fullName = `El nombre de mi mascota es: ${this.nombre} y la quiero mucho! <3`;
    return fullName
  }
}
const myPet = new Animal("Lucy", 12, "black & brown")
//console.log(myPet) -> Animal { nombre: 'Lucy', edad: 12, color: 'black & brown' }
//console.log(myPet.nameOfPet()) -> El nombre de mi mascota es: Lucy y la quiero mucho! <3

//·Cree una clase hijo de Perro y Gato a partir de la Clase Animal.
class perro extends Animal {
  myPetIs(){
    return 'My Pet is dog'
  }
};
const newAni = new perro("Lucy", 12, "black & brown")
// console.log(newAni.myPetIs()) -> My Pet is dog
// console.log(newAni.nameOfPet())  -> El nombre de mi mascota es: Lucy y la quiero mucho! <3

class gato extends Animal {
  myPetIs(){
    return 'My pet is cat'
  }
}
const newAni2 = new gato("michi", 8, "orange");
// console.log(newAni2.myPetIs()) -> My pet is cat
// console.log(newAni2.nameOfPet()) -> El nombre de mi mascota es: michi y la quiero mucho! <3