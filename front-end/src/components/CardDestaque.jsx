import styled from "styled-components";

const Container = styled.section`
  position: relative;
  height: 10em;
  margin: 0.5em 1em;
  padding: 1em;
  background-color: #c4d9f5;
  border-radius: 0.5em;
  cursor: pointer;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  background-image: url(${props => props.$imagem});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:hover {
    filter: brightness(1.05);
  }

  h2 {
    position: relative;
    z-index: 2;
    color: #fff;
    font-weight: 500;
    font-size: 1.2em;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: inherit;
    z-index: 1;
  }
  `;

function CardDestaque({ titulo, backgroundImage }) {
  return (
    <Container $imagem={backgroundImage}>
      <h2>{titulo.toUpperCase()}</h2>
    </Container>
  );
};

export default CardDestaque;
