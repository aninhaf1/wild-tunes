import { ContainerTitulo, Fonte2 } from "./styled";


function CaixaTitulo(props) {
    
    return(
        <ContainerTitulo>
            <Fonte2>
            {props.titulo}
            </Fonte2>
        </ContainerTitulo>
    )
}

export default CaixaTitulo