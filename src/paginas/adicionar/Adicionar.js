import { useNavigate } from "react-router-dom";
import Header from "../../componets/Header/Header";
import CaixaTexto from "../../componets/caixaTexto/CaixaTexto";
import CaixaTitulo from "../../componets/caixaTitulo/CaixaTitulo";
import Input from "../../componets/input/Input";
import { BotaoEnviar, CaixaInput, ContainerAdicionar } from "./styled";
import { Tabs, TabList, Tab } from '@chakra-ui/react'


function Adicionar() {
    const navegar = useNavigate()
    const goToMusicas = () => {
        navegar('/musicas')
    }
    const goToAlbuns = () => {
        navegar('/albuns')
    }
    const goToQmSomos = () => {
        navegar('/quemsomos')
    }
    const goToContato = () => {
        navegar('/contato')
    }

    return(
        <>
        <Header/>
        <Tabs variant='enclosed' defaultIndex={2}
        size='sm' 
        colorScheme='white' 
        color='#5C582C' 
        border='#5C582C'
        opacity='0.8'>
        <TabList>
            <TabList paddingLeft='15px' bg='#F5F2D0'>
                <Tab onClick={goToMusicas}>Músicas</Tab>
                <Tab onClick={goToAlbuns}>Álbuns</Tab>
            </TabList>
            <Tab>Indicar</Tab>
            <TabList bg='#F5F2D0' width='100vw'>
                <Tab onClick={goToQmSomos}>Quem Somos?</Tab>
                <Tab onClick={goToContato}>Contato</Tab>
            </TabList>
        </TabList>
        </Tabs>
        <ContainerAdicionar>
            <CaixaTitulo titulo="Indicar"/>
            <CaixaTexto texto="Faça a sua própria indicação na plataforma!! Para isso, você precisa preencher abaixo com o nome da música e do artista, colocar o link da música e escolher no mínimo 1 tag para identificá-la. As tags dizem respeito ao gênero musical, nacionalidade e outros aspectos da música. A indicação passará por um processo de revisão e dentro de alguns dias você receberá por email a confirmação que ela foi adicionada a plataforma. Não esqueça que o WildTunes visa valorizar artistas pequenos e/ou independentes!!"/>
            <CaixaInput>
                <Input titulo='Nome da música:' type='text' placeholder='Escreva aqui o nome da música'/>
                <Input titulo='Artista:' type='text' placeholder='Escreva aqui o nome do artista'/>
                <Input titulo='Link:' type='url' placeholder='Insira aqui um link que direcione até a música'/>
                <Input titulo='Tags:' type='' placeholder='Escolha entre as tags disponíveis'/>
                <Input titulo='Usuário:' type='text' placeholder='Escreva aqui seu nome de usuário'/>
                <BotaoEnviar>Enviar</BotaoEnviar>
            </CaixaInput>
        </ContainerAdicionar>
        
        </>
    )
}

export default Adicionar;