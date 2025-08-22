// === 1. EL PROBLEMA ANTES DEL OPERADOR ===
// Antes de `?.`, si intentabas acceder a una propiedad de un objeto
// que no existía, se lanzaba un error de tipo 'TypeError'.

console.log("--- 1. Problema antes del Optional Chaining ---");

const usuario = {
  nombre: "Juan",
  // La propiedad 'perfil' no existe aquí
};

// Acceder a 'usuario.perfil.edad' causaría un error:
// TypeError: Cannot read properties of undefined (reading 'edad')
// try {
//   console.log(usuario.perfil.edad);
// } catch (e) {
//   console.error("Error capturado:", e.message);
// }

// Se usaban comprobaciones anidadas para evitar el error, lo que hace el código verboso
if (usuario && usuario.perfil) {
  console.log(usuario.perfil.edad);
} else {
  console.log("El perfil del usuario no está disponible.");
}
console.log("-----------------------------------------");

// === 2. SOLUCIÓN CON EL OPERADOR OPTIONAL CHAINING ===
// El operador `?.` detiene la evaluación si el valor a su izquierda es
// `null` o `undefined` y simplemente retorna `undefined` en su lugar.

console.log("--- 2. Solución con Optional Chaining ---");

const usuarioConPerfil = {
  nombre: "Ana",
  perfil: {
    edad: 28,
    direccion: {
      ciudad: "Madrid",
    },
  },
};

const usuarioSinPerfil = {
  nombre: "Pedro",
};

// Acceso seguro a la edad, sin error
console.log(`Edad de Ana: ${usuarioConPerfil.perfil?.edad}`);

// Acceso seguro a la edad de Pedro, retorna 'undefined' en lugar de un error
console.log(`Edad de Pedro: ${usuarioSinPerfil.perfil?.edad}`);

// Funciona con cualquier nivel de anidamiento
console.log(`Ciudad de Ana: ${usuarioConPerfil.perfil?.direccion?.ciudad}`);
console.log(`Ciudad de Pedro: ${usuarioSinPerfil.perfil?.direccion?.ciudad}`);

// También funciona para llamar métodos o acceder a arreglos
const coche = {
  info: () => "Información del coche",
};
const bici = {};
console.log(coche.info?.());
console.log(bici.info?.());

const productos = {
  lista: ["Laptop", "Monitor"],
};
console.log(productos.lista?.[0]);
console.log(bici.lista?.[0]);
console.log("-----------------------------------------");

// === 3. COMBINANDO CON EL OPERADOR NULLISH COALESCING (??) ===
// A menudo, se usa junto con el operador `??` (Nullish Coalescing)
// para proporcionar un valor de reserva si el resultado es `null` o `undefined`.

console.log("--- 3. Combinando con Nullish Coalescing ---");

const nombreCompleto = usuarioSinPerfil.perfil?.nombre || "No disponible";
console.log(`Versión antigua (||): ${nombreCompleto}`);

const edadConReserva = usuarioSinPerfil.perfil?.edad ?? "Edad no especificada";
console.log(`Versión moderna (??): ${edadConReserva}`);
console.log("-----------------------------------------");
