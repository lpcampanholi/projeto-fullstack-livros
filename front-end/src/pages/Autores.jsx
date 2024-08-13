import styled from "styled-components";
import imgAutor from "../assets/autor.png";
import { useEffect, useState } from "react";
import { getAutores, createAutor, deleteAutor } from "../services/autores";
import { CiCircleRemove } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";

const Container = styled.main`
  background-color: #d0e1c7;
  padding: 1em 2em;
`;

const Autor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin: 10px 20%;
  padding: 0.5em 2em;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  color: #666;
  border-radius: 0.5em;

  .container {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  img {
    width: 3em;
  }

  h3 {
    font-weight: 500;
  }

  svg {
    cursor: pointer;
    size: 30px;
  }
`;

const FormAutor = styled.section`
  text-align: center;
  background-color: white;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin: 0 20%;
  padding: 1em;
  border-radius: 0.5em;

  div {
    display: flex;
    align-items: start;
    flex-direction: column;
    margin: 1em 20%;
  }

  input {
    width: 100%;
    padding: 1em;
    border-radius: 0.5em;
    border: 1px solid #555;
  }

  button {
    background-color: #34a1e4;
    border: none;
    border-radius: 0.5em;
    padding: 0.5em 1em;
    color: white;
    cursor: pointer;
    transition: 0.2s ease;
  }

  button:hover {
    background-color: #56bbfa;
  }

`;


function Autores() {

  const [autores, setAutores] = useState([]);
  const [nome, setNome] = useState("");
  const [nacionalidade, setNacionalidade] = useState("");

  // Carregar autores
  useEffect(() => {
    fetchAutores();
  }, []);

  async function fetchAutores() {
    const autoresApi = await getAutores();
    setAutores(autoresApi);
  };

  async function cadastrarAutor() {
    const novoAutor = { nome, nacionalidade };
    await createAutor(novoAutor);
    fetchAutores();
  };

  async function excluirAutor(id) {
    const res = await deleteAutor(id);
    alert(res);
    fetchAutores();
  };

  // Submeter formulário
  function aoSubmeter(e) {
    e.preventDefault();
    cadastrarAutor();
    setNome("");
    setNacionalidade("");
  };

  return (
    <Container>
      {autores.map(autor => (
        <Autor key={autor._id}>
          <div className="container">
            <img src={imgAutor} alt="imgAutor" />
            <div>
              <h3>{autor.nome}</h3>
              <p>{autor.nacionalidade}</p>
            </div>
          </div>
          <div>
            <CiCircleRemove size={30} onClick={() => excluirAutor(autor._id)} />
            <CiEdit size={30} />
          </div>
        </Autor>
      ))}

      <FormAutor>
        <form onSubmit={aoSubmeter}>
          <h2>Cadastrar autor</h2>
          <div>
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" id="nome" value={nome} placeholder="Digite nome do autor" onChange={(e) => setNome(e.target.value)} />
          </div>
          <div>
            <label htmlFor="nacionalidade">Nacionalidade</label>
            <input type="text" name="nacionalidade" id="nacionalidade" value={nacionalidade} placeholder="Digite a nacionalidade do Autor" onChange={(e) => setNacionalidade(e.target.value)} />
          </div>
          <button type="submit">Adicionar</button>
        </form>
      </FormAutor>
    </Container >
  );
};

export default Autores;
