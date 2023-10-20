import styled from "styled-components";

export const DivMusica = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;
    margin-bottom: 2px;
    flex: none;
    :hover{
        border-radius: 10px;    
        box-shadow: 5px 5px 10px #5C582C;
    }
`

export const Nomes = styled.a`
    color: #5E5812;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CapaMusica = styled.img`
    height: 140px;
    width: 140px;
    object-fit: cover;
`