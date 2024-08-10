import axios from "axios";

const livrosAPI = axios.create({baseURL: "https://localhost:8000/livros"});

async function getLivros() {
  const res = await livrosAPI.get("/livros");
};
