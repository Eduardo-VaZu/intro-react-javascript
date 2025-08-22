// === DECLARACIÓN DE VARIABLES PARA LOS EJEMPLOS ===
const edad = 20;
const tieneLicencia = true;
const diaDeLaSemana = "lunes";
const frutas = ["manzana", "pera", "uva", "sandía"];
const persona = {
  nombre: "Carlos",
  edad: 30,
  ciudad: "Madrid",
};
// =========================================================
// === 1. CONDICIONALES (IF, ELSE IF, ELSE) ===
// =========================================================
console.log("--- 1. CONDICIONALES ---");

// Un simple 'if'
if (edad >= 18) {
  console.log("Puedes votar.");
}

// 'if-else'
if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}

// 'if-else if-else' con operadores lógicos
if (edad >= 18 && tieneLicencia) {
  console.log("Puedes conducir legalmente.");
} else if (edad >= 18 && !tieneLicencia) {
  console.log("Eres mayor de edad, pero necesitas una licencia para conducir.");
} else {
  console.log("No puedes conducir (ni por edad ni por licencia).");
}

// =========================================================
// === 2. OPERADOR TERNARIO ===
// =========================================================
console.log("\n--- 2. OPERADOR TERNARIO ---");
// Es una forma más corta de escribir un 'if-else' simple.
// Sintaxis: (condición) ? valor_si_verdadero : valor_si_falso;
const estadoEdad = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(`Estado de la edad: ${estadoEdad}`);

// =========================================================
// === 3. SENTENCIA SWITCH ===
// =========================================================
console.log("\n--- 3. SENTENCIA SWITCH ---");
// Útil cuando tienes múltiples condiciones basadas en el valor de una sola variable.
switch (diaDeLaSemana) {
  case "lunes":
    console.log("¡Animo! Es el inicio de la semana.");
    break; // El 'break' es crucial para salir del switch.
  case "viernes":
    console.log("¡Casi es fin de semana!");
    break;
  case "sábado":
  case "domingo": // Puedes agrupar múltiples casos si la acción es la misma.
    console.log("¡Es fin de semana!");
    break;
  default: // El 'default' es como el 'else' y se ejecuta si ningún caso coincide.
    console.log("Es un día de la semana.");
}

// =========================================================
// === 4. BUCLES (LOOPS) ===
// =========================================================
console.log("\n--- 4. BUCLES ---");

// Bucle 'for': ideal cuando sabes el número exacto de iteraciones.
// Sintaxis: for (inicialización; condición; incremento)
console.log("Ejemplo de bucle 'for':");
for (let i = 0; i < 5; i++) {
  console.log(`El valor de i es: ${i}`);
}

// Bucle 'for' para recorrer un array
console.log("\nRecorriendo un array con 'for':");
for (let i = 0; i < frutas.length; i++) {
  console.log(`Fruta en la posición ${i}: ${frutas[i]}`);
}

// Bucle 'while': se ejecuta mientras una condición sea verdadera.
console.log("\nEjemplo de bucle 'while':");
let contador = 0;
while (contador < 3) {
  console.log(`Contador: ${contador}`);
  contador++; // Es importante que la variable cambie, o será un bucle infinito.
}

// Bucle 'do-while': similar al 'while', pero el bloque de código se ejecuta al menos una vez.
console.log("\nEjemplo de bucle 'do-while':");
let otroContador = 0;
do {
  console.log(`Otro contador: ${otroContador}`);
  otroContador++;
} while (otroContador < 1); // La condición se evalúa después de la primera ejecución.

// Bucle 'for...of': la forma más moderna y simple de recorrer un array.
console.log("\nRecorriendo un array con 'for...of':");
for (const fruta of frutas) {
  console.log(`Fruta: ${fruta}`);
}

// =========================================================
// === 1. BUCLE 'for' ESTÁNDAR ===
// =========================================================
// La sintaxis clásica que ya hemos visto. Ideal cuando necesitas
// un control preciso sobre el índice y la iteración.
console.log("--- 1. Bucle 'for' estándar ---");
for (let i = 0; i < frutas.length; i++) {
  console.log(`Fruta en el índice ${i}: ${frutas[i]}`);
}

// =========================================================
// === 2. BUCLE 'for...in' ===
// =========================================================
// Este bucle itera sobre las PROPIEDADES ENUMERABLES de un objeto.
// Retorna las CLAVES (los "nombres" de las propiedades), no los valores.
// NO se recomienda usarlo para arrays.
console.log("\n--- 2. Bucle 'for...in' (para objetos) ---");
for (const clave in persona) {
  console.log(`${clave}: ${persona[clave]}`);
}

// Advertencia: Al usar 'for...in' en arrays, se obtienen los índices como strings.
// Puede dar resultados inesperados si el array tiene propiedades adicionales.
// Por esta razón, se prefiere 'for...of' o 'forEach' para arrays.
console.log("\nEjemplo de 'for...in' con un array (¡no recomendado!):");
for (const indice in frutas) {
  console.log(`Índice: ${indice}, Valor: ${frutas[indice]}`);
}

// =========================================================
// === 3. BUCLE 'for...of' ===
// =========================================================
// La forma moderna y preferida de iterar sobre un array o cualquier objeto iterable.
// Retorna directamente los VALORES de los elementos.
console.log("\n--- 3. Bucle 'for...of' (para iterables como arrays) ---");
for (const fruta of frutas) {
  console.log(`Valor de la fruta: ${fruta}`);
}

// =========================================================
// === 4. MÉTODO 'Array.prototype.forEach()' ===
// =========================================================
// Es un método de array que toma una función de "callback"
// y la ejecuta para cada elemento del array.
console.log("\n--- 4. Método 'forEach()' ---");
frutas.forEach(function (fruta, indice) {
  console.log(`Fruta: ${fruta} en la posición ${indice}`);
});
// La sintaxis con una función de flecha es muy común:
frutas.forEach((fruta) => console.log(`Fruta con flecha: ${fruta}`));
frutas.forEach(()=>{
  
})