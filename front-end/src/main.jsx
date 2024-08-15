import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx';
import GlobalStyle from './components/GlobalStyle.jsx';
import Livros from './pages/Livros.jsx';
import Categorias from './pages/Categorias.jsx';
import Autores from './pages/Autores.jsx';
import Favoritos from './pages/Favoritos.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livros" element={<Livros />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/autores" element={<Autores />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
