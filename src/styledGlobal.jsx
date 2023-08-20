import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import imagemFundo from './assets/background1.png'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Galindo', cursive;
}
`

export const Background = styled.div`
    min-height: 100vh;
    /* background-image: url(${imagemFundo});
    background-color: #F5F2D0; */
    /* background-image: linear-gradient(to top, #5E5812 0%, #F5F2D0 70%); */
    background: #F5F2D0; 
    background: linear-gradient(to bottom right, #F5F2D0 0%, #5E5812 100%); 
`