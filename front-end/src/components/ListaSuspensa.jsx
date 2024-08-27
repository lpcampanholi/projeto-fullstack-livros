import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;

  select {
    padding: 0.5em;
    border-radius: 0.5em;
    border: 1px solid #333;
    width: 100%;
    box-sizing: border-box;
  }
`;

function ListaSuspensa({ nome, rotulo, valor, lista, aoAtualizar, obrigatorio = true }) {
  return (
    <Container>
      <label htmlFor={nome}>{rotulo}</label>
      <select
        name={nome}
        id={nome}
        onChange={aoAtualizar}
        required={obrigatorio}
        value={valor}
      >
        {valor ? <option>{valor}</option> : <option value="">Selecione</option>}
        {lista
        .filter(elemento => elemento.nome !== valor)
        .map(elemento => (
          <option key={elemento._id} value={elemento._id}>{elemento.nome}</option>
        ))}
      </select>
    </Container>
  );
};

export default ListaSuspensa;
