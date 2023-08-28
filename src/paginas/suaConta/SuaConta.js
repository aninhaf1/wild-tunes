import Header from "../../componets/Header/Header";
import CaixaTitulo from "../../componets/caixaTitulo/CaixaTitulo";
import { Caixa, ContainerSuaConta } from "./styled";


function SuaConta() {
    
    return(
        <>
        <Header/>
        <ContainerSuaConta>
            <CaixaTitulo titulo='Sua Conta'/>
            <Caixa>
                
            </Caixa>
        </ContainerSuaConta>
        </>
    )
}

export default SuaConta;