import styled from "styled-components";
import LivrosDestaque from "../components/LivrosDestaque";
import Titulo from "../components/Titulo";
import Destaques from "../components/Destaques";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f2f5;
`;

function Home() {
  return (
    <Container>
      <Titulo>Lançamentos</Titulo>
      <LivrosDestaque />
      <Titulo>Destaques</Titulo>
      <Destaques />
    </Container>
  );
};

export default Home;
