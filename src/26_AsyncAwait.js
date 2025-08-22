// URL base de la API de JSONPlaceholder
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

// === 1. LEER RECURSO (GET) ===
// Esta función lee un post específico y maneja los errores.
async function obtenerPost(id) {
  console.log(`\n--- Obteniendo post con ID: ${id} ---`);
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Error de servidor: ${response.status}`);
    }
    const data = await response.json();
    console.log("Post obtenido exitosamente:", data);
  } catch (error) {
    console.error("Error al obtener el post:", error.message);
  }
}

// === 2. CREAR RECURSO (POST) ===
// Esta función crea un nuevo post en el servidor.
async function crearPost(nuevoPost) {
  console.log("\n--- Creando un nuevo post ---");
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoPost),
    });
    if (!response.ok) {
      throw new Error(`Error de servidor: ${response.status}`);
    }
    const data = await response.json();
    console.log("Post creado exitosamente:", data);
  } catch (error) {
    console.error("Error al crear el post:", error.message);
  }
}

// === 3. ACTUALIZAR RECURSO (PUT) ===
// Esta función actualiza un post existente.
async function actualizarPost(id, postActualizado) {
  console.log(`\n--- Actualizando post con ID: ${id} ---`);
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postActualizado),
    });
    if (!response.ok) {
      throw new Error(`Error de servidor: ${response.status}`);
    }
    const data = await response.json();
    console.log("Post actualizado exitosamente:", data);
  } catch (error) {
    console.error("Error al actualizar el post:", error.message);
  }
}

// === 4. ELIMINAR RECURSO (DELETE) ===
// Esta función elimina un post.
async function eliminarPost(id) {
  console.log(`\n--- Eliminando post con ID: ${id} ---`);
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Error de servidor: ${response.status}`);
    }
    // Para DELETE, la API retorna una respuesta vacía, por lo que no procesamos JSON.
    console.log(
      `Post con ID ${id} eliminado. Estado de la respuesta: ${response.status}`
    );
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
    title: "Post nuevo con Async/Await",
    body: "Este es el contenido de un post creado con Fetch y Async/Await.",
    userId: 1,
  };
  await crearPost(nuevoPost);

  // 3. Actualizar el post
  const postParaActualizar = {
    id: 1,
    title: "Post actualizado con Async/Await",
    body: "Este es el nuevo contenido del post número 1.",
    userId: 1,
  };
  await actualizarPost(1, postParaActualizar);

  // 4. Eliminar el post
  await eliminarPost(1);
})();
