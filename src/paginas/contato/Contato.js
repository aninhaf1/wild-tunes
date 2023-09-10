import { ContainerContato, CaixaLinks, ImgSimbolos, Links, DivLinks } from "./styled"
import Header from "../../componets/Header/Header"
import CaixaTitulo from "../../componets/caixaTitulo/CaixaTitulo"
import insta from  '../../assets/insta.png'
import email from '../../assets/email.png'
import { CopyIcon } from "@chakra-ui/icons"
import { useClipboard, useToast, Tabs, TabList, Tab } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"


function Contato() {
    const { onCopy } = useClipboard("lalalalal@gmail.com")
    const toast = useToast()

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
    const goToQmSomos = () => {
        navegar('/quemsomos')
    }

    return(
        <>
        <Header/>
        {/* <NavHorizontal/> */}
        <Tabs variant='enclosed' defaultIndex={4}
        size='sm' 
        colorScheme='white' 
        color='#5C582C' 
        border='#5C582C'
        opacity='0.8'>
        <TabList >
            <TabList paddingLeft='15px' bg='#F5F2D0' >
            <Tab onClick={goToMusicas}>Músicas</Tab>
            <Tab onClick={goToAlbuns}>Álbuns</Tab>
            <Tab onClick={goToAdicionar}>Indicar</Tab>
            <Tab onClick={goToQmSomos}>Quem Somos?</Tab>
            </TabList>
            <Tab>Contato</Tab>
            <TabList bg='#F5F2D0' width='61.55vw'>
            </TabList>
        </TabList>
        </Tabs>
        <ContainerContato>
            <CaixaTitulo titulo="Contato"/>
            <CaixaLinks>
                <DivLinks>
                    <ImgSimbolos src={insta}/>
                    <Links href="https://www.instagram.com/aninhaf.15/" target="_blank">aninhaf.15</Links>
                </DivLinks>
                <DivLinks>
                    <ImgSimbolos src={email}/>
                    <Links>lalalalal@gmail.com</Links>
                    <button onClick={onCopy}>
                    <CopyIcon color='#F5F2D0' onClick={() =>
                        toast({
                            title: 'Copiado!',
                            status: 'success',
                            duration: 2000,
                            isClosable: true,
                        })
                    }/>
                    </button>
                </DivLinks>
            </CaixaLinks>
        </ContainerContato>
        </>
    )
}

export default Contato