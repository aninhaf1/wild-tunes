import { ArrowLeftIcon, EditIcon } from "@chakra-ui/icons";
import Header from "../../componets/Header/Header";
import CaixaTitulo from "../../componets/caixaTitulo/CaixaTitulo";
import Input from "../../componets/input/Input";
import { Caixa, ContainerSuaConta, DivPerfil, EditarPerfil, ImgPerfil, Voltar } from "./styled";
import { useNavigate } from "react-router-dom";
import React from "react";
import EditarEmail from "../../componets/editar/editarEmail";
import EditarUsuario from "../../componets/editar/editarUsuario";
import EditarSenha from "../../componets/editar/editarSenha";


function SuaConta() {
    const navegar = useNavigate()
    const goBack = () => {
        navegar(-1)
    }

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
                <EditarEmail email={user.email}/>

                <Input titulo='Usuário' value={user.name} />
                <EditarUsuario usuario={user.name}/>       

                <Input titulo='Senha' type='password' value='senha1234'/>
                <EditarSenha/>

                <DivPerfil>
                {/* <TituloInput>Foto de perfil</TituloInput> */}
                <ImgPerfil
                    src={user.imageUrl}
                />
                <EditarPerfil><EditIcon color='#F5F2D0' boxSize={5}/></EditarPerfil>
                </DivPerfil>
            </Caixa>
            
            
        </ContainerSuaConta>
        </>
    )
}

export default SuaConta;