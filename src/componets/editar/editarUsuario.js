import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    Button,
  } from '@chakra-ui/react'
import { AtualModal, Editar, InputModal } from './styled';
import { EditIcon } from '@chakra-ui/icons';

function EditarUsuario(props) {
    
    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <>
        <Editar onClick={onOpen}><EditIcon color='#F5F2D0' boxSize={5}/></Editar>

        <Modal isOpen={isOpen}
                onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent backgroundColor='#5C582C' >
                        <ModalHeader color='#C1B95D'>Atualize seu usuário</ModalHeader>
                        <ModalCloseButton color='#C1B95D'/>
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel color='#C1B95D'>Usuário atual:</FormLabel>
                                <AtualModal>{props.usuario}</AtualModal>
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel color='#C1B95D'>Novo usuário:</FormLabel>
                                <InputModal placeholder='Escreva seu novo usuário' type='text'/>
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                        <Button 
                        bg='#C1B95D' 
                        color='#5C582C' 
                        mr={3}
                        _hover={{
                            background: "#F5F2D0"
                        }}>
                        Salvar
                        </Button>
                        <Button 
                        onClick={onClose} 
                        bg='#C1B95D' 
                        color='#5C582C'
                        _hover={{
                            background: "#F5F2D0"
                        }}>
                        Cancelar
                        </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
        </>
    )
}

export default EditarUsuario;