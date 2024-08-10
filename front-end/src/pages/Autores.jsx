import styled from "styled-components";
import autores from "../assets/arrayAutores.json";
import imgAutor from "../assets/autor.png";

const Container = styled.main`
    background-color: #d0e1c7;
    padding: 1em 2em;
`;

const Autor = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  background-color: white;
  margin: 10px 20%;
  padding: 0.5em 2em;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  color: #666;

  img {
    width: 3em;
  }

  h3 {
    font-weight: 500;
  }
`;

function Autores() {
  return (
    <Container>

    {autores.map(autor => (
      <Autor key={autor.id}>
        <img src={imgAutor} alt="imgAutor" />
        <h3>{autor.nome}</h3>
      </Autor>
    ))}

    </Container >
  );
};

export default Autores;
