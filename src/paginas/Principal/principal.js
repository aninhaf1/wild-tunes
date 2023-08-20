import {ContainerHome, BotoesLogin, DivBotoes, DivQuadro, Section, Fonte2, Estrela1Img, Estrela2Img, Texto, DivCentro} from './styled'
import Estrela1 from '../../assets/stars.png'
import Estrela2 from '../../assets/stars2.png'
import Nav from '../../componets/Nav/Nav'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navegar = useNavigate()
    const goToLogin = () => {
        navegar('/login')
    }
    const goCadastro = () => {
        navegar('/cadastro')
    }
    
    return(
        <>
        <ContainerHome>
            <Nav/>
            <DivCentro>
                <DivBotoes>
                    <BotoesLogin onClick={goCadastro}>Cadastro</BotoesLogin>
                    <BotoesLogin onClick={goToLogin}>Login</BotoesLogin>
                </DivBotoes>
                <Section>
                    <DivQuadro>
                        <Fonte2>Bem-vindo!!</Fonte2>
                        <Estrela1Img src={Estrela1} alt=''></Estrela1Img>
                        <Texto>Wild Tunes é uma <br/> plataforma criada com o <br/>objetivo de beneficiar<br/> bandas e artistas<br/> independentes, dando a <br/>oportunidade de serem<br/> reconhecidos pelos<br/> consumidores de música.</Texto>
                        <Estrela2Img src={Estrela2} alt=''></Estrela2Img>
                    </DivQuadro>
                </Section>
            </DivCentro>
        </ContainerHome>
        </>
    )
}

export default Home