import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); //createRoot é o onde fica o componente principal proculra o elemento com id roor
root.render(
  <React.StrictMode>
     <App />  
  </React.StrictMode>
);

//strict mode em prod nao faz nada mas em ambiente de desenvolvimento ele ajuda a prevenir erro e ter msg de erros mais amigaveis