import { useNavigate } from 'react-router-dom'
import Header from '../../componets/Header/Header'
import CaixaTexto from '../../componets/caixaTexto/CaixaTexto'
import CaixaTitulo from '../../componets/caixaTitulo/CaixaTitulo'
import { ContainerQmSomos } from './styled'
import { Tabs, TabList, Tab } from '@chakra-ui/react'

function QuemSomos() {
    const navegar = useNavigate()
    
    const goToMusicas = () => {
        navegar('/musicas')
    }
    const goToAlbuns = () => {
        navegar('/albuns')
    }
    const goToAdicionar = () => {
        navegar('/adicionar')
    }
    const goToContato = () => {
        navegar('/contato')
    }

    return(
        <>
        <Header/>
        {/* <NavHorizontal/> */}
        <Tabs variant='enclosed' defaultIndex={3}
        size='sm' 
        colorScheme='white' 
        color='#5C582C' 
        border='#5C582C'
        opacity='0.8'>
        <TabList>
            <TabList paddingLeft='15px' bg='#F5F2D0'>
                <Tab onClick={goToMusicas}>Músicas</Tab>
                <Tab onClick={goToAlbuns}>Álbuns</Tab>
                <Tab onClick={goToAdicionar}>Indicar</Tab>
            </TabList>
            <Tab>Quem Somos?</Tab>
            <TabList bg='#F5F2D0' width='69.75vw'>
                <Tab onClick={goToContato}>Contato</Tab>
            </TabList>
        </TabList>
        </Tabs>
        <ContainerQmSomos>
            <CaixaTitulo titulo="Quem Somos?"/>
            <CaixaTexto texto="Esse espaço será utilizado para expor o objetivo da plataforma, como e porque foi criada."/>
        </ContainerQmSomos>
        </>     
    )
}

export default QuemSomos