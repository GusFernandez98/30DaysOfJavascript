//·Event Listener
//Eventos HTML comunes -> onclick, onchange, onmouseout, onkeydown, onkeyup, onload.
//Se puede añadir el método event_listener (escuchador de evento) a cualquier objeto DOM. 
//Se utiliza -> addEventListener() para escuchar diferentes tipos de eventos. Toma dos argumentos: un event listener y una callback.
selectedElement.addEventListener("eventlistner", function (e) {
    // la actividad que quieres que ocurra después del evento estará aquí
  });
// arrow fn:  
selectedElement.addEventListener("eventlistner", (e) => {
    // la actividad que quieres que ocurra después del evento estará aquí
});

//·click, para adjuntar un event listener a un elemento:
//Primero selecciona el elemento y luego adjunto el método addEventListener.
const button = document.querySelector("button");    //Selecciono el elemento
button.addEventListener("click", (even) => {        //Aplico el método
  console.log("e gives the event listener object:", even);
  console.log("e.target gives the selected element: ", even.target);
  console.log("e.target.textContent gives content of selected element: ", even.target.textContent);
});

//·También se puede adjuntar un evento directamente al elemento HTML como script en línea:
{/* <body>
<button onclick="clickMe()">Click Me</button>
<script>
  const clickMe = () => {
    alert("We can attach event on HTML element");
  };
</script>
</body> */}

//·Doble Click:
const buttonClick = document.querySelector("button");
      buttonClick.addEventListener("dblclick", (e) => {
        console.log("e gives the event listener object:", e);
        console.log("e.target gives the selected element: ", e.target);
        console.log("e.target.textContent gives content of selected element: ", e.target.textContent);
});

//·Mouse enter:
const buttonEnter = document.querySelector("button");
buttonEnter.addEventListener("mouseenter", (e) => {
  console.log("e gives the event listener object:", e);
  console.log("e.target gives the selected element: ", e.target);
  console.log("e.target.textContent gives content of selected element: ", e.target.textContent);
});

//·Lista de eventos:

// ·click -> cuando se hace click en el elemento
// ·dblclick -> cuando se hace doble click en el elemento
// ·mouseenter -> cuando el punto del mouse ingresa al elemento
// ·mouseleave -> cuando el puntero del mouse abandona el elemento
// ·mousemove -> cuando el puntero del mouse se mueve sobre el elemento
// ·mouseover -> cuando el puntero del mouse se mueve sobre el elemento
// ·mouseout -> cuando el puntero del mouse sale del elemento
// ·input -> cuando el valor entra en el input de entrada
// ·change -> cuando el valor cambia en el input de entrada
// ·blur -> cuando el elemento no está enfocado
// ·keydown -> cuando una tecla está pulsada
// ·keyup -> cuando una tecla está levantada
// ·keypress -> cuando pulsamos cualquier tecla
// ·onload -> cuando el navegador ha terminado de cargar una página


//·Obtener valor de un elemento input:
//   <body>
//     <h1>Body Mass Index Calculator</h1>

//     <input type="text" id="mass" placeholder="Mass in Kilogram" />
//     <input type="text" id="height" placeholder="Height in meters" />
//     <button>Calculate BMI</button>

//     <script>
//       const mass = document.querySelector("#mass");
//       const height = document.querySelector("#height");
//       const button = document.querySelector("button");

//       let bmi;
//       button.addEventListener("click", () => {
//         bmi = mass.value / height.value ** 2;
//         alert(`your bmi is ${bmi.toFixed(2)}`);
//         console.log(bmi);
//       });
//     </script>
//   </body>


//·Evento de entrada y cambio:
//Se puede utilizar el tipo de evento change o input para obtener los datos inmediatamente del campo de entrada
{/* <body>
    <h1>Data Binding using input or change event</h1>

    <input type="text" placeholder="say something" />
    <p></p>

    <script>
      const input = document.querySelector("input");
      const p = document.querySelector("p");

      input.addEventListener("input", (e) => {
        p.textContent = e.target.value;
      });
    </script>
  </body> */}


//·Evento de desenfoque:
{/* <body>
    <h1>Giving feedback using blur event</h1>

    <input type="text" id="mass" placeholder="say something" />
    <p></p>

    <script>
        const input = document.querySelector('input')
        const p = document.querySelector('p')

        input.addEventListener('blur', (e) => {
            p.textContent = 'Field is required'
            p.style.color = 'red'
        })
    </script>
</body> */}


//·keypress, keydow y keyup
//Podemos acceder a todos los números de teclas del teclado utilizando diferentes tipos de event listener.
//Usemos keypress y obtengamos el keyCode de cada tecla del teclado:
{/* <body>
<h1>Key events: Press any key</h1>

<script>
  document.body.addEventListener("keypress", (e) => {
    alert(e.keyCode);
  });
</script>
</body> */}