import styled from "styled-components";
import imagem from '../../assets/tentativa1.png'

export const ContainerEntrada = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    h1{
        color: #5C582C;
        font-size: 90px;
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
    margin-top: 90px;
`

// export const Estrelinha1 = styled.img`
//     height: 30px;
//     position: fixed;
//     left: 140px;
//     `
// export const Estrelinha2 = styled.img`
//     height: 30px;
//     position: fixed;
//     right: 140px;
// `
// export const Estrelinha3 = styled.img`
//     height: 30px;
//     position: fixed;
//     left: 140px;
// `
// export const Estrelinha4 = styled.img`
//     height: 30px;
//     position: fixed;
//     right: 140px;
// `

export const Logo = styled.img`
    height: 140px;
    margin-bottom: 15px;
`

export const BotoesLogin = styled.button`
    height: 40px;
    width: 160px;
    border: none;
    border-radius: 20px;
    background-color: #5C582C;
    color: #F5F2D0;
    text-transform: uppercase;
    font-size: 20px;
`

export const Linha = styled.hr`
    background-color: #5C582C;
    border: none;
    height: 5px;
    width: 20vw;
`

export const SessaoMeio = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
`