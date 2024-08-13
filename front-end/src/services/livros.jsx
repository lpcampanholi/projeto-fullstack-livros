import axios from "axios";

const apiLivros = axios.create({baseURL: "http://localhost:3000/livros"});

async function getLivros() {
  const res = await apiLivros.get("/");
  return res.data;
};

async function createLivro(livro) {
  const res = await apiLivros.post("/", livro);
  return res.data;
};

export { getLivros, createLivro };
