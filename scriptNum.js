const centrarDiv = () => {
    const primerDiv = document.querySelector('.primerDiv');
    if (primerDiv) {
        primerDiv.style.display = 'flex';
        primerDiv.style.flexDirection = 'column';
        primerDiv.style.justifyContent = 'center';
        primerDiv.style.alignItems = 'center';
        primerDiv.style.fontFamily = 'Arial';

        const elementosHijos = primerDiv.children;
        for (const hijo of elementosHijos) {
            hijo.style.margin = '6px'; // Establece el margen a 0 para eliminar cualquier espacio
        }
    }
};

const esPrimo = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;

    for (let i = 2; i * i <= num; i++){
        if (num % i === 0) return false;
    }
    return true
};

const padNum = () => {
    // Obtener el div contenedor
    const divContenedor = document.createElement('div');
    divContenedor.className = 'padNumerico';
    //estilo del div
    divContenedor.style.display = 'flex';
    divContenedor.style.flexWrap = 'wrap';
    divContenedor.style.justifyContent = 'center';

    // Recorrer los números del 1 al 100
    for (let i = 0; i <= 100; i++) {
        // Crear un nuevo elemento div para cada número
        const numero = document.createElement('div');
        numero.textContent = i; // Asignar el número como texto del elemento div
        numero.classList.add('nums'); // Agregar una clase para estilizar los números si es necesario
        //·Estilo para los numeros:
        numero.style.margin = '5px';
        numero.style.padding = '30px';
        numero.style.width = '120px';
        numero.style.height = '100px';
        numero.style.textAlign = 'center';
        numero.style.alignItems = 'center';
        numero.style.lineHeight = '90px';
        numero.style.fontFamily = 'Arial';
        numero.style.fontSize = '30px'
        numero.style.border = '1px solid black';

        if (esPrimo(i)) numero.style.backgroundColor = 'rgb(217, 83, 79)'; // rojo-Primo
        else if (i % 2 === 0) numero.style.backgroundColor = 'rgb(92, 184, 92)'; // verde- Par
        else numero.style.backgroundColor = '#ffff60'; // amarillo-Impar

        divContenedor.appendChild(numero); // Anexar el elemento div al div contenedor
    }
    // Obtener el elemento body del documento
    const body = document.body;
    // Agregar el div contenedor al final del body
    body.appendChild(divContenedor);
};

const inicializarPagina = () => {
    centrarDiv();
    padNum();
};

window.onload = inicializarPagina;