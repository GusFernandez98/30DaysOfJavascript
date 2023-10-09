// ·METODO SPLIT:
let desc = 'Argentina esta en america';
let mundi = 'Argentina';
//console.log(mundi.split()); lo convirtio en array -> ['Argentina']
//console.log(mundi.split("")) dividio el array en cada letra -> ['A', 'r', 'g','e', 'n', 't''i', 'n', 'a']
//console.log(desc.split(' ')); en cada espacio divide a la string en comas -> [ 'Argentina', 'esta', 'en', 'america' ]
let mundis = 'Argentina, Brasil, Uruguay';
//console.log(mundis.split(',')) divide donde esta la coma -> [ 'Argentina', ' Brasil', ' Uruguay' ]
//console.log(mundis.split(', ')) [ 'Argentina', 'Brasil', 'Uruguay' ]

// ·METODO UPPERCASE
//console.log(mundis.toUpperCase()) ARGENTINA, BRASIL, URUGUAY

// ·METODO LOWERCASE
//console.log(mundis.toLowerCase()); argentina, brasil, uruguay

//  ·METODO INCLUDES:
let string = "30 Days Of JavaScript";
// console.log(string.includes('Days')); True -> contiene la palabra days.
// console.log(string.includes('days'));  False -> distingue entre mayúsculas y minúsculas.

// ·METODO REPLACE: reemplaza una string por otra, se debe pasar por argumento lo que se va a reemplazar.
//console.log(string.replace('Days', 'Hours')) 30 Hours Of JavaScript

// ·Metodo CHARAT: le doy un indice y me devuelve el valor que se encontraba ahi.
//console.log(string.charAt(3)) -> D

// ·METODO CHARCODEAT: le doy un indice y devuelve el codigo char de valor que se encontraba en el indice.
//console.log(string.charCodeAt(3)) D -> 68

// ·METODO CONCAT -> une los strings que le paso por argumento, con el existente en la variable.
let saludo = 'Hola'; 
//console.log(saludo.concat('Soy', 'Gustavo')); HolaSoyGustavo

// ·METODO indexOf(): 
//Toma una subcadena y si la subcadena existe en una cadena, devuelve la primera posición de la subcadena; si no existe, devuelve -1

/* ·Cambio del tipo de datos
Casting: Conversión de un tipo de datos a otro tipo de datos. 
    ·parseInt()
    ·parseFloat()
    ·number()
    ·+sign
    ·str()
Cuando hacemos operaciones aritméticas, los números de cadena deben convertirse primero en enteros o flotantes.
*/

//·ParseInt()
//let num = "100";
//let cambio = parseInt(num); //string '100' paso a number -> 100.
//console.log(cambio)

//·Number()
//let str = '200';
//let change = Number(str); //string '200' paso a number -> 200.
//console.log(change); 

// signo +
//let ej = '300'
//let cha = +ej; //string '300' paso a number -> 300.
//console.log(cha);

/* ****************************************************************************************************************** */
// EJERCICIOS!

let desafio = '30 days of JavaScript';
let int = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let oracion = 'No puedes terminar una oración con porque porque porque es una conjunción';
//console.log(desafio.repeat(2))
/*Metodo      ----       Resultado */
//·4) length - 21
//·5) toUpperCase() - 30 DAYS OF JAVASCRIPT
//·6) toLowerCase() - 30 days of javascript
//·7) substring(0, 21) -  days of JavaScript (corte el 30)
//·8) includes('Script') - true (contiene esa palabra)
//·9) split() - [ '30 days of JavaScript' ]
//·10) split(' ') - [ '30', 'days', 'of', 'JavaScript' ]        
//·11) let int -> int.split(',') - [ 'Facebook',' Google', ' Microsoft',' Apple',' IBM',' Oracle',' Amazon' ] 
//·12) replace('JavaScript', 'Phyton') - 30 days of Phyton
//·13) charAt(15) - S
//·14) charCodeAt(11) - 74
//·15) indexOf('a') - 4 (primer aparicion de 'a')
//·16) lastIndexOf('a') - 14 (ultima aparicion de 'a')
//·17) let oracion -> oracion.indexOf('porque') - 35 
//·18) let oracion -> oracion.lastIndexOf('porque') - 49
//·19) let oracion -> oracion.search('porque') - 35
//·20) desafio.trim() Elimina el espacio final al principio o al final de una cadena.
//·21) desafio.startsWith('3') - true (comienza con 3)
//·22) desafio.endsWith('t') - true (termina con t)
/*23) toma una subcadena o un patrón de expresión regular como argumento y devuelve una matriz si hay una coincidencia;
 de lo contrario, devuelve un valor nulo. 
 ·desafio.match('a') - [ 'a', index: 4, input: '30 days of JavaScript', groups: undefined ]
*/
//·24) first.concat('JavaScript') - 30 dias de JavaScript
//let first = '30 dias de ';
//console.log(first.concat('JavaScript'))
//·25) desafio.repeat(2) -  30 days of JavaScript30 days of JavaScript  (toma un número como argumento y devuelve la versión repetida de la cadena)


