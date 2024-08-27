import { useEffect, useState } from "react";
import { deleteLivro, getLivros, putLivro } from "../../services/livros";
import styled from "styled-components";
import FichaLivro from "../FichaLivro";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegHeart, FaHeart, FaStar } from "react-icons/fa";
import TagCategoria from "./TagCategoria";
import CabecalhoLista from "./CabecalhoLista";

const Tabela = styled.table`

  border-collapse: collapse;
  max-width: 100%;
  margin: 2em 0;
  
  thead {
    background-color: transparent;
  }

  th {
    padding: 0.7em 1em;
    text-align: left;
    font-weight: 600;
    font-size: 0.9em;
  }

  tbody tr {
    background-color: white;
    &:nth-child(even) {
      background-color: #f9f9f9;
    }
    &:hover {
      background-color: #d1e7dd;
    }
  }

  td {
    padding: 1em;
    border-bottom: 1px solid #dddddd;
    text-align: left;
    font-size: 1rem;
    color: #333;
  }

  .icone_clicavel {
    cursor: pointer;
  }

  .icone_clicavel:hover {
    transform: scale(1.05);
  }

  .texto_clicavel:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .heart {
    color: #d80505;  
  }

  .star {
    color: #f9bc22;
  }

`;

function ListaLivros() {

  const [livros, setLivros] = useState([]);
  const [livroSelecionado, setLivroSelecionado] = useState(null);
  const [fichaAberta, setFichaAberta] = useState(false);

  useEffect(() => {
    fetchLivros();
  }, []);

  async function fetchLivros() {
    const livrosApi = await getLivros();
    setLivros(livrosApi);
  };

  async function excluirLivro(id) {
    const data = await deleteLivro(id);
    alert(data.message);
    fetchLivros();
  };

  async function favoritarLivro(id, livro) {
    const livroAtualizado = {
      ...livro,
      favorito: !livro.favorito
    };
    await putLivro(id, livroAtualizado);
    fetchLivros();
  };

  function abrirFicha(livro) {
    setLivroSelecionado(livro);
    setFichaAberta(true);
  };

  function fecharFicha() {
    setLivroSelecionado(null);
    setFichaAberta(false);
  };

  return (
    <>
      <Tabela>
        <thead>
          <tr>
            <th><CabecalhoLista ativo>Título</CabecalhoLista></th>
            <th><CabecalhoLista ativo>Autor</CabecalhoLista></th>
            <th><CabecalhoLista ativo>Editora</CabecalhoLista></th>
            <th><CabecalhoLista ativo>Categoria</CabecalhoLista></th>
          </tr>
        </thead>
        <tbody>
          {livros.map(livro => (
            <tr key={livro._id}>
              <td><span className="texto_clicavel" onClick={() => abrirFicha(livro)}>{livro.titulo}</span></td>
              {livro.autor ? <td>{livro.autor.nome}</td> : <td>sem autor</td> }
              <td>{livro.editora}</td>
              <td><TagCategoria cor={livro.categoria.cor}>{livro.categoria.nome}</TagCategoria></td>
              <td>
                {livro.favorito ? <FaHeart className="icone_clicavel heart" size={17} onClick={() => favoritarLivro(livro._id, livro)} /> : <FaRegHeart className="icone_clicavel" size={17} onClick={() => favoritarLivro(livro._id, livro)} />}
              </td>
              <td><AiOutlineDelete className="icone_clicavel" size={20} onClick={() => excluirLivro(livro._id)} /></td>
              <td>
                {Array.from({ length: livro.estrelas }, (_, index) => (
                    <FaStar key={index} className="star" size={12} />
                ))}
            </td>
            </tr>
          ))}
        </tbody>
      </Tabela>

      {fichaAberta &&
      <FichaLivro
        id={livroSelecionado._id}
        atualizarLivros={fetchLivros}
        fechar={fecharFicha}
      />}

    </>
  );
};

export default ListaLivros;
