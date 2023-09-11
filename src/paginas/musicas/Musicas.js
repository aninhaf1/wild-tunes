import { useNavigate } from "react-router-dom";
import Header from "../../componets/Header/Header";
import CaixaTitulo from "../../componets/caixaTitulo/CaixaTitulo";
import CardMusica from "../../componets/cardMusica/CardMusica";
import Tags from "../../componets/tags/Tags";
import { ContainerMusicas, DivCards, DivPrincipal } from "./styled";
import { Tabs, TabList, Tab } from '@chakra-ui/react'


function Musicas() {
    const navegar = useNavigate()
    const goToAlbuns = () => {
        navegar('/albuns')
    }
    const goToAdicionar = () => {
        navegar('/adicionar')
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
        <Tabs variant='enclosed' defaultIndex={0} 
        size='sm' 
        colorScheme='white' 
        color='#5C582C' 
        border='#5C582C'
        opacity='0.8'
        >
            <TabList>
            <TabList paddingLeft='15px' bg='#F5F2D0'>
            </TabList>
            <Tab>Músicas</Tab>
            <TabList bg='#F5F2D0' width='100vw'>
                <Tab onClick={goToAlbuns}>Álbuns</Tab>
                <Tab onClick={goToAdicionar}>Indicar</Tab>
                <Tab onClick={goToQmSomos}>Quem Somos?</Tab>
                <Tab onClick={goToContato}>Contato</Tab>
            </TabList>
            </TabList>
        </Tabs>
        <ContainerMusicas>
            <CaixaTitulo titulo='Músicas'/>
            <DivPrincipal>
                <Tags/>
                <DivCards>
                    <CardMusica musica='Villan Arc' linkMusica='nomeMusica' artista='Aryy'/>
                    <CardMusica musica='Villan Arc' linkMusica='' artista='Aryy' />
                    <CardMusica musica='Villan Arc' linkMusica='' artista='Aryy' />
                    <CardMusica musica='Villan Arc' linkMusica='' artista='Aryy' />
                    <CardMusica musica='Villan Arc' linkMusica='' artista='Aryy' />
                    <CardMusica musica='Villan Arc' linkMusica='' artista='Aryy' />
                </DivCards>
            </DivPrincipal>
        </ContainerMusicas>
        </>
    )
}

export default Musicas;