import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";

const Container = styled.span`
  display: flex;
  align-items: center;
  color: #333;
  cursor: pointer;
`;

function CabecalhoLista({ children, ativo }) {
  return (
    <Container>{children.toUpperCase()}
      {ativo && <MdKeyboardArrowDown />}
    </Container>
  );
};

export default CabecalhoLista;
