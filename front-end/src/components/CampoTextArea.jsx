import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1em;

  textarea {
    width: 20em;
    height: 10em;
    font-family: Inter, sans-serif;
    padding: 0.5em;
    border-radius: 0.5em;
  }
`;

function CampoTextArea({ nome, rotulo, placeholder, valor, aoAtualizar }) {
  return (
    <Container>
      <label htmlFor={nome}>{rotulo}</label>
      <textarea
      name={nome}
      id={nome}
      placeholder={placeholder}
      value={valor}
      onChange={aoAtualizar}
      ></textarea>
    </Container>
  );
};

export default CampoTextArea;
