import { useNavigate } from "react-router-dom";
import Header from "../../componets/Header/Header";
import CaixaTitulo from "../../componets/caixaTitulo/CaixaTitulo";
import CardAlbum from "../../componets/cardAlbum/cardAlbum";
import Tags from "../../componets/tags/Tags";
import {ContainerAlbuns, DivCards, DivPrincipal} from './styled'
import { Tabs, TabList, Tab } from '@chakra-ui/react'


function Albuns() {
    const navegar = useNavigate()
    
    const goToMusicas = () => {
        navegar('/musicas')
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
        {/* <NavHorizontal/> */}
        <Tabs variant='enclosed' defaultIndex={1}
        size='sm' 
        colorScheme='white' 
        color='#5C582C' 
        border='#5C582C' 
        opacity='0.8'>
        <TabList>
            <TabList paddingLeft='15px' bg='#F5F2D0'>
                <Tab onClick={goToMusicas}>Músicas</Tab>
            </TabList>
            <Tab>Álbuns</Tab>
            <TabList bg='#F5F2D0' width='100vw'>
                <Tab onClick={goToAdicionar}>Indicar</Tab>
                <Tab onClick={goToQmSomos}>Quem Somos?</Tab>
                <Tab onClick={goToContato}>Contato</Tab>
            </TabList>
        </TabList>
        </Tabs>
        <ContainerAlbuns>
            <CaixaTitulo titulo='Álbuns'/>
            <DivPrincipal>
                <Tags/>
                <DivCards>
                    <CardAlbum nome='Good Vibes' link='nome-album' artista='Fulaninha'/>
                    <CardAlbum nome='Good Vibes' link=''/>
                    <CardAlbum nome='Good Vibes' link=''/>
                    <CardAlbum nome='Good Vibes' link=''/>
                </DivCards>
            </DivPrincipal>
        </ContainerAlbuns>
        </>
    )
}

export default Albuns;