import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';
import FormField from '../../../components/formField';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
// o use state retorna uma variavel e um função na segunda posição, onde  a função altera o estado da variavel;
  const { categorias, setCategorias } = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  };

  const { values, handleChange, clearForm } = useForm(valoresIniciais);

  // useEffect() realiza uma ação (efeito) com base em outra ação. Like ajax

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'https://rizziflix.herokuapp.com/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias, // Coloca todos os itens que ja estavam no array "categorias" antes do novo item que será inserido
          values,
        ]);
        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria:"
          type="text"
          value={values.nome}
          name="nome"
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="textarea"
          value={values.descricao}
          name="descricao"
          onChange={handleChange}
        />

        <FormField
          label="Cor:"
          type="color"
          value={values.cor}
          name="cor"
          onChange={handleChange}
        />

        <button type="button">Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, index) => // foreach
          (
            <li key={categoria + index}>{categoria.titulo}</li>
          ))}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
