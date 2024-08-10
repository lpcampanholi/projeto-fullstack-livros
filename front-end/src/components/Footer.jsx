import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const Rodape = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  background-color: #bfdae9;

  a {
    margin-left: 5px;
    padding-top: 4px;
  }

`;

function Footer() {
  return (
    <Rodape><p>Desenvolvido por: <strong>lpcampanholi</strong></p><a href="https://github.com/lpcampanholi/projeto-fullstack-livros" target="_blank"><FaGithub /></a></Rodape>
  );
};

export default Footer;
