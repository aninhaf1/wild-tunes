import styled from "styled-components";

export const ContainerHome = styled.main`
    display: flex;
`

export const DivCentro = styled.div`
    flex-direction: column;
`

export const DivBotoes = styled.div`
    height: 10%;
    width: 165vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-top: 20px;
`

export const BotoesLogin = styled.button`
    height: 40px;
    width: 120px;
    border: none;
    border-radius: 20px;
    background-color: #5C582C;
    font-family: 'Galindo', cursive;
    color: #C1B95D;
    text-transform: uppercase;
    margin-right: 10px;
`

export const Section = styled.section`
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
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