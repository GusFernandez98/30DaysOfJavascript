const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
  ];

// ·En el array de países, verifique si 'Ethiopia' existe en el array si existe, imprima 'ETHIOPIA'.
// Si no existe agregar a la lista de países.

let pais = 'Ethiopia'
let search = countries.includes(pais) // da true -> significa que existe.

  // search 
  // ? console.log('Si se encuentra Ethiopia')
  // : countries.push('Se agrego al array', pais)

 //console.log(countries) -> Si se encuentra Ethiopia:
// [
//   'Albania',  'Bolivia',
//   'Canada',   'Denmark',
//   'Ethiopia', 'Finland',
//   'Germany',  'Hungary',
//   'Ireland',  'Japan',
//   'Kenya'
// ]


// module.exports = countries;