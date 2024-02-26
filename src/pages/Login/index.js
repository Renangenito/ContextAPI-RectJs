import { Button } from '@material-ui/core';
import {
  Container,
  Titulo,
  InputContainer
} from './styles';
import {
  Input,
  InputLabel,
  InputAdornment
} from '@material-ui/core';

import { useHistory } from 'react-router-dom';
import { UsuarioContext } from 'common/context/Usuario';
import { useContext } from 'react';

function Login() {
  const history = useHistory();
  const {nome, setNome, saldo, setSaldo} = useContext(UsuarioContext);
  return (
    <Container>
      <Titulo>
              Insira o seu nome
            </Titulo>
            <InputContainer>
              <InputLabel>
                Nome
              </InputLabel>
              <Input
                onChange={(event) => setNome(event.target.value)}
                value={nome}
                type="text"
              />
            </InputContainer>
            <InputContainer>
              <InputLabel>
                Saldo
              </InputLabel>
              <Input
                onChange={(event) => setSaldo(event.target.value)}
                value={saldo}
                type="number"
                startAdornment={
                  <InputAdornment position="start">
                    R$
                  </InputAdornment>
                }
              />
            </InputContainer>
            <Button
              onClick={() => history.push('/feira')}
              disabled={nome.length < 4}
              variant="contained"
              color="primary"
            >
              Avançar
            </Button>
    </Container>
  )
};

export default Login;