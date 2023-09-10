import {ContainerHome, BotoesLogin, DivBotoes, DivQuadro, Section, Fonte2, Estrela1Img, Estrela2Img, Texto, DivCentro} from './styled'
import Estrela1 from '../../assets/stars.png'
import Estrela2 from '../../assets/stars2.png'
import Nav from '../../componets/Nav/Nav'
import { useNavigate } from 'react-router-dom'

function Home() {
    
    
    return(
        <>
        <ContainerHome>
        <Nav/>
            <DivCentro>
                <Section>
                    <DivQuadro>
                        <Fonte2>Bem-vindo!!</Fonte2>
                        <Estrela1Img src={Estrela1} alt=''></Estrela1Img>
                        <Texto>Wild Tunes é uma <br/> plataforma de indicação <br/> de músicas, com o objetivo <br/> de beneficiar bandas<br/> e artistas independentes, <br/> facilitando as músicas <br/> de chegarem até você!</Texto>
                        <Estrela2Img src={Estrela2} alt=''></Estrela2Img>
                    </DivQuadro>
                </Section>
            </DivCentro>
        </ContainerHome>
        </>
    )
}

export default Home