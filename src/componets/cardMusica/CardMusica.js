import { CapaMusica, DivMusica, Nomes } from "./styled";


function CardMusica(props) {
    

    return(
        <>
        <DivMusica>
            <Nomes href={props.linkMusica}>
                <CapaMusica src='https://i.scdn.co/image/ab67616d0000b273812b38fbd0820a98cf4000f3'/>
                {props.musica}
                <Nomes>{props.artista}</Nomes>
            </Nomes>
        </DivMusica>
        


        </>
    )
}

export default CardMusica;