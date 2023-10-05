import styled from "styled-components";

export const DivAlbum = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;
    margin-bottom: 2px;
    flex: none;
    :hover{
        border-radius: 10px;    
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    }
`

export const NomeAlbum = styled.a`
    color: #5E5812;
    font-size: 14px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const CapaAlbum = styled.img`
    height: 140px;
    width: 140px;
    object-fit: cover;
`