import { Botoes, BotoesLogin, ContainerEntrada, Logo, PausaImg, ProgressoImg, Sessao, SessaoMeio } from "./styled";
import logo from '../../assets/logo-verde.png'  
// import { useNavigate } from "react-router-dom";
import tocando from '../../assets/tocando.png';
import pausa from  '../../assets/pausa.png'

function Entrada() {
    const data ={
        clientID: '80cc8182cdc3419fb86b2fbafe1dbffa',
        scopes: 'ugc-image-upload playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public user-read-email user-read-private streaming app-remote-control',
        redirectURI: 'http://localhost:3000/home'
    }
    
    
    // function login (){
    //     window.location.href = `https://accounts.spotify.com/authorize?client_id=${data.clientID}&response_type=code&redirect_uri=${data.redirectURI}&scope=${data.scopes}`
    // }   
    
    const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${data.clientID}&response_type=code&redirect_uri=${data.redirectURI}&scope=${data.scopes}`

    return(
        <>
        <ContainerEntrada>
            <Sessao>
                <Logo src={logo}/>
                <SessaoMeio>
                    <h1>Wild Tunes</h1>
                    <ProgressoImg src={tocando}/>
                    <PausaImg src={pausa}/>
                </SessaoMeio>
                <Botoes>
                    <BotoesLogin 
                    // onClick={api()}
                    >
                        <a href={AUTH_URL}>

                        Entrar com Spotify
                        </a>
                    </BotoesLogin>
                </Botoes>
            </Sessao>       
        </ContainerEntrada>
        </>
    )
}

export default Entrada;