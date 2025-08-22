// Se carga la librería Axios desde una CDN.
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
import axios from 'axios'
// URL base de la API de JSONPlaceholder
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

// === 1. LEER RECURSO (GET) ===
// Con Axios, la sintaxis es más corta y no se necesita verificar `response.ok`.
async function obtenerPost(id) {
  console.log(`\n--- Obteniendo post con ID: ${id} ---`);
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    console.log("Post obtenido exitosamente:", response.data);
  } catch (error) {
    // Axios maneja errores de servidor (ej. 404) y los captura aquí.
    console.error("Error al obtener el post:", error.message);
  }
}

// === 2. CREAR RECURSO (POST) ===
// Axios permite enviar el objeto directamente, sin `JSON.stringify()`.
async function crearPost(nuevoPost) {
  console.log("\n--- Creando un nuevo post ---");
  try {
    const response = await axios.post(BASE_URL, nuevoPost);
    console.log("Post creado exitosamente:", response.data);
  } catch (error) {
    console.error("Error al crear el post:", error.message);
  }
}

// === 3. ACTUALIZAR RECURSO (PUT) ===
// Con Axios, se pasa el objeto a actualizar directamente como segundo argumento.
async function actualizarPost(id, postActualizado) {
  console.log(`\n--- Actualizando post con ID: ${id} ---`);
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, postActualizado);
    console.log("Post actualizado exitosamente:", response.data);
  } catch (error) {
    console.error("Error al actualizar el post:", error.message);
  }
}

// === 4. ELIMINAR RECURSO (DELETE) ===
// La sintaxis de Axios para DELETE también es simple y clara.
async function eliminarPost(id) {
  console.log(`\n--- Eliminando post con ID: ${id} ---`);
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    console.log(`Post con ID ${id} eliminado. Estado de la respuesta: ${response.status}`);
  } catch (error) {
    console.error("Error al eliminar el post:", error.message);
  }
}

// === EJECUTANDO LAS FUNCIONES ===
(async () => {
  // 1. Obtener un post
  await obtenerPost(1);

  // 2. Crear un nuevo post
  const nuevoPost = {
    title: 'Post nuevo con Async/Await y Axios',
    body: 'Este es el contenido de un post creado con Axios.',
    userId: 1,
  };
  await crearPost(nuevoPost);

  // 3. Actualizar el post
  const postParaActualizar = {
    id: 1,
    title: 'Post actualizado con Async/Await y Axios',
    body: 'Este es el nuevo contenido del post número 1.',
    userId: 1,
  };
  await actualizarPost(1, postParaActualizar);

  // 4. Eliminar el post
  await eliminarPost(1);
})();
