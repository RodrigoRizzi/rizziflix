import React from 'react';
import Menu from './components/menu';
import Carousel from './components/carousel';
import BannerMain from './components/bannerMain';
import dadosIniciais from './data/dados_iniciais.json';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Menu />   

      <BannerMain videoTitle={dadosIniciais.categorias[0].videos[0].titulo} videoDescription={dadosIniciais.categorias[0].videos[0].titulo} url={dadosIniciais.categorias[0].videos[0].url} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[1]} />

      <Footer />
    </div>
  );
  //Index.js da getById no Index.html 
}

export default App;
