//SET -> (conjunto) Es una coleccion de elementos. sólo puede contener elementos unicos
//·creacion de set vacio:
const companiess = new Set();
//console.log(companies) -> Set(0) {}

//·Creacion de set a partir de un array:
const languagess = [
    "English",
    "Finnish",
    "English",
    "French",
    "Spanish",
    "English",
    "French",
];
const setOfLanguages = new Set(languagess);
//console.log(setOfLanguages) -> Set(4) {"English", "Finnish", "French", "Spanish"} elementos unicos, ya que en el arr se repiten

//·Set es un objeto iterable y podemos iterar a través de cada elemento:
for (const language of setOfLanguages){
    //console.log(language) -> English Finnish French Spanish (bucle para consologuear elementos)
}

//·Añadir un elemento a set:
const companies = new Set(); // crear set vacío
//console.log(companies.size); // 0
// companies.add('Google');
// companies.add('Amazon');
// companies.add('Facebook');
// companies.add('Microsoft');
// companies.add('Apple');
// companies.add('Space X')
//console.log(companies) -> Set(6) {'Google','Amazon','Facebook','Microsoft','Apple','Space X'}

//·También podemos utilizar el bucle para añadir elementos a set:
const company = ["Google", "Facebook", "Amazon", "Oracle", "Microsoft"];
const setOfCompanies = new Set();
for (const comp of company){
    setOfCompanies.add(comp)
}
//console.log(setOfCompanies) -> Set(5) { 'Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft' }

//·Borrar un elemento a set: metódo de eliminacion
//console.log(setOfCompanies.delete('Microsoft')); -> true (indica que lo elimino)
//console.log(setOfCompanies.size) -> 4 (quedan 4 elementos)

//·Comprobación de un elemento en set:
//·El metódo has puede ayudar a saber si existe determinado elemento:
//console.log(setOfCompanies.has('Space X')) -> false (significa que no existe)
//console.log(setOfCompanies.has('Google')) -> true (si existe)

//·Elimina todos los elementos de set:
setOfCompanies.clear();
//console.log(setOfCompanies) -> Set(0) {}

//·Ejemplo de como usar set:
const languages = [
    "English",
    "Finnish",
    "English",
    "French",
    "Spanish",
    "English",
    "French",
];
const langSet = new Set(languages);
//console.log(langSet); -> Set(4) {"English", "Finnish", "French", "Spanish"}
//console.log(langSet.size); -> 4
const counts = [];
const count = {};
for (const la of langSet){
    const filterLanguage = languages.filter((lang) => lang === la);
    //console.log(filterLanguage);
    counts.push({ lang: la, count: filterLanguage.length})
}
// console.log(counts)
// [
//     { lang: 'English', count: 3 },
//     { lang: 'Finnish', count: 1 },
//     { lang: 'French', count: 2 },
//     { lang: 'Spanish', count: 1 }
// ]

//·Otros casos de uso de set. Por ejemplo, para contar elementos únicos en un array:
const numbers = [5, 3, 2, 5, 5, 9, 4, 5];
const setOfNums = new Set(numbers);
//console.log(setOfNums) -> Set(5) { 5, 3, 2, 9, 4 }

//·Unión de sets
//Para encontrar la unión de dos sets se puede utilizar el operador de dispersión:
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);

//console.log(C) -> Set(6) { 1, 2, 3, 4, 5, 6 }

//·Intersección de sets
// Para encontrar la intersección de dos sets se puede utilizar un filtro:
let numA = [1, 2, 3, 4, 5];
let numB = [3, 4, 5, 6];

let setA = new Set(numA);
let setB = new Set(numB);

let filterC = numA.filter((num) => setB.has(num));
let setC = new Set(filterC);

//console.log(setC) -> Set(3) { 3, 4, 5 }

//·Diferencia de sets
// Para encontrar la diferencia entre dos sets se puede utilizar un filtro: (con las mismas variables de arriba)
let filterDif = numA.filter((num) => !setB.has(num));
let setDif = new Set(filterDif);
//console.log(setDif) -> Set(2) { 1, 2 }


// ·Map
//Creación de un Map vacío:
const map = new Map();
//console.log(map) -> Map(0) {}

//·Creación de un Map a partir de un array:
let countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

const mapCountry = new Map(countries);
// console.log(mapCountry)
//console.log(mapCountry.size);
// Map(3) {
//     'Finland' => 'Helsinki',
//     'Sweden' => 'Stockholm',
//     'Norway' => 'Oslo'
//   }
//3

//·Añadir valores a Map
const countriesMap = new Map();
//console.log(countriesMap.size) -> 0
countriesMap.set("Finland", "Helsinki");
countriesMap.set("Sweden", "Stockholm");
countriesMap.set("Norway", "Oslo");
//console.log(countriesMap); -> contiene los valores agregados
//console.log(countriesMap.size); -> 3

//·Obtención de un valor de Map:
let valorMap = countriesMap.get('Finland');
//console.log(valorMap) -> Helsinki

//·Comprobar key en Map
//Comprueba si una key existe en un map usando el método has. Retorna true o false:
let keyMap = countriesMap.has('Finland');
//console.log(keyMap) -> true. significa que si existe

//·Obtención de todos los valores de map usando un bucle:
for (const country of countriesMap) {
    //console.log(country);
  }
//[ 'Finland', 'Helsinki' ]
//[ 'Sweden', 'Stockholm' ]
//[ 'Norway', 'Oslo' ]

for (const [country, city] of countriesMap){
    //console.log(country, city);
}
// Finland Helsinki
// Sweden Stockholm
// Norway Oslo

/****************************************************************************************************************************************/
//·Ejercicios!

//1) crear un set vacío:
const setVacio = new Set();
//console.log(setVacio) -> Set(0) {}

//2) Crear un set que contenga de 0 a 10 utilizando el bucle:
const numberSet = new Set();

for (let i = 0; i <= 10; i++){
    numberSet.add(i);
}
//console.log(numberSet) -> Set(11) { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }
 
//3) Eliminar un elemento de set:
//console.log(numberSet.delete(0)) -> true;
//console.log(numberSet) -> Set(10) { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }

//4) Limpia set:
numberSet.clear()
//console.log(numberSet) -> Set(0) {}

//5)Crear un set de 5 elementos string a partir de un array:
const namesFamily = ['Gustavo', 'Agustina', 'Claudia', 'Antonio', 'Lucy'];
const setNameF = new Set(namesFamily);
//console.log(setNameF) -> Set(5) { 'Gustavo', 'Agustina', 'Claudia', 'Antonio', 'Lucy' }

//6) Crear un map de países y el número de caracteres de un país:
const countriesLatam = [
    ['Argentina', 'Argentina'.length],
    ['Brasil', 'Brasil'.length],
    ['Uruguay', 'Uruguay'.length]
]
const mapLatam = new Map(countriesLatam);
//console.log(mapLatam) -> Map(3) { 'Argentina' => 9, 'Brasil' => 6, 'Uruguay' => 7 }

//Ejercicio NIVEL 2:
//1) Encontrar a unión b:
let aPais = ['Argentina', 'Brasil', 'Chile'];
let bPais = ['Argentina', 'Brasil', 'Chile', 'Uruguay', 'Paraguay', 'Perú'];
let cAll = [...aPais, ...bPais];

let aSet = new Set(aPais);
let bSet = new Set(bPais);
let cSet = new Set(cAll);

// console.log(cSet)
// Set(6) {
//   'Argentina',
//   'Brasil',
//   'Chile',
//   'Uruguay',
//   'Paraguay',
//   'Perú'
// }