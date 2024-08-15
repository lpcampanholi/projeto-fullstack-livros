import styled from "styled-components";
import capa from "../assets/livro.png";
import { useEffect, useState } from "react";
import { getLivros } from "../services/livros";
import FichaLivro from "./FichaLivro";

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 0 2em;
  box-sizing: border-box;
  padding-bottom: 1em;
`;

const Livro = styled.div`
  text-align: center;
  border-radius: 8px;
  margin: 1em;
  padding: 1em 0;
  cursor: pointer;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  background-color: white;

  &:hover {
    transform: scale(1.02);
  }  

  h3 {
    font-size: 1em;
    font-weight: 600;
    color: #333;
  }

  p {
    font-size: 0.8em;
  }

  img {
    width: 60%;
  }

  svg {
    cursor: pointer;
  }

  &.selecionado {
    border: 1px solid #029ed7;
  }
`;

function CardsLivros() {

  const [livros, setLivros] = useState([]);

    // Carregar livros
    useEffect(() => {
      fetchLivros();
    }, []);
  
    // Buscar livros favoritos
    async function fetchLivros() {
      const livrosDaAPI = await getLivros();
      const livrosFiltrados = livrosDaAPI.filter(livro => livro.favorito);
      setLivros(livrosFiltrados);
    };

    // Selecionar Livro
    const [livroSelecionado, setLivroSelecionado] = useState(null);

    function selecionarLivro(livro) {
      if (livroSelecionado && livroSelecionado._id === livro._id ) {
        setLivroSelecionado(null);
      } else {
        setLivroSelecionado(livro);
      };
    };

  return (
    <Container>

      {livros.map(livro => (
        <Livro
        key={livro._id}
        onClick={() => selecionarLivro(livro)}
        className={livroSelecionado && livroSelecionado._id === livro._id ? "selecionado" : ""}
        >
          <img src={capa} alt="capa" />
          <h3>{livro.titulo}</h3>
          {livro.autor ? <p>{livro.autor.nome}</p>: <span></span>}
        </Livro>
      ))}

      {livroSelecionado && <FichaLivro id={livroSelecionado._id} />}

    </Container>
  );
};

export default CardsLivros;
