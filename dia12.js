/*
·Expresiones regulares:
También conocido como regEXP es un pequeño lenguaje de programación que ayuda a encontrar patrones en los datos.
Puede ser utilizada para comprobar si algún existe en diferente tipos de datos.
Para usar regExp en javascript, se puede usar:
·el constructor RegExp.
·Declarar un patron RegExp usando dos barras inclinadas seguidad de una bandera.

·Para declarar una cadena de caracteres se utiliza comilla simple, una comilla doble y un signo de retroceso;
·Para declara una expresion regular utilizamos dos barras inclinadas y una bandera opcional. La bandera puede ser:
g, i, m, s, u, o, y.

·Parametros RegExp
Toma dos parametros. Un patron de busqueda y bandera opcional.

·Patron -> Puede ser un texto o cualquier forma de patron que tenga alguna similitud. Ejemplo la palabra "spam" en 
un correo electronico podria ser un patron que interesa buscar.
·Banderas -> Determinan el tipo de busqueda.
    g: global, que significa buscar un patron en todo el texto.
    i: indicador de insensibilidad a las mayusculas y minusculas (busca tanto en minus o mayus).
    m: multilinea
*/
//·Creación de un patrón con el constructor RegExp
//Declarar una expresión regular sin bandera global y sin distinguir entre mayúsculas y minúsculas:
//·sin bandera:
let pattern = "love";
let regExp = new RegExp(pattern);

//·Declarar una expresión regular con un indicador global y un indicador de insensibilidad a las mayúsculas y minúsculas:
let patternTwo = "amor";
let flag = "gi";
let regExpTwo = new RegExp(patternTwo, flag);

//·Declarar un patrón regex usando el objeto RegExp. Escribir el patrón y la bandera dentro del constructor RegExp:
let regExpTrhee = new RegExp("love", "gi");

//·Creación de un patrón sin el constructor RegExp
//Declarar una expresión regular con un indicador global y un indicador de insensibilidad a las mayúsculas y minúsculas:
let regEx = /love/gi;   //-> Es la misma que se creo con el constructor

//Métodos del objeto RegExp:
//·pruebas de coincidencia
//·test() -> si hay una coincidencia en la cadena, retorna true o false:
const str = 'I love javaScript';
const patternn = /love/;
const result = patternn.test(str);
//console.log(result) -> true

//·Array que contiene todas las coincidencias
//·match() -> Retorna un array que contiene todas las coincidencias, incluyendo los grupos de captura,
//o null si no se encuentra ninguna coincidencia. Si no utilizamos una bandera global, 
//match() retorna un array que contiene patron, el indice, la entrada y grupo.
const strr = "I love JavaScript";
const patron = /love/;
const resultado = strr.match(patron);
//console.log(resultado) -> [ 'love', index: 2, input: 'I love JavaScript', groups: undefined ]
const patronTwo = /love/g;
const resultadoTwo = strr.match(patronTwo);
//console.log(resultadoTwo) -> [ 'love' ]

//·search() -> Busca una coincidencia en una cadena, devuelve el indice de la coincidencia, o -1 si la busqueda falla.
const strSearch = "I love JavaScript";
const patronS = /Java/g;
const res = strSearch.search(patronS);
//console.log(res) -> indice: 7

//·Sustitución de una subcadena
//·replace() -> Ejecuta una busqueda de una coincidencia en una cadena, y reemplaza la subcadena coincidente con una subcadena
//de reemplazo.
const txt =
  "Python es el lenguaje más bello que ha creado el ser humano.\
 Recomiendo python para un primer lenguaje de programación";
let matchReplace = txt.replace(/Python|python/, "JavaScript");
//console.log(matchReplace);JavaScript es el lenguaje más bello que ha creado el ser humano. Recomiendo python para un primer lenguaje de programación
let matchReplaceGlobal = txt.replace(/Python|python/g, "JavaScript")
//console.log(matchReplaceGlobal) JavaScript es el lenguaje más bello que ha creado el ser humano. Recomiendo JavaScript para un primer lenguaje de programación
let replaceGlobalMinMayus = txt.replace(/Python/gi, "JavaScript");

//·Corchetes
//Usemos el corchete para incluir las minúsculas y las mayúsculas:
const patronCorchetes = "[Aa]pple"; // este corchete significa A o a
const textoApple =
  "Apple and banana are fruits. An old cliche says an apple a day"
const mTxt = textoApple.match(patronCorchetes);
// console.log(mTxt)
// [
//   'Apple',
//   index: 0,
//   input: 'Apple and banana are fruits. An old cliche says an apple a day',
//   groups: undefined
// ]
const patronGlobal = /[Aa]pple/g; // este corchete significa A o a
const txtTwo = textoApple.match(patronGlobal);
//console.log(txtTwo) -> [ 'Apple', 'apple' ]

