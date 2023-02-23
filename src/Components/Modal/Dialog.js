import React, {} from 'react'
import 
{
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, FormControl, Input, FormLabel, useDisclosure

} from '@chakra-ui/react'
import Axios from 'axios'

export default function Dialog(props) {

  const [editValues, setEditValues] = React.useState({
    id: props.id,
    marca: props.marca,
    modelo: props.modelo,
    ano: props.ano,
  });

  const handleEditCar = () => {
    Axios.put("http://localhost:3001/edit", {
      id: editValues.id,
      marca: editValues.marca,
      modelo: editValues.modelo,
      ano: editValues.ano,
    })
  }

  return (                            
    <Modal
        initialFocusRef={props.initialRef}
        finalFocusRef={props.finalRef}
        isOpen={props.isOpen}
        onClose={props.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edite o carro</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Marca</FormLabel>
              <Input defaultValue={props.marca} ref={props.initialRef} placeholder='Marca' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Modelo</FormLabel>
              <Input defaultValue={props.modelo} placeholder='Modelo' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Ano</FormLabel>
              <Input defaultValue={props.ano} placeholder='Ano' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={props.onClose}>
              Cancelar
            </Button>
            <Button colorScheme='red' mr={3}>
              Excluir
            </Button>
            <Button colorScheme='blue' mr={3}>
              Salvar
            </Button>
          </ModalFooter>

        </ModalContent>
      </Modal>
  );
}
