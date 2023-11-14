import { CapaAlbum, DivAlbum, NomeAlbum } from "./styled";


function CardAlbum(props) {
    

    return(
        <>
        <DivAlbum>
            <NomeAlbum href={props.link}>
                <CapaAlbum src='https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/ac/c1/e8/acc1e84f-0098-379c-7058-b8a043dad3f8/artwork.jpg/1200x1200bf-60.jpg'/>
                {props.nome}
                <NomeAlbum>{props.artista}</NomeAlbum>
            </NomeAlbum>
        </DivAlbum>
        </>
    )
}

export default CardAlbum;