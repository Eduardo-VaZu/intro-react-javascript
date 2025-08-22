// En un archivo separado (ej. 'utils.js'), definiríamos lo siguiente:
// Exportación nombrada: Se exportan variables, funciones o clases
const PI = 3.14159;

function sumar(a, b) {
  return a + b;
}

const restar = (a, b) => a - b;

export { sumar, restar, PI };
