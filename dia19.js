//  ·CLOSURES
//JavaScript permite escribir una funcion dentro de una funcion externa.
//Si la funcion interna accede a las variables de la funcion externa entonces se llama closure.
const funcionExterna = () => {
    let count = 0;
    const funcionInterna = () => {
        count++;
        return count
    }
    return funcionInterna
};
const innerFunc = funcionExterna();
// console.log(innerFunc()) -> 1
// console.log(innerFunc()) -> 2
// console.log(innerFunc()) -> 3

const funcionExternaTwo = () => {
    let count = 0;
    const masUno = () => {
        count++;
        return count;
    };
    const menosUno = () => {
        count--;
        return count;
    };
    return {
        masUno,
        menosUno
    };
};
const fnInternas = funcionExternaTwo();
// console.log(fnInternas.masUno()) -> 1
// console.log(fnInternas.menosUno()) -> 0

//·Ejercicios: Nivel 1
//Crear una closure que tenga una función interna:
const fnPrincipal = () => {
    let pets = [];
    const fnSecundaria = () => {
        pets.push("Perro", "Gato", "Conejo");
        return pets;
    }
    return fnSecundaria;
};
const ejecucion = fnPrincipal();
//console.log(ejecucion()) -> [ 'Perro', 'Gato', 'Conejo' ]

// ·Crear una función de salida de personAccount. Tiene variables internas de nombre, apellido, ingresos y gastos.
// Tiene las funciones internas totalIncome, totalExpense, accountInfo,addIncome, addExpense y accountBalance. 
// Los ingresos son un conjunto de ingresos y su descripción y los gastos son también un conjunto de gastos con su descripción.
const personAccount = (nombre, apellido) => {
    let ingresos = [];
    let gastos = [];
//Para agregar ingresos:
    const addIngresos = (monto, descripcion) => {
        ingresos.push({ amount: monto, description: descripcion})
    };
//Para agregar gastos:
    const addGastos = (monto, descripcion) => {
        gastos.push({ amount: monto, description: descripcion})
    }; 

    const ingresoTotal = () => {
        return ingresos.reduce((total, income) => total + income.amount, 0);
    };

    const gastoTotal = () => {
        return gastos.reduce((total, expense) => total + expense.amount, 0);
    };

    const infoDeCuenta = () => {
        return {
            nombre,
            apellido,
            ingresos,
            gastos
        }
    };

    const balanceDeCuenta = () => {
        const saldo = ingresoTotal() - gastoTotal()
        return saldo
    };
//retorno un obj con las fn interiores:
    return {
        ingresoTotal,
        gastoTotal,
        addIngresos,
        addGastos,
        infoDeCuenta,
        balanceDeCuenta
    }
};

const cuentaPersona = personAccount("Luis", "Fernandez");
cuentaPersona.addIngresos(1000, "Sueldo");
cuentaPersona.addGastos(100, "Alquiler");
cuentaPersona.addGastos(60, "Comida")

//·Funciona!!
// console.log(cuentaPersona.infoDeCuenta());
// console.log("saldo", cuentaPersona.balanceDeCuenta())
// {
//     nombre: 'Luis',
//     apellido: 'Fernandez',
//     ingresos: [ { amount: 1000, description: 'Sueldo' } ],
//     gastos: [
//       { amount: 100, description: 'Alquiler' },
//       { amount: 60, description: 'Comida' }
//     ]
//   }
//   saldo 840