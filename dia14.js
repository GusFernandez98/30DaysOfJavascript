//·Manejo de errores
//JavaScript proporciona un mecanismo de gestion de errores, para capturar los errores en tiempo de ejecucion mediante
//el bloque try-catch-finally:
try {
    //codigo que puede tirar error
} catch (err) {
    //codigo a ejecutar si se produce un error
} finally {
    //código que se ejecutará independientemente de que se produzca un error o no
};
//·Try -> Envuelve el código sospechoso que puede arrojar error en un bloque try. La sentencia try nos permite definir
//un bloquede código para que se compruebe si hay errores mientras se ejecuta.

//·Catch -> Escribe código para hacer algo en el bloque catch cuando se produce un error. Puede tener parámetros que le
//darán info sobre el error. Se utiliza para registrar un error o mostrar mensajes especificos al usuario.

//·Finally -> Se ejecutará siempre, independientemente de que se produzca un error. Puede utilizarse para completar la 
//tarea restante o para restablecer las variables que pueden haber cambiado antes de que se produzca el error en el bloque try.

// try {
//     let lastName = "Fernández";
//     let myName = `${firstName} ${lastName}`;
// } catch (err) {
//     console.log(err) -> ReferenceError: firstName is not defined
// }

// try {
//     let lastName = "Fernandez";
//     let fullName = `${firstName} ${lastName}`;
// } catch (err) {
//     console.error(err); // podemos utilizar console.log() o console.error()
// } finally {
//     console.log("En cualquier caso se ejecutará")
// }
// ReferenceError: fistName no está definido
// En cualquier caso se ejecutará

//·El bloque de captura toma un parámetro. Es habitual pasar e, err o error como parámetro al bloque catch.
//Este parámetro es un objeto y tiene las claves nombre y mensaje. Utilicemos el nombre y el mensaje.
// try {
//     let lastName = "Fernández";
//     let fullName = fistName + " " + lastName;
// } catch (err) {
//     console.log("Name of the error", err.name);
//     console.log("Error message", err.message);
// } finally {
//     console.log("In any case I will be executed");
// }
// Name of the error ReferenceError
// Error message fistName is not defined
// In any case I will be executed

//·throw -> nos permite crear un error personalizado. Se puede pasar una cadena, un número, un booleno o un objeto.
//utiliza para lanzar una excepción. Cuando se lanza una excepcion, la expresión esfecifica el valor de la excepcion
//throw "Error2"; -> genera una excepción con un valor de cadena
//throw 42; -> genera una excepción con el valor 42
//throw true; -> genera una excepción con el valor true
//throw new Error("Required"); -> genera un objeto de error con el mensaje de Requerido

// const throwErrorEjempo = () => {
//     let mensaje;
//     let x = console.log("ingresar numero");
//     try {
//         if (x == "") throw "empty";
//         if (isNaN(x)) throw "No hay numero";
//         x = Number(x);
//         if (x < 5) throw "Demasiado bajo";
//         if (x > 10) throw "Demasiado bajo";
//     } catch (err) {
//         console.log(err)
//     }
// };
// throwErrorEjempo()

//  ·Tipos de error:
//·ReferenceError -> se ha producido una referencia ilegal, tira ReferenceError si utilizamos una variable que no ha sido declarada.
let firstName = "Asabeneh";
let fullName = firstName + " " + lastName;
//console.log(fullName) -> ReferenceError: lastName is not defined

//·SyntaxError: Se ha producido un error de sintaxis
//let square = 2 x 2;
//console.log(square)
//console.log('Hello, world")
// SyntaxError: Unexpected identifier 'x'

//·TypeError: Se ha producido un error sobre el tipo
let num = 10;
//console.log(num.toLowerCase()); -> Uncaught TypeError: num.toLowerCase is not a function