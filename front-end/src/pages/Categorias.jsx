import styled from "styled-components";
import arrayCategorias from "../assets/categorias.json"

const Container = styled.main`
    background-color: lightgray;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const Categoria = styled.div`
  background-color: white;
  border-radius: 1em;
  margin: 0.5em;
  padding: 1em;
  width: 80%;

  h2 {
    background-color: #bfdae9;
  }
`;

function Categorias() {
  return (
    <Container>
      {arrayCategorias.map(categoria => (
        <Categoria key={categoria.id}>
          <h2>{categoria.nome}</h2>
          <p>{categoria.descricao}</p>
        </Categoria>
      ))}
    </Container>
  );
};

export default Categorias;
