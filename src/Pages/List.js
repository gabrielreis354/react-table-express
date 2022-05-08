import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import Dialog from '../Components/Modal/Dialog'
import 
{
  Flex, Container, Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  useDisclosure
} from '@chakra-ui/react'

export default function List(props) {
    const [list, setList] = useState();
    const [Id, setId] = useState(0);
    const [Marca, setMarca] = useState('');
    const [Modelo, setModelo] = useState('');
    const [Ano, setAno] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    
    useEffect(() => {
        Axios.get('http://localhost:3001/getCards').then((response) => {
          setList(response.data);
        });
    }); 

    const setValue = (id, marca, modelo, ano) => {
      setId(id);
      setMarca(marca);
      setModelo(modelo);
      setAno(ano);
      onOpen(true);
    }

    return (
      <>
      <Dialog
        //variaveis do dialog
        isOpen={isOpen}
        onClose={onClose}
        initialRef={initialRef}
        finalRef={finalRef}
        //variaveis para o mysql 
        id={Id}            
        marca={Marca}
        modelo={Modelo}
        ano={Ano}
        listCard={list}
        setList={setList} 
      />
      <Flex flexDirection="column" alignItems={'center'} justifyContent={'center'} textAlign={'center'}>
        <Table variant='simple'>
          <TableCaption>Controle de Carros</TableCaption>
          <Thead>
            <Tr>
              <Th>Marca</Th>
              <Th>Modelo</Th>
              <Th>Ano</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>
          <Tbody>
            {typeof list !== 'undefined' && list.map((value) => {
              return (
                <>     
                <Tr key={value.Id}>
                  <Td>{value.Marca}</Td>
                  <Td>{value.Modelo}</Td>
                  <Td>{value.Ano}</Td>
                  <Td>
                    <Button colorScheme={'blue'} onClick={() => setValue(value.Id, value.Marca, value.Modelo, value.Ano)}>Editar</Button>
                  </Td>
                </Tr>
                </>
              );
            })}
          </Tbody>
        </Table>
      </Flex></>

    )

        
  
}


