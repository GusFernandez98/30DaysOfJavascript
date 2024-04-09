document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('num');
    const messageElement = document.getElementById('message');

    // Agregar evento input al campo de entrada
    input.addEventListener('input', () => {
        // Limpiar el mensaje inmediatamente cuando el usuario modifique el contenido
        messageElement.textContent = '';
    });

    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        // Limpiar el mensaje de error cuando se hace clic en el botón
        messageElement.textContent = '';
        generateNumber();
    });
});

// Verificador de datos input
const generateNumber = () => {
    const input = document.getElementById('num'); //selecciono el input del html
    const inputValue = input.value.trim(); //elimina espacio del principio
    const messageElement = document.getElementById('message');

    //verifica si es num
    const isNum = /^\d+$/.test(inputValue);
    if (inputValue === '') messageElement.textContent = 'Ingresar informacion';
    else if (!isNum) messageElement.textContent = 'Ingresar solo numeros';
    else {
        let conNumEntero = parseInt(inputValue); //se parsea a numero entero

        document.getElementById('contenedorNumeros').innerHTML = ''; //Se utiliza para el div que contiene los nums

        for (let i = 0; i < conNumEntero; i++) {
            const numero = document.createElement('div');
            numero.textContent = i; // Asignar el número como texto del elemento div
            numero.classList.add('nums'); // Agregar una clase para estilizar los números si es necesario
            
            // Estilo para los números:
            numero.style.margin = '5px';
            numero.style.padding = '30px';
            numero.style.width = '90px';
            numero.style.height = '70px';
            numero.style.textAlign = 'center';
            //numero.style.alignItems = 'center';
            numero.style.display = 'inline-block'
            //numero.style.border = '2px solid black';
            numero.style.fontSize = '60px'
            numero.style.fontFamily = 'Arial'
            numero.style.color = 'white'

            //Verificacion de numero primo
            if (numPrimo(i)) numero.style.backgroundColor = 'rgb(217, 83, 79)'; //color rojo es num primo
            else if (i % 2 === 0) numero.style.backgroundColor = 'rgb(92, 184, 92)'; //color verde es numero par
            else numero.style.backgroundColor = '#ffff60'; // color amarillo num impar

            // Agrega el elemento div al contenedor
            document.getElementById('contenedorNumeros').appendChild(numero);
        }
    }
};

//·son aquellos que solo son divisibles por ellos mismos.
const numPrimo = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;

    for (let i = 2; i * i <= num; i++){
        if (num % i === 0) return false;
    }
    return true; 
}






