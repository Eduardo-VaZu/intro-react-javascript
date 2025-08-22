// === 1. CREAR UNA PROMESA ===
// El constructor de Promesa recibe una función con dos parámetros: `resolve` y `reject`.
// `resolve` se llama si la operación es exitosa.
// `reject` se llama si la operación falla.

const miPrimeraPromesa = new Promise((resolve, reject) => {
  // Simulamos una operación asincrónica, como una llamada a una API
  const operacionExitosa = true;

  if (operacionExitosa) {
    // Si la operación es exitosa, llamamos a `resolve`
    setTimeout(() => {
      resolve("¡La operación se completó con éxito!");
    }, 2000); // 2 segundos
  } else {
    // Si la operación falla, llamamos a `reject`
    setTimeout(() => {
      reject("¡Error! La operación falló.");
    }, 2000); // 2 segundos
  }
});

// === 2. CONSUMIR UNA PROMESA CON .then(), .catch() y .finally() ===
// Para obtener el resultado de una promesa, usamos los métodos de encadenamiento.
// `.then()` se ejecuta cuando la promesa es resuelta.
// `.catch()` se ejecuta cuando la promesa es rechazada.
// `.finally()` se ejecuta siempre, sin importar el resultado.

console.log("--- 1. Consumir una Promesa ---");
console.log("Esperando la promesa...");

miPrimeraPromesa
  .then((resultado) => {
    // Este bloque se ejecuta cuando la promesa se resuelve.
    console.log("Resultado de .then():", resultado);
  })
  .catch((error) => {
    // Este bloque se ejecuta si la promesa es rechazada.
    console.error("Error de .catch():", error);
  })
  .finally(() => {
    // Este bloque se ejecuta al final, sin importar el resultado.
    console.log("El bloque .finally() siempre se ejecuta.");
    console.log("---------------------------------------");
  });

// === 3. CREAR UNA FUNCIÓN QUE RETORNA UNA PROMESA ===
// Esta es la forma más común de usar promesas, encapsulándolas en funciones.

function obtenerDatosDeUsuario(usuarioId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usuarioId === 123) {
        resolve({ id: 123, nombre: "Carlos" });
      } else {
        reject("Error: Usuario no encontrado.");
      }
    }, 1500);
  });
}

// Llamada a la función con un ID válido
obtenerDatosDeUsuario(123)
  .then((usuario) => {
    console.log("--- 2. Promesa encapsulada en función ---");
    console.log("Usuario encontrado:", usuario.nombre);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Finalizando búsqueda de usuario válido.");
    console.log("-----------------------------------------");
  });

// Llamada a la función con un ID no válido
obtenerDatosDeUsuario(456)
  .then((usuario) => {
    console.log("Usuario encontrado:", usuario.nombre);
  })
  .catch((error) => {
    console.error("--- 3. Manejo de error ---");
    console.error(error);
  })
  .finally(() => {
    console.log("Finalizando búsqueda de usuario no válido.");
    console.log("-----------------------------------------");
  });
