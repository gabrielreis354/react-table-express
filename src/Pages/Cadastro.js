import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Card from '../Components/Cards/Card'
import 
{
  Flex, Heading, FormControl, FormLabel, Input, Button, Container

} from '@chakra-ui/react'

export default function Cadastro() {

  const [values, setValues] = useState();

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/registrar", {
      marca: values.marca,
      modelo: values.modelo,
      ano: values.ano,
    }).then((response) => {
      console.log(response);
    });
  }

  return (
    <div className="App">

      <Flex flexDirection="column" alignItems={'center'} justifyContent={'center'}>
        <Container maxW={'lg'}>
          <Heading>Venda de Carro</Heading>

          <FormControl>
            <FormLabel htmlFor='modelo'>Marca</FormLabel>
            <Input id='marca' name="marca" type='text' variant={'filled'}
            onChange={handleChangeValues} />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor='modelo'>Modelo</FormLabel>
            <Input id='modelo' name='modelo' variant={'filled'}
            onChange={handleChangeValues} />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor='ano'>Ano</FormLabel>
            <Input id='ano' name="ano" type='text' variant={'filled'}
             onChange={handleChangeValues} />
          </FormControl>

          <Button my="4" colorScheme={'blue'} onClick={() => handleClickButton()}>
            Enviar
          </Button>

        </Container>
      </Flex>
      
    </div>
  );
}
