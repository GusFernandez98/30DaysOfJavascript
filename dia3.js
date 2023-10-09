/* 
TEORIA Booleanos
·Valores verdaderos:    
    ·Todos los numeros (+ y -), menos el 0.
    ·Todos los string, menos el string vacio -> ''.
    ·Booleano true.

·Valores Falsos:
    ·0.
    ·Null.  -> No tiene valor.
    ·Undefined. -> Valor indefinido.
    ·NaN    -> Not At Number (no hay numero)
    ·Booleano false.
    ·String vacio -> '', ' '.

  
Operadores de Incremento: 
    ·PreIncremento:
let count = 0;
//console.log(++count) //1
//console.log(count) // 1
    ·Post-Incremento:
console.log(count++) //0
console.log(count)   //1

*Para decremento se utiliza la misma formula, solo cambia el signo -> (+ por -)

Ternario:
Si es true se ejecuta la primer opcion, caso contrario se ejecuta la otra opcion.
let EstaLloviendo = true;
EstaLloviendo
  ? console.log("Necesitas un impermeable.")
  : console.log("No necesitas un impermeable.");

EstaLloviendo = false;
 EstaLloviendo
   ? console.log("Necesitas un impermeable.")
   : console.log("No necesitas un impermeable.");


Objeto Date:
·Date -> proporciona muchos metodos para trabajar con fecha y hora.
·Para obtener la info se utiliza get: 
    ·getFullYear().
    ·getMonth().
    ·getDate().
    ·getDay().
    ·getHours().
    getMinutes().
    ·getSeconds().
    ·getMilliseconds().
    ·getTime().

Creo el objeto con la info, la cual esta guardada en la variable data:
let data = new Date();
·Formas de obtener la info!
console.log(data) 2023-08-25T04:00:51.646Z -> es la info.
console.log(data.getFullYear()) -> año:2023
console.log(data.getMonth()) -> mes:7
console.log(data.getDate()) -> Dia:25
console.log(data.getDay()) -> 5
5 Viernes(es el dia 5 de la semana)
El domingo es 0, el lunes es 1 y el sábado es 6
Obtener el día de la semana como un número (0-6)

·Forma correcta de hacerlo legible:
let data = new Date();
let year = data.getFullYear()
let mounth = data.getMonth()+1;
let day = data.getDate();
console.log(`El dia de hoy es ${day}/${mounth}/${year}`); -> El dia de hoy es 25/8/2023
*/

/* ·EJERCICIOS NIVEL 1 */

//Ejercicio 1:
let firstName = 'Gustavo';
let lastName = 'Fernández';
let country = 'Argentina';
let city = 'San Luis';
let age = 24
let isMarried = 'No'; 
let yea = 2023
//console.log(typeof(city))

//Ejercicio 2:
let info = typeof('10');    //string
let info2 = 10;             //number
//console.log(info === info2) //false

//Ejercicio 3:
let num = 10;   
let parse = parseInt(9.8)   //pasa a 9
//console.log(num === parse)  //false

//Ejercicio 4:
let str1 = 'Chau';
let str2 = 'Hola';
let num1 = 25
//console.log(str1 === str2)  //false -> Son distintos strings.
//console.log(str1.length === str2.length) //true -> tienen la misma cantidad.

let vacio;
let str3 = '';
let nada = undefined;
//console.log(vacio === nada)

//Ejercicio 5:
// 4 > 3 -> true
// 4 >= 3 -> true
// 4 < 3 -> false
// 4 <= 3 -> false
// 4 == 4 -> true
// 4 === 4 -> true
// 4 != 4 -> false
// 4 !== 4 -> false
// 4 != '4' -> false
// 4 == '4' -> true
// 4 === '4' -> false

//haga una declaración de comparación falsa:
let termino1 =  'Python';
let termino2 =  'jargon';
//console.log(termino1.length !== termino2.length)  -> false.

//Ejercicio 6:
// 4 > 3 && 10 < 12  -> true.
// 4 > 3 && 10 > 12  -> false.
// 4 > 3 || 10 < 12 -> true
// 4 > 3 || 10 > 12 -> true
// !(4 > 3) -> false
// !(4 < 3) -> true
// !(false) -> true
// !(4 > 3 && 10 < 12) -> false
// !(4 > 3 && 10 > 12) -> true.
// !(4 === '4') -> true.
//No hay 'on' tanto en dragon como en python
let py = 'python';
let dr = 'dragon';
//console.log(!py && dr.includes('on')) -> false

//Ejercicio 7:
// ¿Qué año es hoy? -> 2023
// ¿Qué mes es hoy con un número? -> 9
// ¿Qué fecha es hoy? -> 1  -> console.log(`${day}/${mounth}/${year}`)  -> 1/9/2023
// ¿Qué día es hoy con un número? -> 5
// ¿Cuál es la hora actual? -> 19
// ¿Cuántos minutos hay actualmente? -> 17
// Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.
let data = new Date;
let year = data.getFullYear(); // -> 2023.
let mounth = data.getMonth()+1; // -> 9.
let day = data.getDate() // -> 1
let numDay = data.getDay(); // -> 5
let hours = data.getHours(); // -> 19
let min = data.getMinutes(); // -> 17
let minPasAndPre = Math.floor(data.getTime() / 1000); // -> 1693606947
// Utilizo el método getTime() para obtener los milisegundos transcurridos desde el 1 de enero de 1970 hasta la fecha actual.
// Dividimos esos milisegundos por 1000 para convertirlos en segundos.

/* ·EJERCICIOS NIVEL 2 */

//Ejercicio 1:
//Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo
//y calcule el área de un triángulo (área = 0,5 x b x h):

