import styled from "styled-components";
import capa from "../assets/livro.png";
import arrayLivros from "../assets/arrayLivros.json";
import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Container = styled.main`
    width: 100%;
    height: 100%;
`;

const Pesquisa = styled.section`
  text-align: center;
  padding: 1em;
  background-color: #bfdae9;;

  input {
    text-align: center;
    border: 1px solid darkgray;
    border-radius: 2em;
    padding: 0.5em 10em;
  }
`;

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

function Livros() {
  
  const [livrosPesquisados, setLivrosPesquisados] = useState(arrayLivros);
  const [livros, setLivros] = useState(arrayLivros);

  const estrelas = [1, 2, 3, 4, 5];

  return (
    <Container>
      <Pesquisa>
        <input type="text" placeholder="Pesquise por..." onChange={(e) => {
          const textoDigitado = e.target.value.toLowerCase();
          const resultadoPesquisa = livros.filter(livro => (livro.titulo.toLowerCase().includes(textoDigitado) || livro.autor.toLowerCase().includes(textoDigitado)));
          setLivrosPesquisados(resultadoPesquisa);
        }} />
      </Pesquisa>

      <ContainerLivros>
        {livrosPesquisados.map(livro => (
          <Livro key={livro.id} >
            <img src={capa} alt="capa" />
            <h3>{livro.titulo}</h3>
            <p>{livro.autor}</p>
            {livro.favorito ? <FaHeart style={{color: "red"}} /> : <FaRegHeart style={{color: "red"}} />}
            {estrelas.map(estrela => estrela <= livro.estrelas ? (<FaStar style={{color: "#d4cb1b"}} key={estrela} />) : (<CiStar style={{color: "#d4cb1b"}} key={estrela} />)
            )}
          </Livro>
        ))}
      </ContainerLivros>
    </Container>
  );
};

export default Livros;
