import styled from "styled-components";

export const ContainerSuaConta = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Caixa = styled.div`
    display: flex;
    width: 50%;
    min-height: 30vh;
    background-color: #5C582C;
    opacity: 0.60;
    margin: 30px 0px;
    border-radius: 30px;
    align-items: center;
    flex-direction: column;
    padding-bottom: 30px;
`

export const TituloInput = styled.p`
    color: #F5F2D0;
    font-size: 18px;
`

export const DivPerfil = styled.div`
    display: flex;
    width: 75%;
    gap: 10px;
`

export const ImgPerfil = styled.img`
    border-radius: 50%;
    height: 150px;
    width: 150px;
    object-fit: cover;
`

export const Voltar = styled.button`
    align-self: flex-start;
    margin: 10px 0 0 20px;
`

export const EditarPerfil = styled.button`
    align-self: flex-end;
`