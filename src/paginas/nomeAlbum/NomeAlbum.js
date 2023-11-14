import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../componets/Header/Header";
import { CapaAlbum, ContainerNomeAlbum, DivLike, DivPrincipal, DivTags, DivTitulo, Like, NomeAl, NomeArtista, Num, Superior, Tags, Voltar } from "./styled";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import coracao from '../../assets/coracao.png'
import coracaoLiked from '../../assets/coracao-cheio.png'


function NomeAlbum() {
    const navegar = useNavigate()
    const goBack = () => {
        navegar(-1)
    }
    
    let [likes, setLikes] = useState(0); 
    const [adicionar, setAdicionar] = useState(true);
    const [likeVazio, setLikeVazio] = useState(true);
    const Favoritar = () => {
        setLikeVazio(!likeVazio);
        if (adicionar) {
            setLikes(likes + 1);
          } else {
            setLikes(likes - 1);
          }
          setAdicionar(!adicionar);
      };

    return(
        <>
        <Header/>
        <ContainerNomeAlbum>
            <Voltar onClick={goBack}>
                <ArrowLeftIcon color='#5C582C'/>
            </Voltar>
            <DivPrincipal>
                <Superior>
                    <CapaAlbum src='https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/ac/c1/e8/acc1e84f-0098-379c-7058-b8a043dad3f8/artwork.jpg/1200x1200bf-60.jpg'/>
                    <DivTitulo>
                        <NomeAl>Get a clue</NomeAl>
                        <NomeArtista>Aryy</NomeArtista>
                        <DivTags>
                            <Tags>Indie</Tags>
                            <Tags>Pop</Tags>
                        </DivTags>
                    </DivTitulo>
                    <DivLike>
                        <Num>{likes}</Num>
                        <button onClick={Favoritar}>
                            {likeVazio ? (
                            <Like src={coracao}/>
                            ) : (
                            <Like src={coracaoLiked}/>
                            )}
                        </button>
                    </DivLike>
                </Superior>
                <iframe src="https://open.spotify.com/embed/album/30Nbc5et4L9a3VAUei2qXh?utm_source=generator" width="50%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </DivPrincipal>
        </ContainerNomeAlbum>
        </>
    )
}

export default NomeAlbum;