// ·Funciones de orden superior
// ·Son funciones que toman como parametro otra funcion o retornan una funcion como valor.
// ·La funcion que se pasa por parametro, se llama callback

//·CALLBACK === 'FUNCION QUE SE PASA POR PARAMETRO'.
const fnOne = (num) => {
    return num ** 2;
}
// console.log(fnOne(3)) -> 9
const fnTwo = (fnOne, n) => { //fnOne es la callback(fn en parametro)
    return fnOne(n) + 2;
}
//console.log(fnTwo(fnOne, 3)) -> 11


//·Retornar una función:
//Las funciones de orden superior retorna la función como valor​
const altoOrden = (n) => {
    const medioOrden = (m) => {
        const bajoOrden = (t) => {
            return 2 * n + 3 * m + t; // 2 * 2 + 3 * 3 + 10 = 23
        };
        return bajoOrden;
    }
    return medioOrden;
};
// console.log(altoOrden(2)(3)(10)) -> 23


//·Veamos dónde utilizamos las funciones de callback. Por ejemplo, el método forEach utiliza callback:
const numbers = [1, 2, 3, 4, 5, 6];
const sumArr = (arr) => {
    let count = 0;
    const callback = function (ele) {
        count += ele;
    };
    arr.forEach(callback);
    return count;
};
// console.log(sumArr(numbers)) 21

// El ejemplo anterior puede simplificarse como el siguiente:
const numbersTwo = [1, 2, 3, 4, 5, 6];

const sumArray = (arr) => {
    let count = 0;
    arr.forEach(function(ele){
        count += ele;
    })
    return count;
};
//console.log(sumArray(numbersTwo)) -> 21


//·Configuracion de tiempo:
//En js podemos ejecutar algunas actividades en un determinado intervalo de tiempo o podemos programar (esperar) algun 
//tiempo para ejecutar algunas actividades:
//  ·SetInterval
//  ·SetTimeOut

//·Configuración del intervalo mediante la función setInterval:
//Metodo global setInterval toma una funcion callback y una duracion como parametro.
//La duracion esta en milisegundos y la llamda de retorno siempre sera  llamada en ese intervalo de tiempo.
//·Sintaxis:
// const callback = () => {};
// setInterval(callback, duration);

const sayHello = () => {
    console.log('Hello World')
};
// setInterval(sayHello, 2000) -> // imprime hello world cada segundo, 2000ms es 2segundos.

//·Configurar tiempo mediante un setTimeout:
//Se utiliza para ejecutar alguna accion en algún momento en el futuro.
//Toma una callback y una duracion como parametro. la duracion es en milisegundos y el callback espera esa cantidad de tiempo.
//·Sintaxis:
// const callback = () => {};
// setTimeout(callback, duration)

const heyHello = () => {
    console.log('Hello World!')
};
//setTimeout(heyHello, 10000) -> se ejecuta despues de 10 segundos.

/**********************************************************************************************************************/

//  ·Programación funcional
//·En lugar de escribir un bucle regular, Js introdujo metodos que ayudan a resolver problemas complicados.
//·Estos métodos toman la funcion callback, como el:
//  ·forEach
//  ·map
//  ·filter
//  ·reduce
//  ·find
//  ·every
//  ·some
//  ·sort

// ·forEach -> Itera los elementos de un array (se utiliza solo para arr).
//Toma una fn callback con elementos, parámetro de indice y el propio array (indice y array son opcionales).
//Sintaxis:
// arr.forEach(function (elemento, indice, array){
//     console.log(indice, elemento, array)
// });
//con arrow:
// arr.forEach((elemento, indice, array) => {
//     console.log(indice, elemento, array)
// });
//retrun explicito:
// arr.forEach((elemento, indice, array) => console.log(indice, elemento, array));

let count = 0;
let nums = [1, 2, 3, 4, 5, 6, 7, 8];
nums.forEach((nums) => count += nums)
//console.log(count); -> 36

//·El forEach reduce a una linea, todo un bucle regular:
// for (let i = 0; i < nums.length; i++){
//     count += nums[i];
// }
// console.log(count) -> 36

