import styled from "styled-components";

export const ContainerSuaConta = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Caixa = styled.div`
    display: flex;
    width: 60%;
    min-height: 30vh;
    background-color: #5C582C;
    opacity: 0.60;
    margin: 30px 0px;
    border-radius: 30px;
    /* align-items: center; */
    justify-content: center;
    padding: 30px 0;
    gap: 20px;
`

export const Voltar = styled.button`
    align-self: flex-start;
    margin: 10px 0 0 20px;
`

export const Sessao = styled.section`
    display: flex;
    flex-direction: column;
    height: 40vh;
    width: 45%;
    border: 3px solid;
    border-radius: 10px;
    border-color: #C1B95D;
    padding: 10px;
    p{
        color: #F5F2D0;
        font-size: 16px;
        opacity: 0.9;
        width: 18vw;
    }
    button{
        color: #C1B95D;
        font-size: 20px;
        text-transform: uppercase;
        align-self: center;
        margin-top: 8px;
        :hover{
            text-decoration: underline;
            color: red;
        }
    }
    `

export const Titulo = styled.div`
    display: flex;
    justify-content: space-between;
    img{
        height: 90px;
    }
    h3{
        color: #F5F2D0;
        font-size: 26px;
        text-transform: uppercase;
    }
    
    `

export const GotoSpotify = styled.a`
    color: #C1B95D;
    text-transform: uppercase;
    /* justify-self: center; */
    align-self: center;
    margin-top: 20px;
    font-size: 20px;
    :hover{
        text-decoration: underline;
    }
`