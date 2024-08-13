import styled from "styled-components";
import capa from "../assets/livro.png";
import { useEffect, useState } from "react";
import { createLivro, getLivros } from "../services/livros";
import { getAutores } from "../services/autores";

const Container = styled.main`
    width: 100%;
    height: 100%;
`;

// const Pesquisa = styled.section`
//   text-align: center;
//   padding: 1em;
//   background-color: #bfdae9;;

//   input {
//     text-align: center;
//     border: 1px solid darkgray;
//     border-radius: 2em;
//     padding: 0.5em 10em;
//   }
// `;

const ContainerLivros = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 0 2em;
  box-sizing: border-box;
  padding-bottom: 1em;
`;

const Livro = styled.div`
  text-align: center;
  border: 1px solid darkgray;
  border-radius: 8px;
  margin: 1em;
  padding: 1em 0;

  h3 {
    font-size: 1em;
  }

  p {
    font-size: 0.8em;
  }

  img {
    width: 60%;
  }
`;

const CadastroLivros = styled.section`
  background-color: #e5f1c1;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 0 20%;
    padding: 1em 2em;
  }

  input {
    padding: 0.5em 2em;
    border-radius: 0.5em;
    border: 1px solid #333;
  }
`;

function Livros() {
  
  const [livros, setLivros] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [editora, setEditora] = useState("");
  const [autor, setAutor] = useState("");
  const [paginas, setPaginas] = useState(120);
  const [autores, setAutores] = useState([]);

  // Carregar livros e autores
  useEffect(() => {
    fetchLivros();
    fetchAutores();
  }, []);

  async function fetchLivros() {
    const livrosDaAPI = await getLivros();
    setLivros(livrosDaAPI);
  };

  async function fetchAutores() {
    const autoresDaApi = await getAutores();
    setAutores(autoresDaApi);
  };

  async function criarLivro(livro) {
    const res = await createLivro(livro);
    fetchLivros();
    alert(res);
  };

  function aoSubmeter(e) {
    e.preventDefault();
    if (!titulo || !editora || !autor || !paginas) {
      alert("Por favor, preencha todos os campos.");
      return;
    };
    const livro = { titulo, editora, autor, paginas}
    criarLivro(livro);
  };

  return (
    <Container>
      <ContainerLivros>
        {livros.map(livro => (
          <Livro key={livro._id} >
            <img src={capa} alt="capa" />
            <h3>{livro.titulo}</h3>
            {livro.autor ? <p>{livro.autor.nome}</p>: <span></span>}
          </Livro>
        ))}
      </ContainerLivros>
      <CadastroLivros>
        <h3>Cadastrar Livro</h3>
        <form onSubmit={aoSubmeter}>
          <label htmlFor="titulo">Título</label>
          <input type="text" name="titulo" id="titulo" placeholder="Escreva o título do livro" onChange={(e) => setTitulo(e.target.value)} value={titulo} />
          <label htmlFor="">Editora</label>
          <input type="text" name="editora" id="editora" placeholder="Escreva a Editora" onChange={(e) => setEditora(e.target.value)} value={editora} />
          <select name="autor" id="autor" onChange={(e) => setAutor(e.target.value)} value={autor}>
            <option>Selecione o autor</option>
            {autores.map(autor => <option key={autor._id} value={autor._id}>{autor.nome}</option>)}
          </select>
          <label htmlFor="paginas">Páginas</label>
          <input type="number" name="paginas" id="paginas" placeholder="Páginas" onChange={(e) => setPaginas(e.target.value)} value={paginas} />
          <button type="submit">Adicionar</button>
        </form>
      </CadastroLivros>
    </Container>
  );
};

export default Livros;
