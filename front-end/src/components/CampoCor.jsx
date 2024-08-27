import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 1em;
`;

function CampoCor({ nome, rotulo, valor, aoAtualizar }) {
  return (
    <Container>
      <label htmlFor={nome}>{rotulo}</label>
        <input type="color"
          name={nome}
          id={nome}
          value={valor}
          onChange={aoAtualizar}
        />
    </Container>
  );
};

export default CampoCor;
