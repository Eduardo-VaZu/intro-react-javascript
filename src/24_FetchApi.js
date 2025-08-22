// URLs de una API REST de ejemplo (JSONPlaceholder)
const BASE_URL = "https://jsonplaceholder.typicode.com/posts"
const API_URL_INVALIDA = "https://jsonplaceholder.typicode.com/posts/999999";

// === 1. PETICIÓN BÁSICA CON FETCH (GET) ===
// El método `fetch()` retorna una Promesa que se resuelve con el objeto `Response`.
// Luego, usamos `.then()` para procesar la respuesta y `.catch()` para los errores.

console.log("--- 1. Petición básica con Fetch (GET) ---");

fetch(`${BASE_URL}/${1}`)
  .then((response) => {
    // La primera promesa se resuelve cuando la respuesta es recibida,
    // no cuando los datos están listos. Aquí verificamos si la respuesta
    // fue exitosa (código 200-299).
    if (!response.ok) {
      throw new Error(`Error de red: ${response.status}`);
    }
    // Para obtener los datos en formato JSON, debemos llamar a `response.json()`.
    // Esto también retorna una promesa.
    return response.json();
  })
  .then((data) => {
    // La segunda promesa se resuelve con los datos JSON ya listos.
    console.log("Datos obtenidos:", data);
    console.log(`Título del post: ${data.title}`);
  })
  .catch((error) => {
    // Este bloque captura cualquier error en la cadena, ya sea de red
    // o al procesar los datos.
    console.error("Hubo un problema con la petición:", error);
  });

// === 2. PETICIÓN INTERACTIVA CON FETCH (POST) ===
// Una petición POST se usa para crear nuevos recursos en el servidor.
// Se requiere configurar el método, el cuerpo (body) y las cabeceras (headers).

console.log("\n--- 2. Petición interactiva con Fetch (POST) ---");

const nuevoPost = {
  title: "Mi nuevo post",
  body: "Este es el contenido de mi nuevo post, creado con Fetch API.",
  userId: 1,
};

fetch(BASE_URL, {
  method: "POST", // Definimos el método como POST
  headers: {
    "Content-Type": "application/json", // Indicamos que el cuerpo es un JSON
  },
  body: JSON.stringify(nuevoPost), // Convertimos el objeto a una cadena JSON
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error de red: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // La API de ejemplo retorna el objeto creado, incluyendo un nuevo 'id'
    console.log("Post creado exitosamente:", data);
    console.log(`El nuevo ID del post es: ${data.id}`);
  })
  .catch((error) => {
    console.error("Hubo un problema al crear el post:", error);
  });

// === 3. PETICIÓN INTERACTIVA CON FETCH (PUT) ===
// Una petición PUT se usa para actualizar completamente un recurso existente en el servidor.
// Al igual que con POST, se configura el método, el cuerpo (body) y las cabeceras (headers).

console.log("\n--- 3. Petición interactiva con Fetch (PUT) ---");

const postActualizado = {
  id: 1, // Es común incluir el ID en el cuerpo para PUT
  title: "Título del post actualizado",
  body: "Este es el contenido actualizado del post número 1.",
  userId: 1,
};

fetch(`${BASE_URL}/${1}`, {
  method: "PUT", // Definimos el método como PUT
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(postActualizado),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error de red: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // La API de ejemplo retorna el objeto con los datos actualizados
    console.log("Post actualizado exitosamente:", data);
  })
  .catch((error) => {
    console.error("Hubo un problema al actualizar el post:", error);
  });

// === 4. PETICIÓN INTERACTIVA CON FETCH (DELETE) ===
// Una petición DELETE se usa para eliminar un recurso del servidor.
// Generalmente, no requiere un cuerpo, solo el método.

console.log("\n--- 4. Petición interactiva con Fetch (DELETE) ---");

fetch(`${BASE_URL}/${1}`, {
  method: "DELETE", // Definimos el método como DELETE
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error de red: ${response.status}`);
    }
    // Para DELETE, la respuesta es a menudo vacía. No intentamos leer el JSON.
    console.log(
      `Recurso eliminado. Estado de la respuesta: ${response.status}`
    );
    // Podemos retornar la respuesta para el siguiente then si fuera necesario.
    return response;
  })
  .catch((error) => {
    console.error("Hubo un problema al eliminar el post:", error);
  });

// === 5. MANEJO DE ERRORES CON FETCH (URL INVÁLIDA) ===
// El manejo de errores es el mismo sin importar el método (GET, POST, etc.).

console.log("\n--- 5. Manejo de errores con Fetch ---");

fetch(API_URL_INVALIDA)
  .then((response) => {
    console.log(`Estado de la respuesta: ${response.status}`);
    if (!response.ok) {
      // Lanzamos un error explícitamente para que sea capturado por el `.catch()`
      throw new Error(
        `Error de servidor: No se encontró el recurso (${response.status})`
      );
    }
    return response.json();
  })
  .then((data) => {
    // Este bloque no se ejecutará si la respuesta no es OK
    console.log("Datos obtenidos:", data);
  })
  .catch((error) => {
    // Este `catch` captura el error que lanzamos en el `then` anterior
    console.error("Hubo un problema con la petición:", error.message);
  });
