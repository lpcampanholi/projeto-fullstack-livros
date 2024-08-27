import axios from "axios";

const api = axios.create({baseURL: "http://localhost:3000/categorias"});

async function getCategorias() {
  const res = await api.get("/");
  return res.data;
};

async function getCategoriaPorId(id) {
  const res = await api.get(`/${id}`);
  return res.data;
};

async function postCategorias(categoria) {
  const res = await api.post("/", categoria);
  return res.data;
};

async function putCategoria(id, categoria) {
  const res = await api.put(`/${id}`, categoria);
  return res.data;
};

async function deleteCategorias(id) {
  const res = await api.delete(`/${id}`)
  return res.data;
};

export {
  getCategorias,
  getCategoriaPorId,
  postCategorias,
  putCategoria,
  deleteCategorias
};
