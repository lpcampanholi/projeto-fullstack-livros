import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  border-radius: 0.5em;
  margin: 0.5em;
  padding: 1em;
  width: 80%;
  height: 5em;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;

const Titulo = styled.h3`
  border-bottom: 3px solid;
  border-color: ${props => props.$cor || "#333"};
  font-size: 1.2em;
  font-weight: 600;
  color: #333;
`;

function CardCategoria({ aoClicar, categoria }) {
  return (
    <Card onClick={aoClicar}>
      <Titulo $cor={categoria.cor} >{categoria.nome.toUpperCase()}</Titulo>
    </Card>
  );
};

export default CardCategoria;
