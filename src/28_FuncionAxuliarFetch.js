// URL base de la API de JSONPlaceholder
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

// === 1. FUNCIÓN AUXILIAR PARA FETCH ===
// Esta función encapsula la lógica repetitiva de fetch:
// - Llama a la API con los parámetros dados.
// - Verifica si la respuesta fue exitosa (`response.ok`).
// - Lanza un error si el status es 400 o superior.
// - Parsea la respuesta a JSON.
// Esto hace que el resto del código sea mucho más limpio y corto.
async function fetchApi(url, options = {}) {
  const defaultHeaders = { "Content-Type": "application/json" };
  const finalOptions = {
    ...options,
    headers: { ...defaultHeaders, ...options.headers },
  };

  const response = await fetch(url, finalOptions);

  if (!response.ok) {
    let errorBody;
    try {
      // Intenta obtener el cuerpo del error, si existe
      errorBody = await response.text();
      errorBody = JSON.parse(errorBody); // Intenta convertirlo a JSON
    } catch (e) {
      // Si falla, queda como texto o vacío (p.ej., respuestas 204/205)
    }

    const errorMessage = `Error de servidor: ${response.status} - ${
      response.statusText
    }${errorBody ? ` - ${JSON.stringify(errorBody)}` : ""}`;
    throw new Error(errorMessage);
  }

  // Verifica si la respuesta tiene cuerpo (p.ej., 204 No Content no tiene)
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return await response.json();
  }
  return await response.text(); // o response.blob(), etc., según el caso
}

// === 2. OBTENER TODOS LOS POSTS (GET) ===
async function obtenerPosts() {
  console.log(`\n--- Obteniendo todos los posts ---`);

  try {
    const data = await fetchApi(BASE_URL);
    console.log("Posts obtenidos exitosamente:", data);
  } catch (error) {
    console.error("Error al obtener los posts:", error.message);
  }
}

// === 3. OBTENER UN POST ESPECÍFICO (GET) ===
async function obtenerPostPorId(id) {
  console.log(`\n--- Obteniendo post con ID: ${id} ---`);
  try {
    const data = await fetchApi(`${BASE_URL}/${id}`);
    console.log("Post obtenido exitosamente:", data);
    console.log(`Título: ${data.title}`);
    console.log(`Cuerpo: ${data.body}`);
  } catch (error) {
    console.error("Error al obtener el post:", error.message);
  }
}

// === 4. CREAR UN NUEVO POST (POST) ===
async function crearNuevoPost(post) {
  console.log(`\n--- Creando un nuevo post ---`);
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(post),
    };
    const data = await fetchApi(BASE_URL, options);
    console.log("Post creado exitosamente:", data);
  } catch (error) {
    console.error("Error al crear el post:", error.message);
  }
}

// === 5. ACTUALIZAR UN POST EXISTENTE (PUT) ===
async function actualizarPost(id, updatedPost) {
  console.log(`\n--- Actualizando el post con ID: ${id} ---`);
  try {
    const options = {
      method: "PUT",
      body: JSON.stringify(updatedPost),
    };
    const data = await fetchApi(`${BASE_URL}/${id}`, options);
    console.log("Post actualizado exitosamente:", data);
  } catch (error) {
    console.error("Error al actualizar el post:", error.message);
  }
}

// === 6. ELIMINAR UN POST (DELETE) ===
async function eliminarPost(id) {
  console.log(`\n--- Eliminando el post con ID: ${id} ---`);
  try {
    const options = {
      method: "DELETE",
    };
    const data = await fetchApi(`${BASE_URL}/${id}`, options);
    console.log("Post eliminado exitosamente:", data);
  } catch (error) {
    console.error("Error al eliminar el post:", error.message);
  }
}

// === EJECUTANDO LAS FUNCIONES ===
(async () => {
  // 1. Obtener todos los posts
  await obtenerPosts();

  // 2. Obtener un post específico (por ejemplo, el post con ID 1)
  await obtenerPostPorId(1);

  // 3. Crear un nuevo post
  const nuevoPost = {
    userId: 1,
    title: "Mi nuevo post",
    body: "Este es el contenido de mi nuevo post.",
  };
  await crearNuevoPost(nuevoPost);

  // 4. Actualizar un post existente (por ejemplo, el post con ID 1)
  const postActualizado = {
    id: 1,
    userId: 1,
    title: "Post actualizado",
    body: "Este es el contenido actualizado del post.",
  };
  await actualizarPost(1, postActualizado);

  // 5. Eliminar un post (por ejemplo, el post con ID 1)
  await eliminarPost(1);
})();
