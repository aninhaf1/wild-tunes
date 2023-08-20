import { CapaPlaylist, DivPlaylist, NomePlaylist } from "./styled";


function CardPlaylist(props) {
    

    return(
        <>
        <DivPlaylist>
            <NomePlaylist href={props.link}>
                <CapaPlaylist src='https://i.pinimg.com/236x/90/68/05/906805b74d1ca2b5deb1ed561404634d--good-vibes-trippy.jpg'/>
                {props.nome}
                </NomePlaylist>
        </DivPlaylist>
        </>
    )
}

export default CardPlaylist;