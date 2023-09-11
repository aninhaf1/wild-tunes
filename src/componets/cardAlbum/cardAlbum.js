import { CapaAlbum, DivAlbum, NomeAlbum } from "./styled";


function CardAlbum(props) {
    

    return(
        <>
        <DivAlbum>
            <NomeAlbum href={props.link}>
                <CapaAlbum src='https://i.pinimg.com/236x/90/68/05/906805b74d1ca2b5deb1ed561404634d--good-vibes-trippy.jpg'/>
                {props.nome}
                <NomeAlbum>{props.artista}</NomeAlbum>
            </NomeAlbum>
        </DivAlbum>
        </>
    )
}

export default CardAlbum;