import './App.css';

import React, { } from 'react';
import { Container } from '@material-ui/core';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

function aoEnviarForm(dados) {
  console.log(dados);
}
function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: 'CPF deve ter 11 dígitos.' };
  }

  return { valido: true, texto: '' };
}
function App() {
  return (
    <Container component="article" maxWidth="sm">
      <h1>Formulário de Cadastro</h1>
      <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
    </Container>
  );
}

export default App;
