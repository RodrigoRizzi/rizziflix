import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import CadastroVideo from './pages/cadastro/video';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; //import para a implementação do SPA 
import CadastroCategoria from './pages/cadastro/categoria/indes';
//--- SWITCH serve como IF (ou switch case) para esolher a rota (URL) da aplicação 
//--- ROUTE mostra o que renderizará, a página...

ReactDOM.render(
  
  <BrowserRouter>
    <Switch> 
      <Route path="/" component={Home} exact></Route>
      <Route path="/cadastro/video" component={CadastroVideo} exact></Route>
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact></Route>
      <Route component={() => (<div>Página 404</div>)}></Route>
    </Switch>    
  </BrowserRouter>,
  document.getElementById('root')
);
