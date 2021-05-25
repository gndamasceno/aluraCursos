import './App.css';

import React, { } from 'react';
import { Container } from '@material-ui/core';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

function aoEnviarForm(dados) {
  console.log(dados);
}

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <h1>Formulário de Cadastro</h1>
      <FormularioCadastro aoEnviar={aoEnviarForm} />
    </Container>
  );
}

export default App;