/*EJERCICIOS NIVEL 2*/
let strs = 'There is no exercise better for the heart than reaching down and lifting people up.';
//console.log(`The quote ${strs} by John Holmes teaches us to help one another.`)

let mtc = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
//console.log(mtc)

//Ejercicio 3:
let teen = 10;
let teen2 = '10' //console.log(typeof(teen) === teen2) ---> false(uno es number y el otro string).
let change = Number(teen2); // el string lo paso a number.
//console.log(teen === change) //true.

//Ejercicio 4:
let info = parseFloat('9.8');
let cambio = Math.ceil(info); //9.8 -> pasa a ser 10
//console.log(cambio === 10);   //true, ahora si son iguales!

//Ejercicio 5:
let eje = 'Python';
//console.log(eje.includes('on')) // true -> incluye on.

//Ejercicio 6:
let ora = 'Espero que este curso no esté lleno de jerga';
//console.log(eje.includes('jargon')) false -> la oracion no tiene esa palabra.

//Ejercicio 7:
//Math floor ->  redondea un número dado hacia el número entero anterior.
// Con lo siguente me estaria consoleguenado un numero ramdon entero.
let nRandom = Math.floor(Math.random() * 100)
//console.log(nRandom)

//Ejercicio 8:
//el +50 -> ajusta el rango del número aleatorio generado y desplazarlo desde el rango original de 0-50 al rango deseado de 50-100.
//ya que en el parentesis se genera un numero random de 0 a 50.
let nRan = Math.floor(Math.random() * 50) + 50;
//console.log(nRan)

//Ejercicio 9:
let nR = Math.floor(Math.random() * 100) + 155
//console.log(nR)

//Ejercicio 12:
let frase = 'No puedes terminar una oración con porque porque porque es una conjunción';
let mejor = frase.substring(35, 55);
//console.log(mejor) -> consologue porque porque porque, ya que divide los 'porque de la oracion'.


/* EJERCICIOS NIVEL 3 */
let love = 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor';
let search = 'amor';
const repetida = love.split(search).length - 1;
//·El método split() divide el string love en varias partes cada vez que encuentra la palabra 'amor',
//creando así un array de substrings.
//·La resta de 1 es necesaria porque cuando dividimos el string, el número de separadores (en este caso, la palabra 'amor')
//es siempre uno menos que la cantidad de segmentos resultantes.
//console.log(repetida) -> amor se repite 3 veces.

//Ejercicio 2
let porque = 'No puedes terminar una oración con porque porque porque es una conjunción';
let repet = /porque/gi;
let res = porque.match(repet);
//console.log(res.length) //3
//console.log(porque.match(repet)) [ 'porque', 'porque', 'porque' ]
/*
·Una expresión regular, también conocida como regex o regexp, es una secuencia de caracteres que define un patrón de búsqueda.
 Se utiliza para buscar y manipular texto basado en patrones específicos.

/: El primer y último caracter / delimitan la expresión regular.
 Es la forma en que se define una expresión regular en JavaScript.

porque: Esta parte de la expresión regular simplemente está buscando el texto literal "porque".

g: El modificador g es un indicador para realizar una búsqueda global.
 Esto significa que la expresión regular buscará todas las ocurrencias en el texto, no solo la primera que encuentre.

i: El modificador i es un indicador para realizar una búsqueda insensible a mayúsculas y minúsculas.
 Esto significa que la expresión regular no considerará la diferencia entre letras mayúsculas y minúsculas al hacer coincidencias.
*/

//Ejercicio 4:
let declaracion = 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes';
let regEx = /\d+/g;
const ingreso = declaracion.match(regEx) //[ '5000', '10000', '15000' ]
console.log(ingreso);

