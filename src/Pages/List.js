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
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    
    useEffect(() => {
        Axios.get('http://localhost:3001/getCards').then((response) => {
          setList(response.data);
        });
    }); 

    return (
      <>
      <Dialog
        //variaveis do dialog
        isOpen={isOpen}
        onClose={onClose}
        initialRef={initialRef}
        finalRef={finalRef}
        //variaveis para o mysql 
        id={5}            
        marca={"list.Marca"}
        modelo={"list.Modelo"}
        ano={"list.Ano"}
        listCard={list}
        setList={setList} 
      />
      <Flex flexDirection="column" alignItems={'center'} justifyContent={'center'}>
        <Table variant='simple'>
          <TableCaption>Controle de Carros</TableCaption>
          <Thead>
            <Tr>
              <Th>#</Th>
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
                  <Td>{value.Id}</Td>
                  <Td>{value.Marca}</Td>
                  <Td>{value.Modelo}</Td>
                  <Td>{value.Ano}</Td>
                  <Td>
                    <Button colorScheme={'blue'} onClick={onOpen}>Editar</Button>
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