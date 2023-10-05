import styled from "styled-components";

export const ContainerEntrada = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    h1{
        color: #5C582C;
        font-size: 80px;
        text-transform: uppercase;
    }
`
export const Sessao = styled.div`
    display: flex;
    flex-direction: column;  
    /* justify-content: center; */
    align-items: center;
    border: solid 5px #5C582C;
    height: 80vh;
    width: 70vw;
    border-radius: 15px;
    padding: 25px;
    `

export const Botoes = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 50px;
`

export const Logo = styled.img`
    height: 130px;
    margin-bottom: 15px;
`

export const BotoesLogin = styled.button`
    height: 50px;
    width: 340px;
    border: none;
    border-radius: 30px;
    background-color: #5C582C;
    color: #F5F2D0;
    text-transform: uppercase;
    font-size: 25px;
    :hover{
        background-color: #C1B95D;
        padding-top: 5px;
    }
`

// export const Linha = styled.hr`
//     background-color: #5C582C;
//     border: none;
//     height: 5px;
//     width: 20vw;
// `

export const SessaoMeio = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
`

export const ProgressoImg = styled.img`
    height: 30px;
    width: 40vw;
`

export const PausaImg = styled.img`
    height: 50px;
`