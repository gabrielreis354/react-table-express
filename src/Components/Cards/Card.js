import React from 'react'
import Dialog from '../Modal/Dialog'
import 
{
  Box, Heading, Text, Stack, useDisclosure, Button

} from '@chakra-ui/react'

export default function Card(props) {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef()
  const finalRef = React.useRef()

  return (                                
    <Stack spacing={8} direction='row' key={props.id}>
      <Dialog 
        //variaveis do dialog
        isOpen={isOpen} 
        onClose={onClose}
        initialRef={initialRef}
        finalRef={finalRef} 
        //variaveis para o mysql
        marca={props.marca}
        modelo={props.modelo}
        ano={props.ano}
        listCard={props.listCard}
        setList={props.setList}
      />
      <Box p={5} shadow='md' borderWidth='1px' maxW={"300px"} w="80" m="5" onClick={ onOpen }>
        <Heading fontSize='xl'>{props.marca} {props.modelo}</Heading>
        <Text mt={4}>{props.id}</Text>
        <Text mt={4}>{props.ano}</Text>

        <Box flex="1" alignContent={'center'} justifyContent={'center'} alignItems='center' flexDirection={'row'} m="3" >
          <Button colorScheme='blue'>Editar</Button>
        </Box>
      </Box>
    </Stack>                      
  );
}