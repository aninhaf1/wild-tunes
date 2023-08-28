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
                    <CapaAlbum src='https://i.pinimg.com/236x/90/68/05/906805b74d1ca2b5deb1ed561404634d--good-vibes-trippy.jpg'/>
                    <DivTitulo>
                        <NomeAl>Good Vibes</NomeAl>
                        <NomeArtista>Fulaninho</NomeArtista>
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
                <DivTags>
                    <Tags>Pop</Tags>
                    <Tags>Pop</Tags>
                </DivTags>
            </DivPrincipal>
        </ContainerNomeAlbum>
        </>
    )
}

export default NomeAlbum;