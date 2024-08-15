import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAutores } from "../services/autores";
import { postLivro } from "../services/livros";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  form {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 0 20%;
    padding: 1em 2em;
    background-color: #e5f1c1;
    text-align: center;
  }

  input {
    padding: 0.5em 2em;
    border-radius: 0.5em;
    border: 1px solid #333;
  }
`;

function CadastroLivros() {

  const [autores, setAutores] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [editora, setEditora] = useState("");
  const [autor, setAutor] = useState("");
  const [paginas, setPaginas] = useState(0);

  // Carregar autores
   useEffect(() => {
    fetchAutores();
  }, []);

  async function fetchAutores() {
    const autoresDaApi = await getAutores();
    setAutores(autoresDaApi);
  };

  async function criarLivro(livro) {
    const res = await postLivro(livro);
    alert(res.message);
  };

  // Criar novo Livro
  function criarNovoLivro(e) {
    e.preventDefault();
    if (!titulo || !editora || !autor || !paginas) {
      alert("Por favor, preencha todos os campos.");
      return;
    };
    const livro = { titulo, editora, autor, paginas}
    criarLivro(livro);
    setTitulo("");
    setEditora("");
    setAutor("");
    setPaginas("");
  };

  return (
    <Container>
      <form onSubmit={criarNovoLivro}>
      <h3>Novo livro</h3>

        <label htmlFor="titulo">Título</label>
        <input
          type="text"
          name="titulo"
          id="titulo"
          placeholder="Escreva o título do livro"
          onChange={(e) => setTitulo(e.target.value)}
          value={titulo}
        />

        <label htmlFor="editora">Editora</label>
        <input
          type="text"
          name="editora"
          id="editora"
          placeholder="Escreva a Editora"
          onChange={(e) => setEditora(e.target.value)}
          value={editora}
        />

        <select
          name="autor"
          id="autor"
          onChange={(e) => setAutor(e.target.value)}
          value={autor}
        >
          <option>Selecione o autor</option>
          {autores.map(autor => (
            <option key={autor._id} value={autor._id}>{autor.nome}</option>
            ))}
        </select>

        <label htmlFor="paginas">Páginas</label>
        <input
          type="number"
          name="paginas"
          id="paginas"
          placeholder="Páginas"
          onChange={(e) => setPaginas(e.target.value)}
          value={paginas} />

          <button type="submit">Salvar</button>
      </form>
  </Container>
  );
};

export default CadastroLivros;
