// =========================================================
// === 1. DECLARACIÓN DE FUNCIÓN ===
// =========================================================
// La forma clásica de definir una función. La función está "elevada" (hoisting),
// por lo que puede ser llamada antes de su declaración en el código.

function saludar(nombre) {
  console.log(`Hola, ${nombre}! Bienvenido.`);
}

console.log("--- 1. Declaración de Función ---");
saludar("Carlos");
console.log("----------------------------------");

// =========================================================
// === 2. EXPRESIÓN DE FUNCIÓN ===
// =========================================================
// La función se asigna a una variable. La función no es "elevada" (hoisting)
// y solo puede ser llamada después de su asignación.

const sumar = function (a, b) {
  return a + b;
};

console.log("--- 2. Expresión de Función ---");
const resultadoSuma = sumar(10, 5);
console.log(`El resultado de la suma es: ${resultadoSuma}`);
console.log("----------------------------------");

// =========================================================
// === 3. FUNCIONES DE FLECHA (ARROW FUNCTIONS) ===
// =========================================================
// La sintaxis moderna y concisa para definir funciones.

// 3.1. Sin parámetros
const holaMundo = () => {
  console.log("Hola, mundo!");
};

// 3.2. Con un solo parámetro (los paréntesis son opcionales)
const dobleDelNumero = (numero) => {
  return numero * 2;
};

// 3.3. Con múltiples parámetros
const multiplicar = (a, b) => {
  return a * b;
};

// 3.4. Sintaxis concisa (retorno implícito para una sola expresión)
const cuadrado = (n) => n * n;

console.log("--- 3. Funciones de Flecha ---");
holaMundo();
console.log(`El doble de 7 es: ${dobleDelNumero(7)}`);
console.log(`El resultado de 3 * 4 es: ${multiplicar(3, 4)}`);
console.log(`El cuadrado de 5 es: ${cuadrado(5)}`);
console.log("----------------------------------");

// =========================================================
// === 4. FUNCIONES CON CALLBACKS ===
// =========================================================
// Una función que se pasa como argumento a otra función.
// La función que recibe el callback se conoce como "función de orden superior".

function procesarYllamar(numero, callback) {
  console.log(`--- 4. Funciones con Callbacks ---`);
  const resultado = numero * 10;
  console.log(`Valor inicial: ${numero}. Valor procesado: ${resultado}`);
  callback(resultado);
}

// Esta es la función callback
function mostrarResultado(valor) {
  console.log(`El callback ha sido ejecutado. El resultado final es: ${valor}`);
}

// Llamamos a la función de orden superior y le pasamos el callback
procesarYllamar(25, mostrarResultado);

// También podemos usar una función de flecha como callback
procesarYllamar(10, (valor) => {
  console.log(
    `El callback (función de flecha) ha sido ejecutado. El resultado final es: ${valor}`
  );
});

console.log("----------------------------------");

// =========================================================
// === 5. PARÁMETROS POR DEFECTO ===
// =========================================================
// Podemos asignar un valor por defecto a los parámetros.
// Si no se pasa un argumento para ese parámetro, se usará el valor predeterminado.

function saludarConValorPorDefecto(nombre = "Invitado") {
  console.log(`--- 5. Parámetros por Defecto ---`);
  console.log(`Hola, ${nombre}!`);
}

saludarConValorPorDefecto("María"); // El valor es "María"
saludarConValorPorDefecto(); // No se pasa valor, se usa "Invitado"
console.log("----------------------------------");

// =========================================================
// === 6. PARÁMETROS REST (REST PARAMETERS) ===
// =========================================================
// Permite representar un número indefinido de argumentos como un array.
// Se usa la sintaxis de puntos suspensivos (...) y debe ser el último parámetro.

function sumarTodos(...numeros) {
  console.log(`--- 6. Parámetros Rest ---`);
  let total = 0;
  for (const num of numeros) {
    total += num;
  }
  return total;
}

console.log(`La suma de 1, 2 y 3 es: ${sumarTodos(1, 2, 3)}`);
console.log(`La suma de 5, 10, 15 y 20 es: ${sumarTodos(5, 10, 15, 20)}`);
console.log("----------------------------------");

// =========================================================
// === 7. EL CONTEXTO DE 'this' EN FUNCIONES ===
// =========================================================
// El valor de `this` cambia según cómo se llama la función.
// En las funciones de flecha, `this` se hereda del contexto que la rodea.
// En las funciones tradicionales, `this` se refiere al objeto que la llama.

const coche = {
  marca: "Ford",
  modelo: "Mustang",
  // Función tradicional: `this` se refiere al objeto 'coche'
  mostrarInfo: function () {
    console.log(`--- 7. El contexto de 'this' ---`);
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
  },
  // Función de flecha: `this` no tiene su propio contexto, lo hereda.
  // En este caso, hereda el `this` del contexto global (window en el navegador)
  // lo cual puede llevar a un comportamiento inesperado.
  mostrarInfoFlecha: () => {
    console.log(`--- 7. El contexto de 'this' ---`);
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`); // `this` no es `coche` aquí
  },
};

coche.mostrarInfo(); // Salida: Marca: Ford, Modelo: Mustang
coche.mostrarInfoFlecha(); // Salida: Marca: undefined, Modelo: undefined
console.log("----------------------------------");
