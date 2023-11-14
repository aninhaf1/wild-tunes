import { ArrowLeftIcon, DeleteIcon } from "@chakra-ui/icons";
import Header from "../../componets/Header/Header";
import CaixaTitulo from "../../componets/caixaTitulo/CaixaTitulo";
// import Input from "../../componets/input/Input";
import { Caixa, ContainerSuaConta, GotoSpotify, Sessao, Titulo, Voltar } from "./styled";
import { useNavigate } from "react-router-dom";
import React from "react";
import spotify from "../../assets/spotify.png";
// config do spotify: https://www.spotify.com/br-pt/account/overview/

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
                <Sessao>
                    <Titulo>
                        <h3>Gerenciar conta Spotify</h3>
                        <img src={spotify}/>
                    </Titulo>
                    <p>Gerencie as configurações da sua conta Spotify diretamente no site do Spotify</p>
                    <GotoSpotify href="https://www.spotify.com/br-pt/account/overview/">Continuar com Spotify</GotoSpotify>
                </Sessao>
                <Sessao>
                    <Titulo>
                        <h3>Deletar conta</h3>
                        <DeleteIcon color='#F5F2D0' boxSize={14}/>
                    </Titulo>
                    <p>Você pode excluir sua conta no Wild Tunes e todos os seus dados do nosso sistema. Você pode se inscrever novamente mais tarde, a qualquer momento.</p>
                    <button>Deletar conta</button>
                </Sessao>
            </Caixa>
            
            
        </ContainerSuaConta>
        </>
    )
}

export default SuaConta;