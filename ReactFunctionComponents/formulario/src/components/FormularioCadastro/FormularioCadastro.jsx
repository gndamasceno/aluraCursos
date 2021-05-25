import { Button, TextField } from '@material-ui/core';
import React from 'react';

function FormularioCadastro() {
  return (
    <form>
      <TextField id="nome" label="Nome" variant="outlined" margin="normal" fullWidth />
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
      <Button id="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
