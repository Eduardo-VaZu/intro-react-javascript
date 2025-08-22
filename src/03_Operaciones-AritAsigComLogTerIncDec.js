// === DECLARACIÓN DE VARIABLES PARA EJEMPLOS ===
let a = 10;
let b = 5;
let c = 10;
let d = "5"; // Una cadena de texto para mostrar un punto importante

// === 1. OPERADORES ARITMÉTICOS ===
// Se usan para realizar operaciones matemáticas.
console.log("=== OPERADORES ARITMÉTICOS ===");
console.log(`a + b = ${a + b}`);
console.log(`a - b = ${a - b}`);
console.log(`a * b = ${a * b}`);
console.log(`a / b = ${a / b}`);
console.log(`a % b = ${a % b}`);
console.log(`a ** b = ${a ** b}`);

// === 2. OPERADORES DE ASIGNACIÓN ===
// Se usan para asignar valores a variables.
console.log("\n=== OPERADORES DE ASIGNACIÓN ===");
let x = 20; // Operador de asignación simple (=)
console.log(`x inicialmente es: ${x}`);

x += 5; // Equivalente a x = x + 5
console.log(`x después de x += 5 es: ${x}`);

x -= 10; // Equivalente a x = x - 10
console.log(`x después de x -= 10 es: ${x}`);

x *= 2; // Equivalente a x = x * 2
console.log(`x después de x *= 2 es: ${x}`);

// y otros como /=, %=, **=

// === 3. OPERADORES DE COMPARACIÓN ===
// Comparan valores y devuelven un booleano (true o false).
console.log("\n=== OPERADORES DE COMPARACIÓN ===");

// ==  (Igualdad, solo compara el valor, no el tipo de dato)
console.log(`a == c (${a} == ${c}): ${a == c}`);
console.log(`a == b (${a} == ${b}): ${a == b}`);
console.log(`b == d (${b} == '${d}'): ${b == d}`); // JavaScript convierte el tipo

// === (Igualdad estricta, compara valor Y tipo de dato)
console.log(`b === d (${b} === '${d}'): ${b === d}`); // Porque uno es número y el otro es string
console.log(`b === 5: ${b === 5}`);
console.log(`b === 5: ${b === '5'}`);

// != (Desigualdad, solo compara el valor)
console.log(`a != b (${a} != ${b}): ${a != b}`);

// !== (Desigualdad estricta, compara valor Y tipo)
console.log(`b !== d (${b} !== '${d}'): ${b !== d}`);

// > (Mayor que), < (Menor que), >= (Mayor o igual que), <= (Menor o igual que)
console.log(`a > b (${a} > ${b}): ${a > b}`);
console.log(`a >= c (${a} >= ${c}): ${a >= c}`);

// === 4. OPERADORES LÓGICOS ===
// Se usan para combinar expresiones booleanas.
const esMayorDeEdad = true;
const tieneLicencia = false;
console.log("\n=== OPERADORES LÓGICOS ===");

// && (AND lógico): Devuelve true si ambas expresiones son true.
console.log(
  `esMayorDeEdad && tieneLicencia: ${esMayorDeEdad && tieneLicencia}`
);

// || (OR lógico): Devuelve true si al menos una de las expresiones es true.
console.log(
  `esMayorDeEdad || tieneLicencia: ${esMayorDeEdad || tieneLicencia}`
);

// ! (NOT lógico): Invierte el valor booleano.
console.log(`!esMayorDeEdad: ${!esMayorDeEdad}`);

// === 5. OPERADOR TERNARIO ===
// Una forma concisa de escribir una sentencia `if-else`.
// Sintaxis: (condición) ? expresión_si_true : expresión_si_false;
console.log("\n=== OPERADOR TERNARIO ===");
const puedeConducir =
  esMayorDeEdad && tieneLicencia ? "Puede conducir" : "No puede conducir";
console.log(puedeConducir); // "No puede conducir"

// === 6. OPERADORES DE INCREMENTO/DECREMENTO ===
// Se usan para aumentar o disminuir en 1 un valor numérico.
console.log("\n=== OPERADORES DE INCREMENTO/DECREMENTO ===");
let contador = 0;
console.log(`Contador inicial: ${contador}`);

contador++; // Aumenta el valor en 1 (post-incremento)
console.log(`Después de contador++: ${contador}`); // 1

++contador; // Aumenta el valor en 1 (pre-incremento)
console.log(`Después de ++contador: ${contador}`); // 2

contador--; // Disminuye el valor en 1
console.log(`Después de contador--: ${contador}`); // 1