//Ejemplo para calcular area de Triángulo:
let b = 25;
let a = 12;
let triangulo = b * a / 2;
//console.log(`area del triangulo: ${triangulo}`)

//Script funcionando en pag:
// let base = prompt('Ingresar valor de base');
// let altura = prompt('Ingresar valor de altura');
// let areaTriangulo = base * altura / 2;
// alert(`El área del triángulo es: ${areaTriangulo}`);

//Ejercicio 2:
//Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y
//calcule el perímetro del triángulo (perímetro = a + b + c):
//Ejemplo:
// let ladoA = 12;
// let ladoB = 12;
// let ladoC = 24;
// let all = ladoA + ladoB+ ladoC;

//parseInt -> se utiliza para convertir los valores a num, el promp recibe strings:
//Sin parse ->  Js me estaba sumando como strings, no realizaba la suma matematica:
// let ladoA = parseInt(prompt('Ingresar valor del lado A'));
// let ladoB = parseInt(prompt('Ingresar valor del lado B'));
// let ladoC = parseInt(prompt('Ingresar valor del lado C'));
// let perimetro = ladoA + ladoB + ladoC;
// alert(`El perímetro del triángulo es: ${perimetro}`);

//Ejercicio 3:
//Obtenga el largo y el ancho usando prompt y calcule el área del rectángulo (área = largo x ancho)
//y el perímetro del rectángulo (perímetro = 2 x (largo + ancho)).
//Ejemplo área:
let largoRect = 12;
let anchoRect = 25;
let areaRect = largoRect * anchoRect;
//console.log(`El area del rectángulo es: ${areaRect}`)
//Ejemplo Perímetro:
let perRectangulo = 2 * (largoRect + anchoRect);
//console.log(`Perímetro de rectangulo: ${perRectangulo}`)

//Ejercicio 4:
//Obtenga el radio usando prompt y calcule el área de un círculo (área = pi x r x r)
//y la circunferencia de un círculo (c = 2 x pi x r) donde pi = 3.14.
//Forma de calcular area del circulo:
let radio = 8;
let pi = 3.14;
let areaCirculo = pi * radio * radio;
//console.log(`area del circulo ${areaCirculo}`)
//Forma de calcular la circunferencia:
let circunferencia = 2 * pi * radio;
//console.log(`La circunferencia del circulo es: ${circunferencia}`)

//Ejercicio 9:
//Sacar cuenta de cuanto cobra:
let horasTrabajadas = 40;
let tarifa = 28;
let ganancia = horasTrabajadas * tarifa;
//console.log(`Su ganancia es: ${ganancia}`) Su ganancia es: 1120

//Ejercicio 10:
let miNombre = 'Gustavo';
// if(miNombre.length > 7) return console.log('su nombre es largo');
// else return console.log('Su nombre es corto');

//Con ternario:
let longitud = miNombre.length;
let result = longitud > 7 ? 'Su nombre es largo' : 'Su nombre es corto';
//console.log(result)

//Ejercicio 11:
let firstN = "Asabeneh";
let lastN = "Yetayeh";

// if( firstN.length > lastN.length) return console.log(`Tu primer nombre,${firstN}, es más largo que tu apellido, ${lastN}.`)
// else return console.log(`No es correcto`);

//Ternario:
let res = firstN.length > lastN.length 
? `Tu primer nombre, ${firstN}, es mas largo que tu apellido, ${lastN}` 
: `No es correcto`;
//console.log(res)

//Ejercicio 12:
let myAge = 250;
let yourAge = 25;

let diferencia = myAge - yourAge;
//console.log(`Soy ${diferencia} mayor que tú`)

//Ejercicio 13 (Codigo limpo)
//1) Pedir info mediante un prompt.
//2) Parseint -> para convertir en número entero el dato ingresado.
// let añoDeNacimiento = parseInt(prompt('Ingresa tu año de nacimiento'));
//3) Obtengo el año actual:
// let añoActual = new Date().getFullYear()
//4) Calculo la edad:
// let edad = añoActual - añoDeNacimiento;
//5)Realizo la verificacion si es mayor o menor:
// if(edad < 0 || edad > 100) alert(`Datos erroneos`);
// else if(edad >= 18) alert(`Tienes ${edad} años. Tienes la edad suficiente para conducir`);
// else alert(`Tienes ${edad}. No tienes la edad suficiente para conducir`);


//Ejercicio 14:
//1) Pido info:
let yourAgee = 25
//2) Guado informacion para calcular fecha:
let date = new Date();
//3) Se calcula la fecha de nacimiento del usuario:
let brith = new Date(date.getFullYear() - yourAgee, date.getMonth(), date.getDate());
//4) Saco la diferencia entre fecha actual y fecha de cumpleaños.
//5) Se divide por 1000 para convertirlo en segundos.
let secondsLife = (date - brith) / 1000;
//console.log(`Has vivido aproximadamente ${secondsLife} segundos.`);

//Ejercicio 15:
// Cree un formato de hora legible por humanos usando el objeto Date.
//· res -> console.log(`${horass}:${minutoss}`) ---> 23:18 (hora legible).

// YYYY-MM-DD HH:mm -> console.log(`${añoss}-${mesess}-${diass} ${horass}:${minutoss}`); -> 2023-09-13 23:22
// DD-MM-YYYY HH:mm -> console.log(`${diass}-${mesess}-${añoss} ${horass}:${minutoss}`); -> 13-9-2023 23:24
let infoDate = new Date;
let añoss = infoDate.getFullYear();
let mesess = infoDate.getMonth() + 1;
let diass = infoDate.getDate();
let horass = infoDate.getHours();
let minutoss = infoDate.getMinutes();

















