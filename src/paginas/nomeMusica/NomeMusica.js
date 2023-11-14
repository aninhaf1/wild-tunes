import { ArrowLeftIcon } from "@chakra-ui/icons";
import Header from "../../componets/Header/Header";
import { CapaMsc, ContainerNomeMsc, DivLike, DivPrincipal, DivTags, DivTitulo, Like, NomeArtista, NomeMsc, Num, Superior, Tags, Voltar } from "./styled";
import { useNavigate } from "react-router-dom";
import coracao from '../../assets/coracao.png'
import coracaoLiked from '../../assets/coracao-cheio.png'
import { useState } from 'react';


function NomeMusica() {
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
        <ContainerNomeMsc>
            <Voltar onClick={goBack}>
                <ArrowLeftIcon color='#5C582C'/>
            </Voltar>
            <DivPrincipal>
                <Superior>
                    <CapaMsc src={'https://i.scdn.co/image/ab67616d0000b273812b38fbd0820a98cf4000f3'}/>
                    <DivTitulo>
                        <NomeMsc>Villain Arc</NomeMsc>
                        <NomeArtista>Aryy</NomeArtista>
                        <DivTags>
                            <Tags>Indie</Tags>
                            <Tags>Indie</Tags>
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
                <iframe  src="https://open.spotify.com/embed/track/3cTXany0VPVP1kNrPBekD2?utm_source=generator" width="50%" height="90" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </DivPrincipal>
        </ContainerNomeMsc>
        </>
    )
}

export default NomeMusica;