const countriess = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
//countriess.forEach((elemento) => console.log(elemento.toUpperCase())); -> retorna todo el array en mayusculas


//  ·map -> itera los elementos de un array y modifica los elementos del mismo.
//Toma una fn callback con elementos , índice, parámetro del array y devuelve un nuevo array
//sintaxis:
// const modifiedArray = arr.map(function (elemento, indice, array){
//     return elemento;
// });
//arrow:
//const modifiedArray = arr.map((elemento, indice) => elemento);

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numSquare = number.map((el) => el * el);
//console.log(numSquare) -> [1, 4, 9, 16, 25, 36, 49, 64, 81]

const names = ['Luis', 'Gustavo', 'Agus', 'Clau', 'Antonio'];
const namesToUpperCase = names.map((name) => name.toUpperCase());
//console.log(namesToUpperCase) -> [ 'LUIS', 'GUSTAVO', 'AGUS', 'CLAU', 'ANTONIO' ]

const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
  ];
const countriesThreeStr = countries.map((country) => country.slice(0, 3));
//console.log(countriesThreeStr) ['Alb', 'Bol', 'Can','Den', 'Eth', 'Fin','Ger', 'Hun', 'Ire','Jap', 'Ken'];


//  ·filter -> filtra los elementos que cumplen las condiciones de filtrado y devuelve un nuevo array.
//sintaxis:
//aca la condicion es que filtre los paises que tienen 'land';
const countriesInLand = countries.filter((count) => count.includes('land')); 
//console.log(countriesInLand) -> [ 'Finland', 'Ireland' ]

const countriesEndIa = countries.filter((country) => country.includes('ia'));
//console.log(countriesEndIa) -> [ 'Albania', 'Bolivia', 'Ethiopia' ]

const countriesFive = countries.filter((count) => count.length === 6);
//console.log(countriesFive) -> [ 'Canada' ]


//  ·Reduce -> Toma una fn callback, la callback toma como parametro el acumulador, el valor actual y opcional el valor inicial
//y retorna un único valor.
//Es buena practica definir un valor inicial para el valor del acumulador. si no se esfecifica este parametro , por defecto
//el acumulador obtendrá el primer valor del array. Si el array es vacio, js tira error.
//sintaxis:
// arr.reduce((acumulador, current) => {
//     algunas operaciones van aquí antes de devolver un valor
//     return;
// }, valorInicial)

const numss = [1, 2, 3, 4, 5];
const AllSum = numss.reduce((acc, curr) => acc + curr, 0);
//console.log(AllSum) -> 15


//  ·Every -> Comprueba si todos los elementos son similares en un aspecto. Devuelve un booleano.
const nombres = ["Asabeneh", "Mathias", "Elias", "Brook"];
const arrAllStr = nombres.every((name) => typeof name === 'string'); //¿son todas str?
//console.log(arrAllStr) -> true -> da true ya que todos los elementos son strings.

const bools = [true, true, true];
const allTrue = bools.every((b) => b === true);
//console.log(allTrue) -> true 


//  ·find -> retorna el primer elemento que cumpla la condicion:            (apenas encuentra la condicion, corta!!)
const ages = [24, 22, 25, 32, 35, 18];
const myAge = ages.find((año) => año === 25);
//console.log('my age:', myAge) -> [24, 22, 25, 32, 35, 18];
                                            
const nameFamily = ['Claudia', 'Antonio', 'Agustina', 'Gustavo'];
const nameLong = nameFamily.find((nombre) => nombre.length >= 8);
//console.log(nameLong) -> Agustina

const scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];
const maxScore = scores.find((user) => user.score >= 100);
//console.log(maxScore) -> { name: 'John', score: 100 }


//  ·findIndex -> retorna la posicion del primer elemento que cumpla la condicion
const myAgePosition = ages.findIndex((año) => año > 25)
// console.log(myAgePosition) -> index: 3 (no llega al 35 porque 32 es el primer elemento que cumple);
const namePosition = nameFamily.findIndex((nom) => nom.length > 5)
//console.log(namePosition) -> index nombre: 0


