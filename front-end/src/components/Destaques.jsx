import styled from "styled-components";
import CardDestaque from "./CardDestaque";
import romance from "../assets/romance.png";


const Container = styled.section`
  width: 60%;
  display: grid; 
  grid-template-rows: 1fr 1fr;
  margin: 0.5em 0;
  gap: 0.5em;

  & > :nth-child(5), :nth-child(6) {
    grid-column: span 2;
  }
`;

function Destaques() {
  return (
    <Container>
      <CardDestaque titulo="Romances" backgroundImage={romance} />
      <CardDestaque titulo="Carreira & Negócios" />
      <CardDestaque titulo="Autoajuda" />
      <CardDestaque titulo="Saúde & Bem-estar" />
      <CardDestaque titulo="Mais vendidos" />
      <CardDestaque titulo="Todas as categorias" />
    </Container>
  );
};

export default Destaques;
