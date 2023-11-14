import styled from "styled-components";

export const ContainerNomeMsc = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DivPrincipal = styled.div`
    display: flex;
    /* flex-direction: column; */
    width: 80vw;
    min-height: 65vh;
    background-color: #5C582C;
    opacity: 0.70;
    margin-top: 10px;
    border-radius: 30px;
    padding: 60px;
    flex-direction: column;
`

export const Voltar = styled.button`
    align-self: flex-start;
    margin: 20px;
`

export const CapaMsc = styled.img`
    height: 30vh;
`

export const NomeMsc = styled.h2`
    color: #F5F2D0;
    font-size: 32px;
`

export const NomeArtista = styled.p`
    color: #F5F2D0;
    font-size: 24px;
`
export const DivTitulo = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    width: 50vw;
    height: 30vh;
`
export const DivLike = styled.div`
    display: flex;
    height: 50px;
    align-items: center;
`

export const Like = styled.img`
    height: 30px;
`

export const Num = styled.p`
    color: #F5F2D0;
    font-size: 24px;
    margin: 4px;
`

export const DivTags = styled.div`
    padding-top: 10px;
    gap: 7px;
    width: 50vw;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
`

export const Tags = styled.button`
    background-color: #F5F2D0;
    color: #C1B95D;
    text-transform: uppercase;
    height: 40px;
    min-width: 100px;
    border-radius: 25px;
    font-size: 20px;    
    padding: 8px;
`

export const Superior = styled.div`
    display: flex;
`