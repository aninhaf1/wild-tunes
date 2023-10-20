import styled from "styled-components";

export const ContainerHome = styled.main`
    display: flex;
`

export const DivCentro = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
`

export const DivQuadro = styled.article`
    display: grid;
    grid-template-areas: '. Fonte2 . '
                        'Estrela1Img p . '
                        '. p . '
                        '. . Estrela2Img ';
    grid-template-columns: 70px auto 70px 30px;
    grid-template-rows: 1fr 1fr 1fr 1fr 10px;
    background-color: #C1B95D;
    width: 520px;
    height: 400px;
    border-radius: 60px;
    text-align: center;
    color: #5E5812;
`

export const Fonte2 = styled.h2`
    border-bottom: solid #F5F2D0 4px;
    margin-bottom: 10px;
    margin-top: 35px;
    text-transform: uppercase;
    font-size: 45px;
    letter-spacing: 3px;
    grid-area: Fonte2;
`

export const Estrela1Img = styled.img`
    height: 80px;
    width: 80px;
    grid-area: Estrela1Img;
`

export const Estrela2Img = styled.img`
    height: 80px;
    width: 90px;
    grid-area: Estrela2Img;
`

export const Texto = styled.p`
    grid-area: p;
`

export const SideBar = styled.div`
    position: absolute; 
    right: 0; 
    padding: 30px 18px 0 18px; 
    width: 50px; 
    min-height: 100%;
    font-size: 20px;
    background-color: #C1B95D;
    display: flex;
    flex-direction: column;
    :hover {
        width: 240px;
        h3{
            display:table-cell; 
        }
        p{
            display: table-cell;
        }
        a{
            display: flex;
        }
        div{
            display: none;
        }
    }
    h3{
        display: none;
        text-align: center;
        text-transform: uppercase;
        color: #F5F2D0;
        font-size: 20px;
        
    }
    p{
        display: none;
        color: #F5F2D0;
        text-align: center;
        font-size: 14px;
    }
    a{
        display: none;
        flex-direction: column;
        align-items: center;
        margin-top: 5px;
    }
    div{
        position: absolute;
        top: 48%;
        right: 0;
    }
`

export const CapaPlaylist = styled.img`
    height: 140px;
    width: 140px;
    object-fit: cover;
    border-radius: 20px;
`

export const NomePlaylist = styled.label`
    font-size: 14px;
    color: #5E5812
`