//·Si quiero buscar dos palabras:
const patronDosPalabras = /[Aa]pple|[Bb]anana/g; // este corchete significa A o a
const txtDosPa = "Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana";
const matchDosPa = txtDosPa.match(patronDosPalabras);
//console.log(matchDosPa) -> [ 'Apple', 'banana', 'apple', 'banana' ]

//·Caracter Escape (\) en RegExp:
const patronQueNoQuiero = /\d/g; // d es un carácter especial que significa dígitos;
const texto = "This regular expression example was made in January 12,  2020.";
const mT = texto.match(patronQueNoQuiero);
//console.log(mT) -> console.log(matches); // ["1", "2", "2", "0", "2", "0"], esto es lo que no queremos

//·Una o más veces(+):
const patronQueQuiero =  /\d+/g;
const mT2 = texto.match(patronQueQuiero);
//console.log(mT2) -> ["12", "2020"], esto es lo que no queremos

//·Punto(.):
const patronPunto = /[a]./g; // este corchete significa a y . significa cualquier carácter excepto nueva línea
const txtFruta = "Apple and banana are fruits";
const mFruta = txtFruta.match(patronPunto);
//console.log(mFruta) -> [ 'an', 'an', 'an', 'a ', 'ar' ]

const patronPuntoTwo = /[a].+/g; // . cualquier carácter, + cualquier carácter una o más veces
const mFrutaTwo = txtFruta.match(patronPuntoTwo);
//console.log(mFrutaTwo) -> [ 'and banana are fruits' ]

//·Cero o más veces(*):  El patrón puede no ocurrir o puede ocurrir muchas veces.
const patronCeroOMas = /[a].*/g; //. cualquier carácter, + cualquier carácter una o más veces
const mCeroMas = txtFruta.match(patronCeroOMas);
//console.log(mCeroMas) -> [ 'and banana are fruits' ]

//·Cero o una vez (?): El patrón puede no ocurrir o puede ocurrir una vez.
const txtCero =   "I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.";
const patronCero = /[Ee]-?mail/g; // ? significa que es opcional
const mCero = txtCero.match(patronCero);
//console.log(mCero) -> [ 'e-mail', 'email', 'Email', 'E-mail' ]

//·Cuantificador en RegExp: Podemos especificar la longitud de la subcadena que buscamos en un texto, utilizando una llave.
const textoCaunt = "This regular expression example was made in December 6,  2019.";
const patronFour = /\b\w{4}\b/g; //  palabras de cuatro caracteres exactamente
const resss = textoCaunt.match(patronFour)
//console.log(resss) //-> ['This', 'made', '2019']

const pattern2= /\b[a-zA-Z]{4}\b/g; //  palabras de cuatro caracteres exactos sin números
const matches2 = txt.match(pattern);
//console.log(matches2); //['This', 'made']

const pattern3 = /\d{4}/g; // un número y exactamente cuatro dígitos
const matches3 = textoCaunt.match(pattern3);
//console.log(matches3) -> [ '2019' ]

const pattern4 = /\d{1,4}/g; // 1 to 4
const matches4 = textoCaunt.match(pattern);
//console.log(matches4);  //['6', '2019']

//·Caret ^ Comienza con:
const txt1 = "This regular expression example was made in December 6,  2019.";
const pattern1 = /^This/; // ^ significa que comienza con
const matches1 = txt.match(pattern);
//console.log(matches1);  ['This']

//·Negación
const pattern20 = /[^A-Za-z,. ]+/g; // ^ en un conjunto de caracteres significa negación, no de la A a la Z, no de la a a la z, sin espacio, sin coma y sin punto
const matches20 = txt.match(pattern);
//console.log(matches20);  ["6", "2019]

//·Coincidencia exacta :Debe tener ^ que empieza y $ que es el final.
let patron1 = /^[A-Z][a-z]{3,12}$/;
let nombre= "Asabeneh";
let result1 = patron1.test(nombre);
//console.log(result) ->  true


//Ejercicios NIVEL 1:

//1) Calcula los ingresos anuales totales de la persona a partir del siguiente texto. 
const txtGanancia = 'Gana 4000 euros de sueldo al mes, 10000 euros de bonificación anual, 5500 euros de cursos online al mes';
const numOfGanancias = /\d+/g;
let ingresos = txtGanancia.match(numOfGanancias);
let ingresoTotal = 0;

for (const num of ingresos){
  ingresoTotal += parseInt(num);
}

//console.log("Los ingresos anuales totales son: " + ingresoTotal); -> Los ingresos anuales totales son: 19500