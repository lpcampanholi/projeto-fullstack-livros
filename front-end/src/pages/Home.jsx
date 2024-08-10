import styled from "styled-components";

const Container = styled.main`
  background-color: lightgray;
  width: 100%;
  height: 100%;
`;

function Home() {
  return (
    <Container>
      <h1>Página Home</h1>
    </Container>
  );
};

export default Home;
