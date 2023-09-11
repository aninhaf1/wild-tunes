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
import { Editar, InputModal } from './styled';
import { EditIcon } from '@chakra-ui/icons';

function EditarSenha(props) {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <>
        <Editar onClick={onOpen}><EditIcon color='#F5F2D0' boxSize={5}/></Editar>

        <Modal isOpen={isOpen}
                onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent backgroundColor='#5C582C' >
                        <ModalHeader color='#C1B95D'>Atualize sua senha</ModalHeader>
                        <ModalCloseButton color='#C1B95D'/>
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel color='#C1B95D'>Digite sua senha atual:</FormLabel>
                                <InputModal type='password'/>
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel color='#C1B95D'>Nova senha:</FormLabel>
                                <InputModal type='password'/>
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel color='#C1B95D'>Confirme sua nova senha:</FormLabel>
                                <InputModal type='password'/>
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

export default EditarSenha;