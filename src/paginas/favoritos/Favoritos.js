import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Header from "../../componets/Header/Header";
import CaixaTitulo from "../../componets/caixaTitulo/CaixaTitulo";
import CardMusica from "../../componets/cardMusica/CardMusica";
import { Carousel, ContainerFavoritos, Direita, DivFlechas, Esquerda, Linha, Sessoes, Titulo2, Voltar } from "./styled";
import { useRef } from "react";
import CardAlbum from "../../componets/cardAlbum/cardAlbum";
import { useNavigate } from "react-router-dom";


function Favoritos() {
    const navegar = useNavigate()
    const goBack = () => {
        navegar(-1)
    }

    const carrossel = useRef(null)
    const handleLeftClick = (e) =>{
        e.preventDefault();
        carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
        
    }
    const handleRightClick = (e) =>{
        e.preventDefault();
        carrossel.current.scrollLeft += carrossel.current.offsetWidth;
        
    }
    const carrossel2 = useRef(null)
    const handleLeftClick2 = (e) =>{
        e.preventDefault();
        carrossel2.current.scrollLeft -= carrossel2.current.offsetWidth;
        
    }
    const handleRightClick2 = (e) =>{
        e.preventDefault();
        carrossel2.current.scrollLeft += carrossel2.current.offsetWidth;

    }
    return(
        <>
        <Header/>
        <ContainerFavoritos>
            <Voltar onClick={goBack}>
                <ArrowLeftIcon color='#5C582C'/>
            </Voltar>
            <CaixaTitulo titulo='Favoritos'/>
            <Sessoes>
                <Titulo2>Músicas</Titulo2>
                <Linha/>
                <DivFlechas>
                    <Esquerda onClick={handleLeftClick}>
                        <ChevronLeftIcon boxSize={10} color='#5C582C' opacity='0.6'/>
                    </Esquerda>
                    <Carousel ref={carrossel}>
                        <CardMusica/>
                        <CardMusica/>
                        <CardMusica/>
                        <CardMusica/>
                        <CardMusica/>
                        <CardMusica/>
                        <CardMusica/>
                        <CardMusica/>
                        <CardMusica/>
                        <CardMusica/>
                        <CardMusica/>
                        <CardMusica/>
                        <CardMusica/>
                        <CardMusica/>
                        <CardMusica/>
                        <CardMusica/>
                    </Carousel>
                    <Direita onClick={handleRightClick}>
                        <ChevronRightIcon boxSize={10} color='#5C582C' opacity='0.6'/>
                    </Direita>
                </DivFlechas>
            </Sessoes>
            <Sessoes>
                <Titulo2>Álbuns</Titulo2>
                <Linha/>
                <DivFlechas>
                    <Esquerda onClick={handleLeftClick2}>
                        <ChevronLeftIcon boxSize={10} color='#5C582C' opacity='0.6'/>
                    </Esquerda>
                    <Carousel ref={carrossel2}>
                        <CardAlbum/>
                        <CardAlbum/>
                        <CardAlbum/>
                        <CardAlbum/>
                        <CardAlbum/>
                        <CardAlbum/>
                        <CardAlbum/>
                        <CardAlbum/>
                        <CardAlbum/>
                        <CardAlbum/>
                        
                    </Carousel>
                    <Direita onClick={handleRightClick2}>
                        <ChevronRightIcon boxSize={10} color='#5C582C'/>
                    </Direita>
                </DivFlechas>
            </Sessoes>
            
        </ContainerFavoritos>
        </>
    )
}

export default Favoritos;