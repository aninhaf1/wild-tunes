import { useNavigate } from "react-router-dom";
import Header from "../../componets/Header/Header";
import CaixaTitulo from "../../componets/caixaTitulo/CaixaTitulo";
import CardPlaylist from "../../componets/cardPlaylist/cardPlaylist";
import Tags from "../../componets/tags/Tags";
import {ContainerPlaylists, DivCards, DivPrincipal} from './styled'
import { Tabs, TabList, Tab } from '@chakra-ui/react'


function Playlists() {
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
            <Tab>Playlists</Tab>
            <TabList bg='#F5F2D0' width='100vw'>
                <Tab onClick={goToAdicionar}>Adicionar</Tab>
                <Tab onClick={goToQmSomos}>Quem Somos?</Tab>
                <Tab onClick={goToContato}>Contato</Tab>
            </TabList>
        </TabList>
        </Tabs>
        <ContainerPlaylists>
            <CaixaTitulo titulo='Playlists'/>
            <DivPrincipal>
                <Tags/>
                <DivCards>
                    <CardPlaylist nome='Good Vibes' link='nome-playlist'/>
                    <CardPlaylist nome='Good Vibes' link=''/>
                    <CardPlaylist nome='Good Vibes' link=''/>
                    <CardPlaylist nome='Good Vibes' link=''/>
                </DivCards>
            </DivPrincipal>
        </ContainerPlaylists>
        </>
    )
}

export default Playlists;