//  ·some -> comprueba si algunos de los elementos son similares en un aspecto. Retorna un booleano:
const nameExtra = ["Asabeneh", "Mathias", "Elias", "Brook"];
const nEx = nameExtra.some((na) => typeof na === 'string')
//console.log(nEx) -> true, son todas str


//  ·Sort -> ordena los elementos de forma ascendente o descendente. Por defecto este método ordena los valores como str
//Esto funciona bien con los elementos del array de string pero no para los números.
//Si los valores numericos se ordenan con str y nos da un resultado erroneo.
//El metodo sort modifica el array original, se recomienda copiar los datos originales antes de empezar a usarlo.

//Ordenar los valores strings:
const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];
//console.log(products.sort()) -> [ 'Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar' ]
//·El arr original esta ordenado...

//Ordenar valores numéricos:
const numOr = [9.81, 3.14, 100, 37];
//console.log(numOr.sort()) -> [ 100, 3.14, 37, 9.81 ]
//·Para ordenar los elementos numericos proporciona un resultado erroneo
//·Para evitar esto usamos una callback de compraracion, dentro del metodo sort:
numOr.sort((a, b) => a - b); 
//console.log(numOr) -> [ 3.14, 9.81, 37, 100 ]
numOr.sort((a, b) => b - a);
//console.log(numOr) -> [ 100, 37, 9.81, 3.14 ]

//Ordenar array de objetos: Se utiliza la clave del objeto para comparar
//·sintaxis:
// objArr.sort((a, b) => {
//     if (a.key < b.key) return - 1;
//     if (a.key > b.key) return 1;
//     return 0;
// });

// objArr.sort((a, b) => {
//     if (a['key'] < b['key']) return -1;
//     if (a['key'] > b['key']) return 1;
//     return 0;
// });

const users = [
    { name: 'Antonio', age: 48 },
    { name: 'Agus', age: 23 },
    { name: 'Claudia', age: 46 },
    { name: 'Gustavo', age: 25 }
];
users.sort((a, b) => {
    if (a.age > b.age) return 1;
    if (a.age < b.age) return -1;
    return 0;
})
//console.log(users); // ordenados de forma ascendente
// [
// { name: 'Agus', age: 23 },
// { name: 'Gustavo', age: 25 },
// { name: 'Claudia', age: 46 },
// { name: 'Antonio', age: 48 }
// ]

//·forma descendente, se invierte el -1
// users.sort((a, b) => {
//     if (a.age > b.age) return -1;
//     if (a.age < b.age) return 1;
//     return 0;
// })
// [
// { name: 'Antonio', age: 48 },
// { name: 'Claudia', age: 46 },
// { name: 'Gustavo', age: 25 },
// { name: 'Agus', age: 23 }
// ]

/***************************************************************************************************************************/

//Ejercicios: NIVEL 1
const paises = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const nombre = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const productos = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

//2) Defina una función callback antes de utilizarla en forEach, map, filter o reduce:
const fnCallBack = (num) => {
    return num ** 3;
};
const seco = (fnCallBack, n) => {
    return fnCallBack(n) + 10
}
//console.log(seco(fnCallBack, 2)) -> 18

//3) Utiliza forEach para mostrar con console.log cada país del array de países:
//paises.forEach((paisMayus) => console.log(paisMayus)); -> itera todos los paises pais.

//4) Utiliza forEach para mostrar con console.log cada nombre del array de nombres:
//nombre.forEach((allName) => console.log(allName)) -> itera todos los nombres.

//5) Utiliza forEach para mostrar con console.log cada número del array de números:
//numeros.forEach((allNum) => console.log(allNum)) -> itera todos los numeros

//6) Utiliza map para crear un nuevo array cambiando cada país a mayúsculas en el array de países:
const paisMayus = paises.map((country) => country.toUpperCase());
//console.log(paisMayus) -> [ 'FINLAND', 'SWEDEN', 'DENMARK', 'NORWAY', 'ICELAND' ]

