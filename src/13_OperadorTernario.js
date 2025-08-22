// === 1. SINTAXIS BÁSICA ===
// La sintaxis del operador ternario es:
// condicion ? valor_si_es_verdadero : valor_si_es_falso;

console.log("--- 1. Sintaxis Básica ---");

const edad = 20;
let puedeVotar;

// Usando `if/else`
if (edad >= 18) {
  puedeVotar = "Sí puede votar";
} else {
  puedeVotar = "No puede votar";
}
console.log(`Versión con if/else: ${puedeVotar}`);

// Usando el operador ternario
const puedeVotarTernario = edad >= 18 ? "Sí puede votar" : "No puede votar";
console.log(`Versión con ternario: ${puedeVotarTernario}`);
console.log("----------------------------");

// === 2. USO DIRECTO EN TEMPLATE STRINGS ===
// Es muy común usar el operador ternario directamente en plantillas de cadena
// para mostrar resultados condicionales.

console.log("--- 2. Uso en Template Strings ---");

const estado = "activo";
const mensajeDeEstado = `El usuario está ${estado === "activo" ? "conectado" : "desconectado"}.`;
console.log(mensajeDeEstado);

const tieneNotificaciones = false;
const iconoNotificaciones = `Tienes ${tieneNotificaciones ? "nuevas" : "ninguna"} notificación.`;
console.log(iconoNotificaciones);
console.log("----------------------------");

// === 3. ANIDAMIENTO DEL OPERADOR TERNARIO ===
// Puedes anidar operadores ternarios, pero se recomienda hacerlo con moderación
// para no comprometer la legibilidad del código.
// Generalmente, un `if/else if/else` es más legible si la lógica es compleja.

console.log("--- 3. Anidamiento ---");

const puntaje = 85;
const calificacion = puntaje >= 90 ? "A" : puntaje >= 75 ? "B" : "C";
console.log(`El puntaje de ${puntaje} es una calificación: ${calificacion}`);
console.log("----------------------------");
