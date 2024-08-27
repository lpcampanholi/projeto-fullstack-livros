import styled from "styled-components";
import { useEffect, useState } from "react";
import { getCategorias } from "../services/categorias";
import CardCategoria from "../components/CardCategoria";
import FichaCategoria from "../components/FichaCategoria";
import Botao from "../components/Botao";

const Container = styled.main`
  background-color: lightgray;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

function Categorias() {

  const [categorias, setCategorias] = useState([]);
  const [fichaAberta, setFichaAberta] = useState(false);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

  useEffect(() => {
    fetchCategorias();
  }, []);

  async function fetchCategorias() {
    const categoriasApi = await getCategorias();
    setCategorias(categoriasApi);
  };

  function abrirFicha(categoria) {
    setFichaAberta(true);
    setCategoriaSelecionada(categoria);
  };

  async function fecharFicha() {
    setFichaAberta(false);
    setCategoriaSelecionada(null);
    await fetchCategorias();
  };

  return (
    <Container>
      {categorias.map(categoria => (
        <CardCategoria
          key={categoria._id}
          aoClicar={() => abrirFicha(categoria)}
          categoria={categoria}
        />
      ))}
      <Botao onClick={abrirFicha}>Adicionar Categoria</Botao>
      {fichaAberta && <FichaCategoria categoria={categoriaSelecionada} aoFechar={fecharFicha} />}
    </Container>
  );
};

export default Categorias;
