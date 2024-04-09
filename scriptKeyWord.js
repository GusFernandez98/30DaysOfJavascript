document.addEventListener('keypress', (e) => {
    const divContainerOne = document.getElementById('containerKey'); 
    const divContainerTwo = document.getElementById('containerKeyTwo');
    const key = e.key;
    const keyCode = e.keyCode;

    // Crear un elemento de span para el texto de key y aplicarle el color verde
    const keySpan = document.createElement('span');
    keySpan.textContent = key;
    keySpan.style.color = 'green';

    // Limpiar el contenido existente del contenedor y agregar el span
    divContainerOne.innerHTML = 'YOU PRESSED&nbsp;'; // Restaurar el texto original
    divContainerOne.appendChild(keySpan); // Agregar el elemento span con el texto de key

    // Actualizar el contenido de keyCode
    divContainerTwo.textContent = keyCode;
    divContainerTwo.style.color = 'green';

    // Aplicar la clase 'press' para resaltar el cambio
    divContainerOne.classList.add('press');
    divContainerTwo.classList.add('press');

});


document.addEventListener('keyup', () => {
    divContainerOne.classList.remove('press'); // Elimina la clase 'press' del contenedor
    divContainerTwo.classList.remove('press'); //por ende se elimina el marco
});