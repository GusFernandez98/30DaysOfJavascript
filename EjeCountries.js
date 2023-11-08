//Ejercicios lvl 3:

const countries = [
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

//·Extrae todos los países que contengan la palabra 'land':
for (const land of countries){
    if(land.includes('land')){
        //console.log(land)
    }
}
// for (let i = 0; i < countries.length; i++){
//     if (countries[i].includes('land')){
//         console.log(countries[i])
//     }
// }

//·Encuentra el país que contiene la mayor cantidad de caracteres en el array countries:
for (let i = 0; i < countries.length; i++) {
    //console.log(countries[i].length) -> verifico la long de los elementos
    if (countries[i].length > 23){
        //console.log(countries[i])
    }   
}

for(const strmax of countries) {
    if (strmax.length > 23) {
        //console.log(strmax)
    }
}

//·Extrae todos los países que contengan solo cuatro caracters del array countries e impremela como un array:
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length <= 4){
        //console.log(countries[i])
    }
};

for (const fourStr of countries) {
    if (fourStr.length <= 4) {
        //console.log(fourStr)
    }
};

//·Extrae todos los paíse que contengan dos o más palabras del array countries e imprimela como un array:
let paisesTwoStr = [];

for (let i = 0; i < countries.length; i++) {
    //Divide el strings en elementos distintos: "Bosnia and Herzegovina" -> 'Bosnia', 'and', 'Herzegovina'
    const twoStr = countries[i].split(' '); 
    
    if (twoStr.length === 2) {
        //Si hay dos palabras, se pushe al arr vacio:
        paisesTwoStr.push(countries[i]) 
    }
}
//For each -> funcion de arrays
//Recorre cada elementos del array y ejecuta una cb para cada uno.
if (paisesTwoStr.length > 0) {
    //console.log("Los países con nombres de dos palabras son:");
    paisesTwoStr.forEach(pais => {
        //console.log(pais);
    });
} else {
    //console.log("No hay países con nombres de dos palabras.");
}


//Invertir el array countries y poner en mayúscula cada país y almacenalo en un array:
let newArrMayus = [];

//·se utiliza para crear una copia de parte o de todo un array:
//for of:
let arrCounReverse = countries.slice().reverse();

for (const str of arrCounReverse){
    let mayusArr = str.toUpperCase();
    newArrMayus.push(mayusArr)
}
//console.log(newArrMayus)

//con bucle for:
let mayusArrTwo = [];

for (let i = 0; i < arrCounReverse.length; i++) {
    let mayu = arrCounReverse[i].toUpperCase();
    mayusArrTwo.push(mayu)
}
console.log(mayusArrTwo)