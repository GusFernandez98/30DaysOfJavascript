//const countriesData = require('./countiesData');
//console.log(countriesData);

//·fn lista para mostrar paises
//const allCountries = () => {
//    return countriesData.map((country) => country.name);};
//console.log(allCountries());  //-> retorna arr con todos los nombres;

//const displayCountries = () => {
//    const countries = allCountries();
//    const container = document.getElementById('countriesContainer');

//·Limpiar el contenido existente del contenedor
//        container.innerHTML = '';

//·muestra:
//    countries.forEach((countryName) => {
//        const InfoCountry = document.createElement('div');
//        InfoCountry.textContent = countryName;
//        container.appendChild(InfoCountry);
//    })
//};

//llamo a funcion para mostrar paises: displayCountries();



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
    'Bosnia & Herzegovina',
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
    'C.African Republic',
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
    'East Timor',
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

const container = document.getElementById("countriesContainer");

countries.forEach(country => {
    const allCountry = document.createElement('div');
    allCountry.textContent = country;
    allCountry.classList.add('country');
    container.appendChild(allCountry)
});

//·Muestro en numero total de paises en el h3 especificado
const totalCountries = countries.length;
//console.log('total', totalCountries)
const hInfo = document.getElementById('numOfCountries')
hInfo.textContent = `Total number of countries: ${totalCountries}`;


//·fn para buscador:
const searchCountry = () => {
    const input = document.getElementById('searchInput');
    const textSearch = input.value.trim().toLowerCase(); //obtengo el valor del input

    const countries = document.getElementsByClassName('country');
    for (const country of countries) {
        const countryName = country.textContent.trim().toLowerCase(); //El contenido lo convierto a min y elimina espacios blancos.
        //· si esta vacio, se muestran todos los paisess
        if (textSearch === '') country.style.display = 'inline-flex';
        //·si el pais está se muestra, de lo contrario se oculta:
        else if (countryName.includes(textSearch)) country.style.display = 'inline-flex';
        else country.style.display = 'none';
    }
};

//·selecciono el input y le agrego un evento, el cual es buscar y limpiar 
document.getElementById('searchInput').addEventListener('input', searchCountry);


