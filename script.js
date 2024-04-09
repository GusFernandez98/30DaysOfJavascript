// Función para centrar el div con la clase 'wrapper'
const centrarDiv = () => {
    const wrappers = document.getElementsByClassName('wrapper');
    for (const wrapper of wrappers) {
        wrapper.style.display = 'flex'; // Establece el contenedor como flexbox
        wrapper.style.flexDirection = 'column'; // Ajusta la dirección de los elementos hijos a columna
        wrapper.style.justifyContent = 'center'; // Centra horizontalmente el contenido
        wrapper.style.alignItems = 'center'; // Centra verticalmente el contenido
    }   
};

// Función para obtener la fecha actual en un formato específico y mostrarla en un elemento HTML
const mostrarFecha = () => {
    const allData = new Date();
    const meses = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const nombreMes = meses[allData.getMonth()];
    const dia = ("0" + allData.getDate()).slice(-2);
    const año = allData.getFullYear();
    const hora = `${allData.getHours()}:${allData.getMinutes()}`;
    const formatoFecha = `${nombreMes} ${dia}, ${año} ${hora}`;
    const idFecha = document.getElementById('fecha');
    idFecha.innerText = formatoFecha;
    setInterval(() => {
        let colorHexa = "#" + Math.floor(Math.random() * 16777210).toString(16);
        idFecha.style.backgroundColor = colorHexa;
    }, 1000);
    idFecha.style.fontFamily = 'Arial';
    idFecha.style.fontSize = '17px';
};

// Función para estilizar una lista desordenada y sus elementos
const estilizarListaDesordenada = () => {
    const lista = document.getElementById('listaDesordenada');
    lista.style.listStyleType = 'none';
    lista.style.fontSize = '18px';
    lista.style.fontFamily = 'Arial';
    lista.style.width = '700px';
    lista.style.height = '100px';

    const listaOne = document.getElementById('liOne');
    if (listaOne) {
        listaOne.style.backgroundColor = '#98fb90';
        listaOne.style.padding = '10px';
    }

    const listaTwo = document.getElementById('liTwo');
    if (listaTwo) {
        listaTwo.style.backgroundColor = '#ffff60';
        listaTwo.style.padding = '10px';
    }

    const elementosLista = lista.getElementsByTagName('li');
    for (const elemento of elementosLista) {
        if (elemento !== listaOne && elemento !== listaTwo) {
            elemento.style.backgroundColor = '#ff9999'; 
            elemento.style.padding = '10px'; 
            elemento.style.borderRadius = '3px'; 
        }
        elemento.style.marginBottom = '5px'; 
    }
};

// Función para cambiar el color del texto de un elemento con el id "yearNum"
const cambiaColor = () => {
    let colorHexa = "#" + Math.floor(Math.random() * 16777210).toString(16);
    document.getElementById("yearNum").style.color = colorHexa;
    document.getElementById('yearNum').style.fontSize = '50px';   
};

// Función para inicializar la página al cargarla
const inicializarPagina = () => {
    centrarDiv();
    mostrarFecha();
    estilizarListaDesordenada();
    cambiaColor();
};

window.onload = inicializarPagina;