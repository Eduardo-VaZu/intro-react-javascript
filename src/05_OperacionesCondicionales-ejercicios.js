const usuario = {
  nombre: "Juan",
  edad: 25,
  rol: "admin",
  activo: true,
};
const frutas = ["manzana", "banana", "cereza", "dátil", "uva"];

// =========================================================
// === 1. OPERADOR TERNARIO ===
// =========================================================
// Una forma concisa de escribir una sentencia if-else simple.
// `condicion ? valor_si_verdadero : valor_si_falso`
console.log("--- 1. Operador Ternario ---");
const mensajeEdad =
  usuario.edad >= 18
    ? "El usuario es mayor de edad."
    : "El usuario es menor de edad.";
console.log(mensajeEdad);
console.log("----------------------------");

// =========================================================
// === 2. IF-ELSE IF-ELSE ===
// =========================================================
// Para manejar múltiples condiciones y ramas de ejecución.
console.log("--- 2. Sentencia IF-ELSE ---");
if (usuario.activo && usuario.edad > 20) {
  console.log("El usuario está activo y tiene más de 20 años.");
} else if (usuario.activo) {
  console.log("El usuario está activo, pero no tiene más de 20 años.");
} else {
  console.log("El usuario no está activo.");
}
console.log("----------------------------");

// =========================================================
// === 3. SWITCH-CASE ===
// =========================================================
// Ideal para comparar un valor con múltiples casos fijos.
console.log("--- 3. Sentencia SWITCH-CASE ---");
switch (usuario.rol) {
  case "admin":
    console.log("El usuario tiene privilegios de administrador.");
    break;
  case "editor":
    console.log("El usuario puede editar contenido.");
    break;
  case "lector":
    console.log("El usuario solo puede leer.");
    break;
  default:
    console.log("El rol del usuario es desconocido.");
    break;
}
console.log("----------------------------");

// =========================================================
// === 4. BUCLE WHILE ===
// =========================================================
// Repite un bloque de código mientras una condición sea verdadera.
// La condición se verifica ANTES de la primera ejecución.
console.log("--- 4. Bucle WHILE ---");
let contador = 0;
while (contador < 5) {
  console.log(`Bucle WHILE, iteración: ${contador}`);
  contador++; // Es crucial incrementar el contador para evitar un bucle infinito.
}
console.log("----------------------------");

// =========================================================
// === 5. BUCLE DO-WHILE ===
// =========================================================
// Similar a while, pero garantiza que el bloque se ejecute al menos una vez.
// La condición se verifica DESPUÉS de la primera ejecución.
console.log("--- 5. Bucle DO-WHILE ---");
let contadorDo = 0;
do {
  console.log(`Bucle DO-WHILE, iteración: ${contadorDo}`);
  contadorDo++;
} while (contadorDo < 3);
console.log("----------------------------");

// =========================================================
// === 6. BUCLE FOR ESTÁNDAR ===
// =========================================================
// El bucle tradicional, ideal cuando conoces el número de iteraciones.
console.log("--- 6. Bucle FOR Estándar ---");
for (let i = 0; i < frutas.length; i++) {
  console.log(`FOR estándar: Fruta en el índice ${i} es ${frutas[i]}.`);
}
console.log("----------------------------");

// =========================================================
// === 7. VARIANTE: FOR...IN ===
// =========================================================
// Itera sobre las propiedades enumerables de un objeto, devolviendo las CLAVES.
// No recomendado para arrays.
console.log("--- 7. Variante FOR...IN (para objetos) ---");
for (const propiedad in usuario) {
  console.log(
    `FOR...IN: Propiedad '${propiedad}' tiene el valor: ${usuario[propiedad]}.`
  );
}
console.log("----------------------------");

// =========================================================
// === 8. VARIANTE: FOR...OF ===
// =========================================================
// Itera sobre los valores de un objeto iterable (como un array).
// La variante moderna y preferida para arrays.
console.log("--- 8. Variante FOR...OF (para arrays) ---");
for (const fruta of frutas) {
  console.log(`FOR...OF: Valor de la fruta es '${fruta}'.`);
}
console.log("----------------------------");
