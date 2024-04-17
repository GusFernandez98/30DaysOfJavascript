// const countiesData = require('./countiesData');
//console.log(countiesData) -> llega correctamente la info

//·Contabilizo los 10 paises mas poblados
// const mostPopulated = () => {
//     const countCountry = {};

//     countiesData.forEach((country) => {
//         const population = country.population;

//         countCountry[country.name] = population;
//     })
//         const countryArr = Object.entries(countCountry);  //obj convertido el arr
//         countryArr.sort((a, b) => b[1] - a[1]);

//     const topPopulation = countryArr.slice(0, 10);
//     //console.log(topPopulation)

//     const resultado = topPopulation.map(([country, population]) => ({
//     country,
//     population
// }));
//     return topPopulation
// };

//console.log(mostPopulated())
// [ me devuelve los 10 paises: [ 'China', 1402112000 ],[ 'India', 1380004385 ],[ 'United States of America', 329484123 ],[ 'Indonesia', 273523621 ],[ 'Pakistan', 220892331 ],[ 'Brazil', 212559409 ],[ 'Nigeria', 206139587 ],[ 'Bangladesh', 164689383 ],[ 'Russian Federation', 144104080 ],[ 'Mexico', 128932753 ]];


// Datos para el gráfico de población
var populationData = {
    labels: [
        'China',
        'India',
        'USA',
        'Indonesia',
        'Pakistan',
        'Brazil',
        'Nigeria',
        'Bangladesh',
        'Russia',
        'Mexico'
    ],
    datasets: [{
        label: 'Population',
        data: [
            1402112000, 1380004385,
            329484123,  273523621,
            220892331,  212559409,
            206139587,  164689383,
            144104080,  128932753
        ],
        backgroundColor: 'orange',
        borderColor: 'orange',
        borderWidth: 1,
        barThickness: 50 // Ajustar el ancho de las barras
    }]
};

// Datos para el gráfico de idiomas
var languageData = {
    labels: [
        'English',
        'French',
        'Arabic',
        'Spanish',
        'Portuguese',
        'Russian',
        'Dutch',
        'German',
        'Chinese',
        'Swahili'
      ],
    datasets: [{
        label: 'Language',
        data: [
            91,
            45,
            25,
            24,
            10,
            8,
            8,
            7,
            5,
            4 
        ],
        backgroundColor: 'orange', // Colores para cada barra
        borderColor: 'orange', // Colores del borde de cada barra
        borderWidth: 1,
        barThickness: 50 // Ajustar el ancho de las barras
    }]
};

// Opciones comunes para los gráficos
var opciones = {
    legend: {
        display: false // Ocultar la leyenda
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                display: false // Ocultar las etiquetas del eje Y
            }
        }]
    }
};

// Obtener el contexto del lienzo
var ctx = document.getElementById('grafico').getContext('2d');
// Función para mostrar el gráfico
function mostrarGrafico(data) {
    // Limpiar el lienzo antes de mostrar el nuevo gráfico
    if (myChart) {
        myChart.destroy();
    }
    // Crear el nuevo gráfico
    myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: opciones
    });
}

// Inicializar el gráfico con los datos de población al cargar la página
var myChart;
mostrarGrafico(populationData);
// Escuchar el clic en el botón "POPULATION"
document.querySelector('.buttonOne').addEventListener('click', function() {
    mostrarGrafico(populationData);
});
// Escuchar el clic en el botón "LANGUAGES"
document.querySelector('.buttonTwo').addEventListener('click', function() {
    mostrarGrafico(languageData);
});


//Elemento p:
let pText = document.querySelector('.pText');
//·Evento Popu, para text:
document.querySelector('.buttonOne').addEventListener('click', () => {
    pText.textContent = '10 Most populated countries in the world';
});
//·Evento lenguage, para text:
document.querySelector('.buttonTwo').addEventListener('click', () => {
    pText.textContent = '10 Most spoken lenguages in the world';
});