import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

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
    background-color: #F5F2D0; 
    background: #F5F2D0; 
    background: linear-gradient(to bottom right, #F5F2D0 0%, #5E5812 100%); 
`