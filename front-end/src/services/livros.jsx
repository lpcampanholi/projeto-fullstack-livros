import axios from "axios";

const api = axios.create({baseURL: "http://localhost:3000/livros"});

async function getLivros() {
  const res = await api.get("/");
  return res.data;
};

async function getLivroPorId(id) {
  const res = await api.get(`/${id}`)
  return res.data;
};

async function postLivro(livro) {
  const keysFromLivros = Object.keys(livro)
  const formData = new FormData();
  keysFromLivros.forEach(key => {
    formData.append(key, livro[key])
  })
  // formData.set("nome", livro.nome)
  // formData.set("imagem", livro.imagem)
  const res = await api.post("/", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
  return res.data;
};

async function putLivro(id, livro) {
  const res = await api.put(`/${id}`, livro);
  return res.data;
};

async function deleteLivro(id) {
  const res = await api.delete(`/${id}`,);
  return res.data;
};

export {
  getLivros,
  getLivroPorId,
  postLivro,
  putLivro,
  deleteLivro
};
