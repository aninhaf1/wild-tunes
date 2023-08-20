import { ContainerTexto, EstiloTexto } from "./styled"


function CaixaTexto(props) {

    return(
        <>
        <ContainerTexto>
            <EstiloTexto>
            {props.texto}
            </EstiloTexto>
        </ContainerTexto>
        </>
    )
}

export default CaixaTexto;