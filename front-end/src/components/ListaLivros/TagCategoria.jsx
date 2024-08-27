import styled from "styled-components";

const Container = styled.span`
  background-color: ${props => props.$cor || "#781414"};
  border-radius: 5px;
  padding: 1px 5px;
  color: white;
`;

function TagCategoria({ children, cor }) {
  return (
    <Container $cor={cor}>{children}</Container>
  );
};

export default TagCategoria;
