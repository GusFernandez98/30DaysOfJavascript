/*
Condicionales:
·Las declaraciones condicionales se utilizan para tomar decisiones basadas en diferentes condiciones.

·if: (palabra clave) Se utiliza para verificar si una condicion es true y ejecutar el bloque de codigo.
-> if (condicion) {
    bloque a ejecutar si es true.
}

·If Else: si la codicion no es true, se ejecuta la condicion else.
-> if (condicion) {
    bloque a ejecutar si es true
}
else {
    se ejecuta cuando la condicion es false.
}

·Else if: Se utiliza cuando tenemos multiples condiciones.
-> if (condicion1) {
    bloque de codigo
}
else if (condicion2) {
    bloque de codigo
}
else {
    ulitmo bloque
}

·Switch (alternativa del if, else if)
·Comienza con palabra clave switch, seguido de parentesis y bloque de codigo.
·El bloque de codigo se ejecuta si el valor del parentesis de la declaracion de cambio coincide 
con el valor del caso.
·Break termina la ejecucion.
·Default se ejecuta si todos los casos no cumplen la condicion.

switch (condicion) {
    case1:
    codigo...
    break

    case2:
    codigo...
    break

    case3:
    codigo...
    break;

    default:
        console.log('No coindice nada')
};

·Ternario
si la primera no es true, se ejecuta la segunda.
let rain = true;
rain 
? console.log('Salir con paraguas')
: console.log('No es necesario') 
*/

//Ejercicio 1:
// ·logica para consologuear
let edadUsu= 10;
let edadAuto = 18;
let faltante = edadAuto - edadUsu;

// if(edadUsu > edadAuto) return console.log('Tiene la edad suficiente para conducir');
// else if(edadUsu< edadAuto) return console.log(`Faltan ${faltante}`);

//Logica para un if, con info recibida de usuario
//let edadUsuario = prompt('Ingresa tu edad');
// let edadAutorizada = 18;
// let resto = edadAutorizada - edadUsuario;

// if (edadUsuario > edadAutorizada) {
//      alert (`Tienes la edad suficiente para manejar`);
//     }
// else if (edadUsuario < edadAutorizada) {
//     alert (`Faltan ${resto} años para manejar`)
// }
// con ternario: 
// edadUsuario > edadAutorizada
// ? alert('Tienes la edad suficiente para manejar')
// : alert(`Te faltan ${resto} años para manejar`)

//Ejercicio 2:

let myAge = 25;
let yourAge = 15;
let diff = yourAge - myAge;
//console.log(diff)

// if (myAge === yourAge) return console.log(`Que coincidencia, tenemos la misma edad`);
// else if (myAge > yourAge) return console.log('Soy mayor que tu');
// else if (myAge < yourAge) return console.log(`Eres ${diff} años mayor que yo.`)

// let myAge = 25;
// let yourAge = Number(prompt('Ingresa tu edad'));
// let diff =  yourAge - myAge;
// let diffMayor = myAge - yourAge;

// if (myAge === yourAge) alert ('Que coincidencia! Tenemos la misma edad.');
// else if (myAge > yourAge) alert (`Soy ${diffMayor} años mayor que tú`);
// else if (myAge < yourAge) alert (`Eres ${diff} años mayor que yo.`)


//Ejercicio 3
let a = 4;
let b = 3;

// if (a > b) return console.log(`'a' es mayor que 'b'`);
// else return console.log(`'a' es menor a 'b'`);

// a > b 
// ? console.log(`'a' es mayor que 'b'`)
// : console.log(`'a' es menor a 'b'`)


//Ejercicio 4
//Par -> son divisibles por dos. Para saber se calcula que el resto al divir por 2, tiene que dar 0. -> % 2 === 0.
// let numA = 7;
// if (numA % 2 === 0) return console.log('Es par!');
// else return console.log('Es impar')


//Ejercicios Nivel 2:

//Ejercicio 1:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let calificacion = 79;

if (calificacion >= 80 && calificacion <= 100 ) calificacion = 'A';
else if (calificacion >= 70 && calificacion <= 89) calificacion = 'B';
else if (calificacion >= 60 && calificacion <= 69) calificacion = 'C';
else if (calificacion >=59 && calificacion <= 59) calificacion = 'D';
else if (calificacion >=0 && calificacion <= 49) calificacion = 'F';
else calificacion = 'no valido';

//console.log(`Calificación del estudiante: ${calificacion}`);

//Ejercicio 2
// Consulta si la temporada es Otoño, Invierno, Primavera o Verano. Si la entrada del usuario es:
// Septiembre, Octubre o Noviembre, la temporada es Primavera.
// Diciembre, Enero o Febrero, la temporada es Verano.
// Marzo, Abril o Mayo, la temporada es Otoño
// Junio, Julio o Agosto, la temporada es Invierno.

let estacion;
if( estacion === 'Diciembre' || estacion ==='Enero'  || estacion ==='Febrero') estacion = 'Verano!';
else if( estacion === 'Septiembre' || estacion ==='Octubre' || estacion ==='Noviembre') estacion = 'Primavera! ';
else if( estacion === 'Marzo' || estacion ==='Abril' || estacion ==='Mayo') estacion = 'Otoño';
else if( estacion === 'Junio' || estacion ==='Julio' || estacion ==='Agosto') estacion = 'Invierno';

// console.log(`La temporada es ${estacion}`);

//Ejercicio 3
// let dias = 'jueves';

// if (dias === 'lunes' || dias === 'martes' || dias === 'miercoles' || dias === 'jueves' || dias === 'viernes') console.log(`El ${dias} es dia laboral`);
// else if (dias === 'sabado' || dias === 'domingo') console.log(`El ${dias} es fin de semana`);


//Ejercicio 4:
let mes = 'enero';

switch (mes) {
    case 'enero':
    case 'marzo':
    case 'mayo':
    case 'julio':
    case 'agosto':
    case 'octubre':
    case 'diciembre':
        console.log(`${mes} tiene 31 dias`);
        break;
        
    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
        console.log(`${mes} tiene 30 dias`)
        break;

    case 'febrero':
        console.log(`${mes} tiene 28 o 29 dias, eso depende del año`)

    default:
        console.log('Mes no valido!');
        break
};


