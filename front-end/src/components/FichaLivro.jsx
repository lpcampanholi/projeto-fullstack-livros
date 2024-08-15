import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAutores } from "../services/autores";
import { getLivroPorId, postLivro, putLivro } from "../services/livros";
import Botao from "./Botao";
import capa from "../assets/livro.png";
import { IoClose } from "react-icons/io5";

const Fundo = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  background-color: #f1e3c1;
  border-radius: 1em;
  width: 60%;
  position: relative;
  padding: 2em;

  form {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    gap: 0.5em;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 20px;
    cursor: pointer;
  }

  .container {
    display: flex;
    align-items: center;
    gap: 1em;
  }
`;

const Campo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;

  input, select {
    padding: 0.5em;
    border-radius: 0.5em;
    border: 1px solid #333;
    width: 100%;
    box-sizing: border-box;
  }

  &
  input:focus {
    outline: none;
    border-bottom: 2px solid blue; 
  }
`;

function FichaLivro({ id, fechar, atualizarLivros }) {

  const [autores, setAutores] = useState([]);
  const [livro, setLivro] = useState({
    titulo: "",
    editora: "",
    autor: "",
    paginas: ""
  });

  useEffect(() => {
    if (id) {
      fetchLivro(id);
    };
    fetchAutores();
  }, [id]);

  // Buscar Livro
  async function fetchLivro(id) {
    const livroDaApi = await getLivroPorId(id);
    setLivro(livroDaApi);
  };

  // Buscar Autores
  async function fetchAutores() {
    const autoresDaApi = await getAutores();
    setAutores(autoresDaApi);
  };

  // Atualizar objeto Livro nos campos
  function atualizarCampo(e) {
    setLivro({
      ...livro,
      [e.target.name]: e.target.value
    });
  };

  // Atualizar / Criar Livro na API
  async function atualizarLivro(livro) {
    if (id) {
      await putLivro(id, livro);
    } else {
      await postLivro(livro);
    }
  };

  // Submeter formulário
  async function submeterForm(e) {
    e.preventDefault();
    await atualizarLivro(livro);
    await atualizarLivros();
    fechar();
  };
  
  return (
    <Fundo>
      <Content>
        <IoClose className="close" onClick={fechar} />
        <div className="container">
          <img src={capa} alt="capa" />
          <form onSubmit={submeterForm}>
            <Campo>
              <label htmlFor="titulo">Título</label>
              <input
                type="text"
                name="titulo"
                id="titulo"
                placeholder="Título do livro"
                value={livro.titulo}
                onChange={atualizarCampo}
              />
            </Campo>
            <Campo>
              <label htmlFor="editora">Editora</label>
              <input
                type="text"
                name="editora"
                id="editora"
                placeholder="Editora do livro"
                value={livro.editora}
                onChange={atualizarCampo}
              />
            </Campo>
            <Campo>
              <label htmlFor="autor">Autor</label>
              <select
                name="autor"
                id="autor"
                value={livro.autor.nome}
                onChange={atualizarCampo}
              >
                <option>Selecione o autor</option>
                {autores.map((autor) => (
                  <option key={autor._id} value={autor._id}>
                    {autor.nome}
                  </option>
                ))}
              </select>
            </Campo>
            <Campo>
              <label htmlFor="paginas">Páginas</label>
              <input
                type="number"
                name="paginas"
                id="paginas"
                placeholder="Páginas"
                value={livro.paginas}
                onChange={atualizarCampo}
              />
            </Campo>
            <Campo>
              <label htmlFor="estrelas">Estrelas</label>
              <input
                type="number"
                name="estrelas"
                id="estrelas"
                placeholder="Estrelas (1 a 5)"
                value={livro.estrelas}
                onChange={atualizarCampo}
              />
            </Campo>
            <Botao>Salvar</Botao>
          </form>
        </div>
      </Content>
    </Fundo>
);
};

export default FichaLivro;
