import styled from "styled-components";
import Botao from "../components/Botao";
import ListaLivros from "../components/ListaLivros";
import FichaLivro from "../components/FichaLivro";
// import { getLivros } from "../services/livros";
import { useState } from "react";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f2f5;
`;

function Livros() {

  const [fichaAberta, setFichaAberta] = useState(false);

  function abrirFicha() {
    setFichaAberta(true);
  };

  function fecharFicha() {
    setFichaAberta(false);
  };

  // async function carregarLivros() {
  //   const livrosApi = await getLivros();
  // };

  return (
    <Container>
      <ListaLivros />
      <Botao onClick={abrirFicha}>Novo Livro</Botao>
      {fichaAberta && <FichaLivro
        fechar={fecharFicha}
        atualizarLivros={() => window.location.reload()}
      />}
    </Container>
  );
};

export default Livros;
