//  ·Promesas
//Es una forma de manejar operaciones asíncronas en JavaScript. Permite a los manejadores con un valor eventual de exito 
//o razon de fracaso de una accion asíncronica.
//·el método asíncrono devuelve una promesa de proporcionar el valor en algún momento en el futuro.

//  ·Una promesa está en uno de estos estados:
//·pendiente -> estado inicial, ni cumplido ni rechazado.
//·cumplido -> significa que la operación se ha completado con éxito.
//·rechazado -> significa que la operación ha fallado.

//  ·Callbacks (fn pasada por parametro)
//A partir de los siguientes bloques de código se notará, la diferencia entre callback y promesas.
// const doSomething = (callback) => { //fn de abajo pasada por parametro
//     setTimeout(() => {
//         const skills = ["HTML", "CSS", "JS"];
//         callback('No salio bien', skills);
//     },2000)
// };

//El primer parámetro es err y el segundo es result.
//Si el parámetro err es falso, no habrá error, de lo contrario retornará un error:
// const callback = (err, result) => {
//     if(err) return console.log(err);
//     else return console.log(result);
// };
//doSomething(callback) -> No salio bien (se imprime despues de 2s)

// const doSomethingTwo = (callback) => {
//   setTimeout(() => {
//     const skills = ["HTML", "CSS", "JS"];
//     callback(false, skills);
//   }, 2000);
// };
//doSomethingTwo(callback) -> [ 'HTML', 'CSS', 'JS' ] (se improme despues de 2s)

//  ·Constructor de promesas:
// sintaxis:
//Se puede crear una promesa utilizando el constructor -> Promise.
//Para crear una nueva promesa se utiliza la palabra clave -> new, seguida de -> Promise.
//Dentro del parentesis un callback con dos promesas -> resolve y reject.
// const promise = new Promise((resolve, reject) => {
//   resolve("Exito");
//   reject("fallo");
// });

// const doPromise = new Promise((resolve, reject) => {
//     const skills = ["HTML", "CSS", "JS"];
//     if(skills.length < 0) resolve(skills);
//     else reject('Ocurrio un error')
// });

// doPromise
// .then((result) => {
//     console.log(result)
// })
// .catch((err) => console.log(err))

// const SecondPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const skills = ["HTML", "CSS", "JS"];
//     if (skills.includes("JS")) {
//       resolve("fullstack developer");
//     } else {
//       reject("Se produjo un error");
//     }
//   }, 2000);
// });

// SecondPromise
// .then((result) => {
//     console.log(result)
// })
// .catch((err) => console.log(err))


//  ·Fetch API (petición de info a una api)
//La API Fetch proporciona una interfaz para obtener recursos (incluso a través de la red).
// const urlPais = "https://restcountries.com/v2/all"; //api de paises
// fetch(urlPais)
// .then((response) => response.json()) //Acceder a los datos de la api como json
// .then((data) => {
// //obtener los datos
// console.log(data) //-> consologuea la info recibida
// })
// .catch((error) => console.error(error)); //manejo de errores, si ocurre algo incorrecto.

//  ·Async y Await
//Es una forma de manejar las promesas. (facil de entender y limpio)
// const cuad2 = async function (n) {
//   return n * n
// };

//·La palabra -> async (delante de la fn) significa que la fn devolvera una promesa
//·Para acceder al valor de la promesa, se utiliza la palabra -> await
// const value = await cuad2(2);
// console.log(value)

// const calculateSquare = async () => {
//   const value = await cuad2(4);
//   console.log(value);
// };
// calculateSquare(); -> 16

//·Ejemplo completo:
//promesa
// const url = "https://restcountries.com/v2/all";
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.error(error));

//async y await
// const fetchData = async () => {
//   try {
//     const response = await fetch(url); //-> almacenará la respuesta de la solicitud
//     const countries = await response.json();
//     console.log(countries);
//   } catch (err) {
//     console.error(err);
//   }
// };
// console.log("===== async and await");
// fetchData();

//  ·Ejercicios: Nivel 1
//Lee la API de los países utilizando fetch e imprime el nombre del país, la capital, los idiomas, la población y la superficie.
const countriesAPI = "https://restcountries.com/v2/all";
// fetch(countriesAPI)
// .then((response) => response.json())
// .then((data) => {
//     data.forEach((coun) => {
//         console.log("Pais:", coun.name);
//         console.log("Capital:", coun.capital);
//         console.log("Idiomas:", coun.languages.map(lengua => lengua.name).join(', '));
//         console.log("Poblacion:", coun.population);
//         console.log("Superficie:", coun.area)
//     })
// })
// .catch((err) => console.error(err));

//  ·Ejercicios: Nivel 2
//Imprime todos los nombres de los gatos en la variable catNames:
const catsAPI = "https://api.thecatapi.com/v1/breeds";
// const catsInfo = async () => {
//     try {
//          const response = await fetch(catsAPI);
//          const cats = await response.json();
//          console.log(cats);
//         //  cats.forEach((nameCats) => {
//         //      console.log(nameCats.name);
//         //  })
//      }
//      catch(err) {
//          console.error(err)
//      }
//  };
// catsInfo()

//·Otra forma de realizar el ejercicio:
// const catsInfo = async () => {
//     try {
//         const response = await fetch(catsAPI);
//         const cats = await response.json();
//         //Creamos un arreglo para almacenar los nombres de los gatos
//         const catNames = [];
//         //Utilizamos el método forEach para iterar sobre cada objeto de gato en el arreglo
//         cats.forEach((cat) => {
//             catNames.push(cat.name);
//         });
//         return catNames;
//     }
//     catch(err) {
//         console.error(err);
//     }
// };
// Llamamos a la función y esperamos que retorne el arreglo de nombres de gatos
// catsInfo()
//     .then((catNames) => {
//         console.log(catNames); // Imprimimos el arreglo de nombres de gatos
//     });


//  ·Ejercicios: Nivel 3
//Lee el api de los gatos y encuentra el peso medio del gato en unidad métrica:
const catsWeight = async () => {
    try {
        const response = await fetch(catsAPI);
        const dataCat = await response.json();

        let totalWeight = 0;
        let totalCats = 0;

        dataCat.forEach((cat) => {
            const weightParts = cat.weight.metric.split('-');
            if (weightParts.length === 2) {
                const minWeight = parseInt(weightParts[0]);
                const maxWeight = parseInt(weightParts[1]);
                
                // Verificamos si minWeight y maxWeight son números válidos
                if (!isNaN(minWeight) && !isNaN(maxWeight)) {
                    const promedio = (minWeight + maxWeight) / 2;
                    totalWeight += promedio;
                    totalCats++;
                }
            }
        });

        // Manejamos el caso cuando totalCats es 0 para evitar dividir por 0
        const promedioWeight = totalCats !== 0 ? totalWeight / totalCats : 0;
        console.log("Peso medio de los gatos en unidades métricas:", promedioWeight);
    }
    catch (err) {
        console.error(err);
    }
};

catsWeight();