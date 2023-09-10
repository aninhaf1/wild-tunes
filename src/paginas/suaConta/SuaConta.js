import { ArrowLeftIcon, EditIcon } from "@chakra-ui/icons";
import Header from "../../componets/Header/Header";
import CaixaTitulo from "../../componets/caixaTitulo/CaixaTitulo";
import Input from "../../componets/input/Input";
import { Caixa, ContainerSuaConta, DivPerfil, Editar, EditarPerfil, ImgPerfil, TituloInput, Voltar } from "./styled";
import { useNavigate } from "react-router-dom";
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
import React from "react";


function SuaConta() {
    const navegar = useNavigate()
    const goBack = () => {
        navegar(-1)
    }
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const user = {
        name: 'user123',
        email: 'seuemail@gmail.com',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg'
      };

    return(
        <>
        <Header/>
        <ContainerSuaConta>
            <Voltar onClick={goBack}>
                <ArrowLeftIcon color='#5C582C'/>
            </Voltar>
            <CaixaTitulo titulo='Sua Conta'/>
            <Caixa>
                <Input titulo='Email' value={user.email} />
                <Editar><EditIcon color='#F5F2D0' boxSize={5}/></Editar>

                <Input titulo='Usuário' value={user.name} />
                <Editar><EditIcon color='#F5F2D0' boxSize={5}/></Editar>

                <Input titulo='Senha' type='password' value='senha1234'/>
                <Editar><EditIcon color='#F5F2D0' boxSize={5}/></Editar>

                <DivPerfil>
                {/* <TituloInput>Foto de perfil</TituloInput> */}
                <ImgPerfil
                    src={user.imageUrl}
                />
                <EditarPerfil><EditIcon color='#F5F2D0' boxSize={5}/></EditarPerfil>
                </DivPerfil>
            </Caixa>
            <button onClick={onOpen}>Open Modal</button>
            <Modal isOpen={isOpen} 
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Atualize sua senha</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>First name</FormLabel>
                            <Input ref={initialRef} placeholder='First name' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Last name</FormLabel>
                            <Input placeholder='Last name' />
                        </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3}>
                    Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </ContainerSuaConta>
        </>
    )
}

export default SuaConta;