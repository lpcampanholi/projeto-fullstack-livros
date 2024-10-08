import styled from "styled-components";
import logo from "../assets/logo.png"
import { NavLink } from "react-router-dom";

const Container = styled.header`
  background-color: white;
  padding: 1em 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  img {
    width: 50px;
    height: auto;
  }

  span {
    font-size: 1.5em;
  }
`;

const Navegacao = styled.nav`
  display: flex;
  gap: 1em;

  a {
    border-bottom: 3px solid transparent;
  }

  a.active {
    border-bottom-color: #90d4ff;
  }

  a:hover {
    color: orange;
  }
`;

function Header() {
  return (
    <Container>
      <Logo>
        <NavLink to="/">
          <img src={logo} alt="Logo"/>
          <span><strong>Casa do Livro</strong></span>
        </NavLink>
      </Logo>
      <Navegacao>
        <NavLink to="/livros">Livros</NavLink>
        <NavLink to="/categorias">Categorias</NavLink>
        <NavLink to="/autores">Autores</NavLink>
        <NavLink to="/favoritos">Favoritos</NavLink>
      </Navegacao>
    </Container>
  );
};

export default Header;
