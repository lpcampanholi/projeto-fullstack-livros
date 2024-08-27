import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAutores } from "../services/autores";
import { getLivroPorId, postLivro, putLivro } from "../services/livros";
import Botao from "./Botao";
import capa from "../assets/livro.png";
import { IoClose } from "react-icons/io5";
import Campo from "./Campo";
import ListaSuspensa from "./ListaSuspensa";
import { getCategorias } from "../services/categorias";

const Fundo = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  background-color: #f1e3c1;
  border-radius: 1em;
  max-width: 60%;
  position: relative;
  padding: 2em;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

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

  .inferior {
    display: flex;
    gap: 1em;
  }
`;

function FichaLivro({ id, fechar, atualizarLivros }) {

  const [autores, setAutores] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [livro, setLivro] = useState({
    titulo: "",
    editora: "",
    autor: "",
    categoria: "",
    paginas: 0,
    estrelas: 0,
    imagem: null
  });

  useEffect(() => {
    if (id) {
      fetchLivro(id);
    };
    fetchAutores();
    fetchCategorias();
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

  // Buscar Categorias
  async function fetchCategorias() {
    const categoriasApi = await getCategorias();
    setCategorias(categoriasApi);
  };

  // Atualizar Campos
  function atualizarCampo(e) {
    setLivro({
      ...livro,
      [e.target.name]: e.target.value
    })
  }

  // Atualizar / Criar Livro na API
  async function atualizarLivro(livro) {
    if (id) {
      await putLivro(id, livro);
    } else {
      await postLivro(livro);
    };
  };

  // Submeter formulário
  async function submeterForm(e) {
    e.preventDefault();
    console.log(livro);
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
            <Campo
              nome="titulo"
              rotulo="Título"
              placeholder="Digite o título"
              aoAtualizar={atualizarCampo}
              valor={livro.titulo}
              />
            <Campo
              nome="editora"
              rotulo="Editora"
              placeholder="Digite a Editora"
              aoAtualizar={atualizarCampo}
              valor={livro.editora}
            />
            <ListaSuspensa
            nome="autor"
            rotulo="Autor"
            lista={autores}
            aoAtualizar={atualizarCampo}
            valor={livro.autor.nome}
            />
            <ListaSuspensa
            nome="categoria"
            rotulo="Categoria"
            lista={categorias}
            aoAtualizar={atualizarCampo}
            valor={livro.categoria.nome}
            />
            <div className="inferior">
            <Campo
                nome="paginas"
                rotulo="Páginas"
                placeholder="Quantidade de páginas"
                aoAtualizar={atualizarCampo}
                valor={livro.paginas}
                tipo="number"
              />
              <Campo
                nome="estrelas"
                rotulo="Estrelas"
                placeholder="Quantidade de estrelas"
                aoAtualizar={atualizarCampo}
                valor={livro.estrelas}
                tipo="number"
              />
            </div>
            <Botao>Salvar</Botao>
          </form>
        </div>
      </Content>
    </Fundo>
);
};

export default FichaLivro;
