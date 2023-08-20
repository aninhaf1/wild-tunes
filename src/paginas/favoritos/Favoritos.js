import Header from "../../componets/Header/Header";
import CaixaTitulo from "../../componets/caixaTitulo/CaixaTitulo";
import { ContainerFavoritos } from "./styled";


function Favoritos() {
    
    return(
        <>
        <Header/>
        <ContainerFavoritos>
            <CaixaTitulo titulo='Favoritos'/>
        </ContainerFavoritos>
        </>
    )
}

export default Favoritos;