//7) Utilice map para crear un array de longitudes de países a partir del array de países:
const longCountry = paises.map((con) => con.length);
//console.log(longCountry) -> [ 7, 6, 7, 6, 7 ]

//8) Usa map para crear un nuevo array cambiando cada número al cuadrado en el array de números:
const alCuadrado = numeros.map((alQ) => alQ ** 2);
//console.log(alCuadrado) -> [1,  4,  9, 16,  25,36, 49, 64, 81, 100]

//9) Utilice map para cambiar cada nombre a mayúsculas en el array de nombres:
const nameMayus = nombres.map((names) => names.toUpperCase());
//console.log(nameMayus) -> [ 'ASABENEH', 'MATHIAS', 'ELIAS', 'BROOK' ]

//10) Utilice map para asignar el array de productos a sus correspondientes precios:
const priceProducts = productos.map((pro) => {
    const numPrince = parseInt(pro.price) || 2; //Los que estan vacio se reemplaza con 2
    return numPrince;
})
//console.log(priceProducts) -> [ 3, 6, 2, 8, 10, 2 ]

//11) Utilice filter para filtrar los países que contienen land:
const countriesLand = paises.filter((pais) => pais.includes('land'));
//console.log(countriesLand) -> [ 'Finland' ]

//12) Utilice filter para filtrar los países que tienen seis caracteres:
const sixStr = paises.filter((p) => p.length === 6);
//console.log(sixStr) -> [ 'Sweden', 'Norway' ]

//13) Utilice filter para filtrar los países que contengan seis letras o más en el array de países:
const sixOrMore = paises.filter((p) => p.length === 6 || p.length > 6);
//console.log(sixOrMore)

//14) Utilice filter para filtrar los países que empiezan por "E":
const countriesE = paises.filter((p) => p.startsWith("E"));
//if (countriesE.length === 0) console.log('No hay país que comience con E');
//else console.log(countriesE);

//15) Utilice filter para filtrar sólo los precios con valores:
const productPrice = productos.filter((pro) => typeof pro.price === 'number' && !isNaN(pro.price));
//console.log(productPrice);

//16) Declara una función llamada getStringLists que toma un array como parámetro y devuelve un array sólo con elementos string.
const getStringLists = (arr) => {
    return arr.filter((a) => typeof a === 'string');
};

const inputArray = [1, 'hello', 3, 'world', true];
const resultArray = getStringLists(inputArray);
//console.log(resultArray)

//17) Usa reduce para sumar todos los números del array de números:
const sumAll = numeros.reduce((acc, sig) => acc + sig, 0);
//console.log(sumAll)

//18) Utiliza reduce para concatenar todos los países y producir esta frase:
//·Estonia, Finland, Sweden, Denmark, Norway, y IceLand son países del norte de Europa
const oracionPais = paises.reduce((acc, pais, index) => {
    //ultimo elemento agrega y antes del pais
    if(index === paises.length - 1) return `${acc} y ${pais} son paises del norte de Europa`;
    //primer elemento no agrega coma
    else if (index === 0) return acc + pais;
    //los demas elementos se agrega coma antes de pais
    else return acc + ', ' + pais;
});
//console.log(oracionPais)

//19) Explique la diferencia entre some y every:
//·some -> comprueba algunos elementos y retorna booleano
//·every -> comprueba todos los elementos y retorna booleano

//20)Utilice some para comprobar si la longitud de algunos nombres es superior a siete en el array de nombres:
const longName = nombres.some((long) => long.length >= 7);
//console.log(longName) -> me da un true, significa que hay algun nombre con 7 o mas de longitud

//21)Utilice every para comprobar si todos los países contienen la palabra land:
const landCount = paises.every((pais) => pais.includes('land'));
//console.log(landCount) -> false, no todos incluyen land

//22) Explique la diferencia entre find y findIndex:
//·find -> retorna el primer elemento que cumpla la condicion.
//·findIndex -> retorna la posicion del primer elemento que cumpla la condicion.

