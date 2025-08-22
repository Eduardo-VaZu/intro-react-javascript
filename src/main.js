import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";
const postForm = document.getElementById("post-form");
const formTitle = document.getElementById("form-title");
const postTitle = document.getElementById("post-title");
const postBody = document.getElementById("post-body");
const postId = document.getElementById("post-id");
const cancelButton = document.getElementById("cancel-button");
const postsContainer = document.getElementById("posts-container");
const refreshButton = document.getElementById("refresh-button");

async function renderPosts() {
  try {
    const response = await axios.get(API_URL);
    const posts = response.data;
    postsContainer.innerHTML = "";
    posts.forEach((post) => {
      insertCard(post);
    });
  } catch (error) {
    postsContainer.innerHTML = `<p class="text-red-600 text-center">Ocurrió un error al cargar las publicaciones: ${error.message}</p>`;
    console.error(error);
  }
}
3;
async function createPost(post) {
  try {
    const response = await axios.post(API_URL, post);
    const data = response.data;
    insertCard(data);
  } catch (error) {
    console.error("Error al actualizar la publicación:", error);
  }
}

async function updatePost(id, post) {
  try {
    //await axios.put(`${API_URL}/${id}`, post); // => Reemplaza todo el post en el backend.
    //await renderPosts();
    await axios.patch(`${API_URL}/${id}`, {
      title: post.title,
      body: post.body,
    }); // => Actualiza solo los campos enviados.
    const cardToUpdate = document.querySelector(`[data-id="${id}"]`);
    if (cardToUpdate) {
      cardToUpdate.querySelector("h3").textContent = post.title;
      cardToUpdate.querySelector("p").textContent = post.body;
    } else {
      console.warn(
        "La tarjeta no existe en el DOM, pero se actualizó en el backend."
      );
    }
    resetForm();
  } catch (error) {
    console.error("Error al actualizar la publicación:", error);
  }
}

async function deletePost(id) {
  if (confirm("¿Estás seguro de que quieres eliminar esta publicación?")) {
    try {
      await axios.delete(`${API_URL}/${id}`);
      //await renderPosts();
      const cardToDelete = document.querySelector(`[data-id="${id}"]`);
      if (cardToDelete) {
        //cardToDelete.remove();
        cardToDelete.style.opacity = "0";
        setTimeout(() => cardToDelete.remove(), 300);
      } else {
        console.warn(
          "La tarjeta no existe en el DOM, pero se eliminó del backend."
        );
      }
    } catch (error) {
      console.error("Error al eliminar la publicación:", error);
    }
  }
}

function editPost(post) {
  formTitle.innerText = "Editar Publicacion";
  postId.value = post.id;
  postTitle.value = post.title;
  postBody.value = post.body;
  postForm.scrollIntoView({ behavior: "smooth" });
}

function resetForm() {
  formTitle.innerText = "Crear Nueva Publicación";
  postId.value = "";
  postTitle.value = "";
  postBody.value = "";
}

function insertCard(post) {
  const postElement = document.createElement("div");
  postElement.dataset.id = post.id;
  postElement.className =
    "bg-gray-50 p-6 rounded-lg shadow-sm mb-4 border border-gray-200 transition-all duration-300 hover:shadow-md";

  const titleElement = document.createElement("h3");
  titleElement.className = "text-xl font-semibold text-blue-800 mb-2";
  titleElement.innerText = post.title;

  const bodyElement = document.createElement("p");
  bodyElement.className = "text-gray-700 leading-relaxed mb-4";
  bodyElement.innerText = post.body;

  const actionsDiv = document.createElement("div");
  actionsDiv.className = "flex gap-2";

  const editButton = document.createElement("button");
  editButton.className =
    "bg-yellow-500 text-white font-bold py-1 px-3 rounded-md hover:bg-yellow-600 transition duration-300";
  editButton.innerText = "Editar";
  editButton.addEventListener("click", () => editPost(post));

  const deleteButton = document.createElement("button");
  deleteButton.className =
    "bg-red-500 text-white font-bold py-1 px-3 rounded-md hover:bg-red-600 transition duration-300";
  deleteButton.innerText = "Eliminar";
  deleteButton.addEventListener("click", () => deletePost(post.id));

  postElement.appendChild(titleElement);
  postElement.appendChild(bodyElement);
  postElement.appendChild(actionsDiv);
  actionsDiv.appendChild(editButton);
  actionsDiv.appendChild(deleteButton);

  // Se agrega al final siempre
  //postsContainer.appendChild(postElement);

  // Inserta al inicio - compatibiliad con (internet Explorer)
  //   if (postsContainer.firstChild) {
  //     postsContainer.insertBefore(postElement, postsContainer.firstChild);
  //   } else {
  //     postsContainer.appendChild(postElement);
  //   }

  //Inserta al inicio
  postsContainer.prepend(postElement);
  resetForm();
}

postForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const id = postId.value;
  const title = postTitle.value;
  const body = postBody.value;
  const newPost = {
    title,
    body,
    userId: 1,
  };
  if (id) {
    await updatePost(id, newPost);
  } else {
    await createPost(newPost);
  }
});

cancelButton.addEventListener("click", () => resetForm());
refreshButton.addEventListener("click", () => renderPosts());
