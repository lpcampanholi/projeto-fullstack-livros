import styled from "styled-components";

const Botao = styled.button`
  background-color: #34a1e4;
  border: none;
  border-radius: 0.5em;
  padding: 0.5em 1em;
  color: white;
  cursor: pointer;
  transition: 0.2s ease;
  margin: 1em 0;
  
  &:hover {
    background-color: #56bbfa;
  }
`;

export default Botao;