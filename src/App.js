import React from 'react';
import './App.css';
import List from './Pages/List'
import Cadastro from './Pages/Cadastro';
import './App.css';
import 
{
  Flex

} from '@chakra-ui/react'

export default function App() {

  return (

    <div className="App">
        <h1>React JS + EXPRESS + AXIOS CRUD Application</h1>
        <Flex className="wrapper" flexDirection="row" alignContent="center" alignItems="center" justifyContent="center">
          <section className="left-side">
            <Cadastro />
          </section>
          <section className="right-side">
            <List />
          </section>
        </Flex>
      </div>
    
  );
}
