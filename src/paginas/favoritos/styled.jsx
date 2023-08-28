import styled from "styled-components";

export const ContainerFavoritos = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Sessoes = styled.div`
    display: flex;
    /* background-color: red; */
    flex-direction: column;
    margin-top: 40px;
    /* width: 98vw; */
`

export const Titulo2 = styled.h2`
    color: #5C582C;
    font-size: 22px;
    align-self: flex-start;
    margin-left: 3vw;
`

export const Linha = styled.hr`
    background-color: #5C582C;
    align-self: center;
    border: none;
    height: 2px;
    width: 93vw;
`

export const DivFlechas = styled.div`
    display: flex;
    max-width: 100vw;
`

export const Carousel = styled.div`
    display: flex;
    margin: 10px 0;
    overflow-x: auto;
    scroll-behavior: smooth;
    ::-webkit-scrollbar{
    display: none;}
`

export const Voltar = styled.button`
    align-self: flex-start;
    margin: 10px 0 0 20px;
`

export const Esquerda = styled.button`
    /* justify-self: flex-start; */
`

export const Direita = styled.button`
    /* justify-self: flex-end; */
`