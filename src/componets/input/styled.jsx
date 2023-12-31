import styled from "styled-components";

export const DivInput = styled.form`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`

export const TituloInput = styled.label`
    color: #F5F2D0;
    font-size: 18px;
`

export const Entrada =styled.input`
    background-color: #C1B95D;
    color: #5C582C;
    height: 40px;
    width: 500px;
    border-radius: 30px;
    border: none;
    font-size: 18px;
    padding:10px;
    ::placeholder{
        color: #5C582C;
    }
`