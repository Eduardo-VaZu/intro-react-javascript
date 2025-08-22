// === 1. UNA FUNCIÓN QUE RETORNA UNA PROMESA ===
// Esta es la forma estándar de manejar operaciones asíncronas, como una llamada a una API.
// La función `obtenerDatos` retorna una nueva Promise.
function obtenerDatos(id) {
  return new Promise((resolve, reject) => {
    // Simulamos una operación que toma tiempo
    setTimeout(() => {
      if (id === 1) {
        // La operación fue exitosa, resolvemos la promesa
        const datos = { id: 1, nombre: "Laptop", precio: 1500 };
        resolve(datos);
      } else {
        // La operación falló, rechazamos la promesa
        reject(new Error("No se encontraron datos para el ID proporcionado."));
      }
    }, 2000); // 2 segundos
  });
}

// === 2. USANDO LA FUNCIÓN CON .then() y .catch() ===
// Al llamar a la función, usas `.then()` para el éxito y `.catch()` para el error.

console.log("--- 2. Usando la función (caso de éxito) ---");

obtenerDatos(1)
  .then((datos) => {
    // Este bloque se ejecuta si la promesa se resuelve
    console.log("Datos obtenidos:", datos);
  })
  .catch((error) => {
    // Este bloque se ejecuta si la promesa es rechazada
    console.error("Error capturado:", error.message);
  });

console.log("\n--- 3. Usando la función (caso de error) ---");

obtenerDatos(2)
  .then((datos) => {
    console.log("Datos obtenidos:", datos);
  })
  .catch((error) => {
    // Este bloque se ejecuta, capturando el error del ID incorrecto
    console.error("Error capturado:", error.message);
  });

// === 4. ENCANDENAMIENTO DE PROMESAS CON FUNCIONES ===
// Puedes encadenar múltiples llamadas a estas funciones para ejecutar una secuencia
// de operaciones asíncronas.

function obtenerUsuario() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("\nObteniendo usuario...");
      resolve({ id: 101, nombre: "Alice" });
    }, 1000);
  });
}

function obtenerPublicaciones(usuarioId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Obteniendo publicaciones del usuario " + usuarioId);
      resolve(["Post 1", "Post 2"]);
    }, 1000);
  });
}

console.log("--- 4. Encadenamiento de funciones ---");

obtenerUsuario()
  .then((usuario) => {
    // El valor de `usuario` es el objeto { id: 101, nombre: "Alice" }
    return obtenerPublicaciones(usuario.id);
  })
  .then((publicaciones) => {
    // El valor de `publicaciones` es el arreglo ["Post 1", "Post 2"]
    console.log("Publicaciones finales:", publicaciones);
  })
  .catch((error) => {
    console.error("Un error ocurrió en la cadena:", error);
  });
