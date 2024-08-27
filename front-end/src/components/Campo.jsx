import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;

  input {
    padding: 0.5em;
    border-radius: 0.5em;
    border: 1px solid #333;
    width: 100%;
    box-sizing: border-box;
  }
`;

function Campo({ nome, rotulo, placeholder, aoAtualizar, valor, tipo = "text", obrigatorio = true }) {
  return (
    <Container>
      <label htmlFor={nome}>{rotulo}</label>
      <input
        type={tipo}
        name={nome}
        id={nome}
        placeholder={placeholder}
        value={valor}
        onChange={aoAtualizar}
        required={obrigatorio}
        />
    </Container>
  );
};

export default Campo;
