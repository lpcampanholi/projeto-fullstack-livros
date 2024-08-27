import styled from "styled-components";
import livro01 from "../assets/capas/livro01.jpg";
import livro02 from "../assets/capas/livro02.jpg";
import livro03 from "../assets/capas/livro03.jpg";
import livro04 from "../assets/capas/livro04.jpg";
import livro05 from "../assets/capas/livro05.jpg";
import livro06 from "../assets/capas/livro06.jpg";
// import livro07 from "../assets/capas/livro07.jpg";
import livro08 from "../assets/capas/livro08.jpg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 75%;
  height: 400px;
  margin: 1em 5%;

  img {
    width: 15%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.684);
    transition: all ease-in-out 0.5s;
  }

  img:hover {
    width: 40%;
  }

`;


function LivrosDestaque() {
  return (
    <Container>
      <img src={livro01} />
      <img src={livro02} />
      <img src={livro03} />
      <img src={livro04} />
      <img src={livro05} />
      <img src={livro06} />
      {/* <img src={livro07} /> */}
      <img src={livro08} />
    </Container>
  );
};

export default LivrosDestaque;
