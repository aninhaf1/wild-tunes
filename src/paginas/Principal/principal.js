import {ContainerHome, DivQuadro, Section, Fonte2, Estrela1Img, Estrela2Img, Texto, DivCentro, SideBar} from './styled'
import Estrela1 from '../../assets/stars.png'
import Estrela2 from '../../assets/stars2.png'
import Nav from '../../componets/Nav/Nav'

function Home() {
    
    
    return(
        <>
        <ContainerHome>
        <Nav/>
            <DivCentro>
                <DivQuadro>
                    <Fonte2>Bem-vindo!!</Fonte2>
                    <Estrela1Img src={Estrela1} alt=''></Estrela1Img>
                    <Texto>Wild Tunes é uma <br/> plataforma de indicação <br/> de músicas, com o objetivo <br/> debeneficiar bandas<br/> e artistas independentes, <br/> facilitando as músicas <br/> de chegarematé você!</Texto>
                    <Estrela2Img src={Estrela2} alt=''></Estrela2Img>
                </DivQuadro>
                <SideBar>
                    <a>oi</a>
                </SideBar>
            </DivCentro>
        </ContainerHome>
        </>
    )
}

export default Home