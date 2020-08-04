import React, { useState } from 'react';
import PageDefault from '../../../components/pageDefault';
import {Link} from 'react-router-dom';
import FormField from '../../../components/formField';

function CadastroCategoria(){
    // o use state retorna uma variavel e um função na segunda posição, onde  a função altera o estado da variavel;  
    const [categorias, setCategorias] = useState([]);

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000'
    }

    const [values, setValues] = useState(valoresIniciais);

    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value // nome: 'valor'
        });
    }

    function HandleChange(infosDoEvento){ 
        setValue(
            infosDoEvento.target.getAttribute('name'), 
            infosDoEvento.target.value
        );
    }

    return(
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={ function handleSubmit(infosDoEvento){
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias, //Coloca todos os itens que ja estavam no array "categorias" antes do novo item que será inserido
                    values
                ]);
                setValues(valoresIniciais);
            } }>

                <FormField 
                    label="Nome da Categoria:"
                    type="text" 
                    value={ values.nome } 
                    name="nome" 
                    onChange={ HandleChange }
                />

                <FormField 
                    label="Descrição:"
                    type="textarea"
                    value={ values.descricao } 
                    name="descricao" 
                    onChange={ HandleChange }
                />

                <FormField 
                    label="Cor:"
                    type="color" 
                    value={ values.cor } 
                    name="cor" 
                    onChange={ HandleChange }
                />

                <button>Cadastrar</button>
            </form>

            <ul>
                {categorias.map((categoria, index) => { // foreach
                    return (
                        <li key={categoria + index}>{categoria.nome}</li>
                    );
                })}
            </ul>

            <Link to="/">Ir para home</Link>
        </PageDefault>
    )
}

export default CadastroCategoria;