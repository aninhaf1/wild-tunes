import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { ContainerNav, NavImage, Fonte1, BotoesNav } from "./styled"

function Nav() {
    const navegar = useNavigate()
    const goToMusicas = () => {
        navegar('/musicas')
    }
    const goToAlbuns = () => {
        navegar('/albuns')
    }
    const goAdicionar = () => {
        navegar('/adicionar')
    }
    const goQuemSomos = () => {
        navegar('/quemsomos')
    }
    const goContato = () => {
        navegar('/contato')
    }
    return(
    <>
    <ContainerNav>
        <NavImage src={logo} alt='Logo Wild Tunes'></NavImage>
        <Fonte1>Wild Tunes</Fonte1>
            <BotoesNav onClick={goToMusicas}>Músicas</BotoesNav>
            <BotoesNav onClick={goToAlbuns}>Álbuns</BotoesNav>
            <BotoesNav onClick={goAdicionar}>Indicar</BotoesNav>
            <BotoesNav onClick={goQuemSomos}>Quem somos?</BotoesNav>
            <BotoesNav onClick={goContato}>Contato</BotoesNav>
    </ContainerNav>
    </>
    )
};

export default Nav