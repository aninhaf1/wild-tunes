import { ContainerHeader, DivLogo, Fonte2, HeaderImage } from "./styled";
import logo from '../../assets/logo.png'


function HeaderEntrar() {
    

    return(
        <>
        <ContainerHeader>
            <DivLogo>
                <HeaderImage src={logo} alt="Logo Wild Tunes"/>
                <Fonte2>Wild Tunes</Fonte2>
            </DivLogo>
        </ContainerHeader>
        </>
    )
}

export default HeaderEntrar;