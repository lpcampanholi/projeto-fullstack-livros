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
  const res = await api.post("/", livro);
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
