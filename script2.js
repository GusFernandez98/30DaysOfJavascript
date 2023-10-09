//Ejercicio 1

// let edadUsuario = prompt('Ingresa tu edad');
// let edadAutorizada = 18;
// let resto = edadAutorizada - edadUsuario;

//Agregue caso para edades mayores.
//if (edadUsuario >= 90) alert (`Debe presentar apto medico para continuar`)
//El ejercicio pedia solo estos:
// else if (edadUsuario > edadAutorizada) alert (`Tienes la edad suficiente para manejar`);
// else if (edadUsuario < edadAutorizada) alert (`Te falta ${resto} años para manejar`);

// con ternario: 
// edadUsuario > edadAutorizada
// ? alert('Tienes la edad suficiente para manejar')
// : alert(`Te faltan ${resto} años para manejar`)


//Ejercicio 2:

// let myAge = 25;
// let yourAge = Number(prompt('Ingresa tu edad'));
// let diff =  yourAge - myAge;
// let diffMayor = myAge - yourAge;

// if (myAge === yourAge) alert ('Que coincidencia! Tenemos la misma edad.');
// else if (myAge > yourAge) alert (`Soy ${diffMayor} años mayor que tú`);
// else if (myAge < yourAge) alert (`Eres ${diff} años mayor que yo.`)


//Ejercicio 3
// let ingresaNum = Number(prompt('ingres un número'));

// if(ingresaNum % 2 === 0) alert (`${ingresaNum} Es un número par!`);
// else alert (`${ingresaNum} Es un número impar!`)

//NIVEL 2:
//Ejercicio 2:

// let estacion = prompt('Ingresar Mes para saber que temporada es.')//.charAt(0).toUpperCase().slice(1).toLowerCase(); -> asi no funciona, no puede ir slice despues del upper.
// //A los dias -> obtengo el primer caracter y lo convierto en MAYUS.
// //Corto en la posicion 1 y le indico que se va a convertir en minus.
// estacion = estacion.charAt(0).toUpperCase() + estacion.slice(1).toLowerCase();
// if( estacion === 'Diciembre' || estacion ==='Enero'  || estacion ==='Febrero') {
//     estacion = 'Verano!'
//     alert (`La temporada es ${estacion}`);}
// else if( estacion === 'Septiembre' || estacion ==='Octubre' || estacion ==='Noviembre') alert (`La temporada es ${estacion = 'Primavera!'}`);
// else if( estacion === 'Marzo' || estacion ==='Abril' || estacion ==='Mayo') alert (`La temporada es ${estacion = 'Otoño!'}`);
// else if( estacion === 'Junio' || estacion ==='Julio' || estacion ==='Agosto') alert (`La temporada es ${estacion = 'Invierno!'}`);

//Ejercicio 3:

// let dias = prompt('Ingresar un dia de la semana');

// if (dias === 'lunes' || dias === 'martes' || dias === 'miercoles' || dias === 'jueves' || dias === 'viernes') alert (`El ${dias} es dia laboral`);
// else if (dias === 'sabado' || dias === 'domingo') alert (`El ${dias} es fin de semana`);


//Ejercicio 4:
let mes = prompt('Ingresa un mes');
mes = mes.toLowerCase(); // -> Para no tener problemas con las mayusculas.

switch (mes) {
    case 'enero':
    case 'marzo':
    case 'mayo':
    case 'julio':
    case 'agosto':
    case 'octubre':
    case 'diciembre':
        alert(`${mes} tiene 31 dias.`)
        break;
    
    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
        alert(`${mes} tiene 30 dias.`)
        break;
    
    case 'febrero':
        alert(`${mes} tiene 28 o 29 dias, dependiendo del año`)
        break;

    default:
        alert('Mes no valido')
        break;
};
