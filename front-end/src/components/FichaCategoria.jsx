import styled from "styled-components";
import Campo from "./Campo";
import CampoTextArea from "./CampoTextArea";
import { IoClose } from "react-icons/io5";
import CampoCor from "./CampoCor";
import { useState } from "react";
import Botao from "./Botao";
import { putCategoria } from "../services/categorias";

const Fundo = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  background-color: #f1e3c1;
  border-radius: 1em;
  max-width: 60%;
  position: relative;
  padding: 2em;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  .fechar {
    cursor: pointer;
  }
`;

function FichaCategoria({ aoFechar, categoria }) {

  const [categoriaFicha, setcategoriaFicha] = useState(categoria);

  function atualizarCampo(e) {
    const categoriaAtualizada = {
      ...categoriaFicha,
      [e.target.name]: e.target.value
    };
    setcategoriaFicha(categoriaAtualizada);
  };

  async function atualizarCategoria(id, categoria) {
    await putCategoria(id, categoria);
  };

  function submeterCategoria(e) {
    e.preventDefault();
    atualizarCategoria(categoriaFicha._id, categoriaFicha);
    aoFechar();
  };

  return (
    <Fundo>
      <Content>
        <IoClose className="fechar" onClick={aoFechar} />
        <form>
          <h2>Ficha Categoria</h2>
          <Campo
            nome="nome"
            rotulo="Nome"
            placeholder="Digite o nome da Categoria"
            valor={categoriaFicha.nome}
            aoAtualizar={atualizarCampo}
          />
          <CampoTextArea
            nome="descricao"
            rotulo="Descrição"
            placeholder="Digite a descrição da categoria"
            valor={categoriaFicha.descricao}
            aoAtualizar={atualizarCampo}
          />
          <CampoCor
            nome="cor"
            rotulo="Cor"
            valor={categoriaFicha.cor}
            aoAtualizar={atualizarCampo}
          />
          <Botao onClick={submeterCategoria}>Salvar</Botao>
        </form>
      </Content>
    </Fundo>
  );
};

export default FichaCategoria;
