import { Button, TextField } from '@material-ui/core';
import React from 'react';

function FormularioCadastro() {
  let nome = '';
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      console.log(`${nome}`);
    }}
    >
      <TextField
        onChange={(event) => {
          nome = event.target.value;
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField id="sobrenome" label="Sobrenome" variant="outlined" margin="normal" fullWidth />
      <TextField id="cpf" label="CPF" variant="outlined" margin="normal" fullWidth />
      <label htmlFor="promocoes">
        Promoções
        <input id="promocoes" type="checkbox" />
      </label>
      <label htmlFor="novidades">
        Novidades
        <input id="novidades" type="checkbox" />
      </label>
      <Button type="submit" id="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
