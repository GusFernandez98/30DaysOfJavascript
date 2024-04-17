// Agregar el event listener al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const massInput = document.getElementById('mass');

    // Agregar el event listener para manejar el borde del input de masa
    massInput.addEventListener('input', () => {
        if (massInput.value.trim() === '') {
            massInput.style.border = 'none';
        } else {
            massInput.style.border = '2px solid black';
        }
    });
});

const calculateWeight = () => {
    const massInput = document.getElementById('mass');
    const planetSelect = document.getElementById('planetInput');
    const resultDiv = document.getElementById('result');

    const mass = parseFloat(massInput.value);
    const planet = planetSelect.value;

    // Manejar si el input está vacío
    if (massInput.value.trim() === '') {
        resultDiv.textContent = 'Please enter a valid mass';
        return; // Detener la ejecución si el input está vacío
    }

    if (isNaN(mass) || mass <= 0) {
        resultDiv.textContent = 'Please enter a valid mass';
        return; // Detener la ejecución si la masa no es válida
    }

    const gravity = getGravity(planet);
    if (gravity === null) {
        resultDiv.textContent = 'Please select a valid planet';
        return; // Detener la ejecución si el planeta no es válido
    }

    const weight = mass * gravity;
    resultDiv.textContent = `The weight of the object on ${planet} is ${weight.toFixed(2)} N.`; 
};


const getGravity = (planet) => {
    switch (planet.toLowerCase()) {
        case 'mercury':
            return 3.7; //m/s -> es la gravedad de cada planeta
        case 'venus':
            return 8.87;
        case 'earth':
            return 9.81;
        case 'mars':
            return 3.71;
        case 'jupiter':
            return 24.79;
        case 'saturn':
            return 10.44;
        case 'uranus':
            return 8.69;
        case 'neptune':
            return 11.15
        default: 
            return null //Si el planeta no esta, retorna null
    }
};

function showPlanetImage() {
    const planetInput = document.getElementById("planetInput").value;
    const planetImageContainer = document.getElementById("planetImageContainer");

    // Verificar si se ha seleccionado un planeta
    if (planetInput) {
        // Crear y mostrar la imagen del planeta
        const img = document.createElement("img");
        const imagePath = `img/${planetInput.toLowerCase()}.jpg`
        console.log("Ruta de la imagen:", imagePath);
        img.src = imagePath;
        img.alt = planetInput;
        img.width = 200; // Ancho de la imagen
        planetImageContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar una nueva imagen
        planetImageContainer.appendChild(img); // Agregar la imagen al contenedor
    } else {
        // Si no se ha seleccionado un planeta, borrar la imagen del contenedor
        planetImageContainer.innerHTML = "";
    }
}