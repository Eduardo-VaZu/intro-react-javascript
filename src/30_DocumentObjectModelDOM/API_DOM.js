import axios from "axios";

const API_URL = `https://jsonplaceholder.typicode.com/posts`;

async function obtenerPost() {
  // Seleccionamos el contenedor donde se mostrarán las publicaciones
  const postsContainer = document.getElementById("posts-container");

  try {
    const response = await axios.get(API_URL);
    const posts = response.data;

    // Limpiamos el mensaje de "Cargando..."
    postsContainer.innerHTML = "";

    // Iteramos sobre cada publicación para crear elementos HTML
    posts.forEach((post) => {
      // 1. Creamos un nuevo div para cada publicación
      const postElement = document.createElement("div");
      // Añadimos las clases de Tailwind CSS directamente
      postElement.className =
        "bg-gray-50 p-6 rounded-lg shadow-sm mb-4 border border-gray-200 transition-all duration-300 hover:shadow-md";

      // 2. Creamos un título h3 y le asignamos el texto
      const titleElement = document.createElement("h3");
      titleElement.className = "text-xl font-semibold text-blue-800 mb-2";
      titleElement.innerText = post.title;

      // 3. Creamos un párrafo para el cuerpo y le asignamos el texto
      const bodyElement = document.createElement("p");
      bodyElement.className = "text-gray-700 leading-relaxed";
      bodyElement.innerText = post.body;

      // 4. Adjuntamos el título y el cuerpo al div de la publicación
      postElement.appendChild(titleElement);
      postElement.appendChild(bodyElement);

      // 5. Adjuntamos el div de la publicación al contenedor principal
      postsContainer.appendChild(postElement);
    });
  } catch (error) {
    // En caso de error, mostramos un mensaje en el contenedor con clases de Tailwind
    postsContainer.innerHTML = `<p class="text-red-600 text-center">Ocurrió un error: ${error.message}</p>`;
    console.error("Error al obtener las publicaciones:", error);
  }
}
obtenerPost();
