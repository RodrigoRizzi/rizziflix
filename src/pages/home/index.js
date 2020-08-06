import React, { useEffect, useState } from 'react';
import Carousel from '../../components/carousel';
import BannerMain from '../../components/bannerMain';
// import dadosIniciais from '../../data/dados_iniciais.json';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/pageDefault';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>loading...</div>)}

      {dadosIniciais.length >= 1 && (
      <>
        <BannerMain
          videoTitle={dadosIniciais[0].videos[0].titulo}
          url={dadosIniciais[0].videos[0].url}
          videoDescription={dadosIniciais[0].videos[0].description}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais[0]}
        />

      </>
      )}

    </PageDefault>
  );
  // Index.js da getById no Index.html
}

export default Home;