//23)Utilice find para encontrar el primer país que contenga sólo seis letras en el array de países:
const firstCountSix = paises.find((p) => p.length === 6);
//console.log(firstCountSix) -> Sweden

//24)Utilice findIndex para encontrar la posición del primer país que contenga sólo seis letras en el array de países:
const indexCountrySix = paises.findIndex((pais) => pais.length === 6);
//console.log(indexCountrySix) -> index: 1

//25)Utilice findIndex para encontrar la posición de Norway si no existe en el array obtendrá -1:
const indexNorway = paises.findIndex((p) => p.includes('Norway'));
//if (indexNorway !== -1) console.log(`la posicion de Norway es: ${indexNorway}`)
//console.log(indexNorway)

//26)Utilice findIndex para encontrar la posición de Russia si no existe en el array obtendrá -1:
const indexRussia = paises.findIndex((p) => p.includes('Russia'));
//if (indexRussia !== -1) console.log(`La posicion de Russia es: ${indexRussia}`);
//else console.log('No existe, resultado:', indexRussia)


//Ejercicios NIVEL 2:

//1) Encuentre el precio total de los productos encadenando dos o más iteradores de matrices (por ejemplo, arr.map(callback).filter(callback).reduce(callback)).
// const productos = [
//   { product: "banana", price: 3 },
//   { product: "mango", price: 6 },
//   { product: "potato", price: " " },
//   { product: "avocado", price: 8 },
//   { product: "coffee", price: 10 },
//   { product: "tea", price: "" },
// ];
//·Obtengo array de precios:    (los que estan vacios se agrega 0)
const allPrince = productos.map((prod) => typeof prod.price === 'number' ? prod.price : 0);
//·eliminar elementos no numericos
const validNumbers = allPrince.filter((price) => typeof price === 'number');
//·sumo todo:
const total = validNumbers.reduce((acc, prince) => acc + prince, 0)
//console.log(total) -> 27

//2) Encuentre la suma del precio de los productos usando sólo reduce(callback)):
const allSumPrice = productos.reduce((acumulador, pro) => {
    //verifico si el precio es numerico:
    const verificacion = parseFloat(pro.price);
    return isNaN(verificacion) ? acumulador : acumulador + verificacion
}, 0);
//console.log(allSumPrice) -> 27

//3) Declara una función llamada categorizeCountries que retorna un array de países que tienen algún patrón común
//(encuentras el array de países en este repositorio como countries.js(ej 'land', 'ia', 'island','stan')).
const Manycountries= [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ];

const categorizeCountries = (arr) => {
    const arrLand = arr.filter((p) => p.includes('land'));
    const arrIa = arr.filter((p) => p.includes('ia'));
    const arrStan = arr.filter((p) => p.includes('stan'));

    if (arrLand.length > 0) console.log('Países que contienen "land":', arrLand);
    if (arrIa.length > 0) console.log('Países que contienen "ia":', arrIa);
    if (arrStan.length > 0)  console.log('Países que contienen "stan":', arrStan);
}
//categorizeCountries(Manycountries)

//4)Cree una función que retorne un array de objetos,
//que es la letra y el número de veces que la letra usa para empezar el nombre de un país:
const countLetter = (arr) => {
    const letterFrecuency = {};

    arr.forEach((country) => {
        const firstLetter = country.charAt(0).toLowerCase();
        letterFrecuency[firstLetter] = (letterFrecuency[firstLetter] || 0) + 1
        })
        //·mapeo y doy forma:
        const resultArr = Object.entries(letterFrecuency).map(([letter, count]) => ({
            letter,
            count
        }));

        return resultArr;
};
//console.log(countLetter(Manycountries))
//·solo con reduce:
const startLetter = (arr) => {
    return arr.reduce((acc, country) => {
        const firstLetter = country.charAt(0).toLowerCase();
        acc[firstLetter] = (acc[firstLetter] || 0) + 1; //si no tiene alguna valor, se agrega 0 como valor predeterminado
        return acc;
    }, {})
};
//console.log(startLetter(Manycountries))

