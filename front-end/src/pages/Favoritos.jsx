import styled from "styled-components";
import CardsLivros from "../components/cardsLivros";

const Container = styled.main`
background-color: #f0f2f5;
`;

function Favoritos() {
  return (
    <Container>
      <CardsLivros />
    </Container>
  );
};

export default Favoritos;
