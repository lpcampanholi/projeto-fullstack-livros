import axios from "axios";

const api = axios.create({baseURL: "http://localhost:3000/autores"});

async function getAutores() {
  const res = await api.get("/");
  return res.data;
};

async function createAutor(autor) {
  const res = await api.post("/", autor);
  return res.data;
};

async function deleteAutor(id) {
  const res = await api.delete(`/${id}`)
  return res.data;
};

export { getAutores, createAutor, deleteAutor };
