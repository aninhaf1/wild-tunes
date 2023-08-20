import { DivInput, Entrada, TituloInput } from "./styled";


function Input(props) {
    

    return(
        <>
        <DivInput>
            <TituloInput>
                {props.titulo}
            </TituloInput>
            <Entrada type={props.type} placeholder={props.placeholder}/>
        </DivInput>
        </>
    )
}

export default Input;