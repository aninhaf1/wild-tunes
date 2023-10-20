import styled from "styled-components";

export const ContainerNav = styled.div`
    background-color: #5C582C;
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 100vh;
    align-items: center;
    `

export const NavImage = styled.img`
    padding-bottom: 15px;
`

export const Fonte1 = styled.h1`
    color: #F5F2D0;
    border-bottom: solid 4px;
    text-transform: uppercase;
    font-size: 33px;
    text-align: center;
`

export const BotoesNav = styled.button`
    font-size: x-large;
    color: #F5F2D0;
    background-color: transparent;
    border: 0;
    margin-top: 30px;
    text-transform: uppercase;
    font-family: 'Galindo', cursive;
    :hover{
        text-decoration: underline;
    }
`