//5) Declara una función getFirstTenCountries y retorna un array de diez países.
//Utiliza diferente programación funcional para trabajar en el array countries.js.
const getFirstTenCountries = (arr) => {
    const countryLong = arr.filter((country, index) => index < 10);
    if (countryLong.length > 0) console.log('Primeros 10 paises:\n', countryLong);
}
//getFirstTenCountries(Manycountries)

//6) Declara una función getLastTenCountries que devuelve los últimos diez países del array de países:
const getLastTenCountries = (arr) => {
    const lastIndex = arr.length -1;
    const lastCountries = arr.slice(lastIndex - 9, lastIndex + 1);

    if (lastCountries.length > 0) console.log('Últimos 10 países:\n', lastCountries);
};
//getLastTenCountries(Manycountries)

//7)Encuentre qué letra se utiliza muchas veces como inicial de un nombre de país del array de países (ej. Finland, Fiji, France etc)
const findMostLetterStart = (arr) => {
    const letterFrecuency = {};

    arr.forEach((country) => {
        const firstLetter = country.charAt(0).toLowerCase();
        letterFrecuency[firstLetter] = (letterFrecuency[firstLetter] || 0) + 1
        })
    
    let mostLetter = '';
    let maxFrequency = 0;

    for (let letter in letterFrecuency){
        if (letterFrecuency[letter] > maxFrequency){
            mostLetter = letter; //guardo la letra mas usada
            maxFrequency = letterFrecuency[letter] //cantidad de veces que es usada
        }
    }
    console.log(`La letra más común como inicial en los nombres de países es "${mostLetter}" con ${maxFrequency} apariciones.`);
};
//findMostLetterStart(Manycountries)
 

//Ejercicios NIVEL 3:
const countriesData = require('./countiesData');
//console.log(countriesData)

//1)Utiliza la información de los países. Ordena los países por nombre, por capital, por población:
//·Array ordenado por nombres de a-z:
const orderName = countriesData.sort((a, b) => a.name - b.name);
//console.log(OrderName)

//·Array ordenado por capitales:
const orderCapital = countriesData.sort((a, b) => {
    const capitalA = a.capital || ''; //si es undefined, asigno str vacio.
    const capitalB = b.capital || '';

    return capitalA.localeCompare(capitalB);
});
//console.log(orderCapital)

//·Array ordenado de mayor poblacion a menos:
const orderPopulation = countriesData.sort((a, b) => b.population - a.population);
//console.log(orderPopulation);
//Acceso a poblacion -> const populationFirstCountry = countriesData[1].population; -> cambiando el indice entro al elemento correspondiente.
//console.log(populationFirstCountry)

//2) Contabilizar las lenguas mas habladas:
const mostSpokenLenguage = (countries, topCount) => {
    const contador = {};

//·itero sobre los paises y la frecuencia de lenguajes:
    countries.forEach((country) => {        //itero los paises
        country.languages.forEach((lenguage) => {   //itero los lenguajes
            contador[lenguage] = (contador[lenguage] || 0) + 1; //esto es por si alguno no tiene valor
        })
    })
    
//·convierto el objeto en un array:
    const languageArr = Object.entries(contador);

//·ordeno el arr: (mas hablado a menos)
    languageArr.sort((a, b) => b[1] - a[1]);

//·El top de leguajes que muestra:
    const topLanguages = languageArr.slice(0, topCount);

//·Dar forma:
const result = topLanguages.map(([language, count]) => ({
    language,
    count
}))

return result;
};
//console.log(mostSpokenLenguage(countriesData, 10))

//·Contabilizar paises mas poblados
const mostPopulatedCountries = (countries, topCount) => {
    const countCountry = {};

    countries.forEach((country) => {
        const population = country.population;

        countCountry[country.name] = population;
    })

    const countryArr = Object.entries(countCountry);
    countryArr.sort((a, b) => b[1] - a[1]);

    const topPopulation = countryArr.slice(0, topCount);

    const resultado = topPopulation.map(([country, population]) => ({
        country,
        population
    }));

    return resultado;
};
//console.log(mostPopulatedCountries(countriesData, 10))


