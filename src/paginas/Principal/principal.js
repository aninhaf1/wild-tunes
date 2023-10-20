import {ContainerHome, DivQuadro, Fonte2, Estrela1Img, Estrela2Img, Texto, DivCentro, SideBar, CapaPlaylist, NomePlaylist} from './styled'
import Estrela1 from '../../assets/stars.png'
import Estrela2 from '../../assets/stars2.png'
import Nav from '../../componets/Nav/Nav'
import axios from 'axios'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { useEffect } from 'react'

function Home() {
    const clientID = ''
    const clientSecret = ''
    
    // obtendo codigo da url
    let params = new URLSearchParams(document.location.search)
    let code = params.get('code')
    console.log(code)
    
    // obtendo access token    
    let token = localStorage.getItem('token')
    let refreshToken = localStorage.getItem('refreshToken')
    let exipiresIn = localStorage.getItem('exipiresIn')
    
    const apiSpotify = ()=>{
        let body = {
            'grant_type': 'authorization_code',
            'code': code,
            'redirect_uri': 'http://localhost:3000/home'
        }
        
        const headers = {
            headers: {
                Authorization: `Basic ${btoa(clientID + ':' + clientSecret)}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        axios.post('https://accounts.spotify.com/api/token',body, headers)
        .then((response) =>{
            console.log(response)
            localStorage.setItem('token', response.data.access_token)
            localStorage.setItem('refreshToken', response.data.refresh_token)
            localStorage.setItem('exipiresIn', response.data.expires_in)
            console.log('token: ', response.data.access_token);
            console.log('refresh: ', response.data.refresh_token);
        })
        .catch((err) =>{console.log(err)})
    }
    useEffect(()=>{
        apiSpotify()
    },[])
    
    // obtendo o refresh access token
    // const RenovarToken = ()=>{
    //     let body = {
    //         "grant_type": 'refresh_token',
    //         "refresh_token": refreshToken
    //     }
        
    //     const headers = {
    //         headers: {
    //             Authorization: `Basic ${btoa(clientID + ':' + clientSecret)}`,
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         }
    //     }

    //     axios.post('https://accounts.spotify.com/api/token',body, headers)
    //     .then((response) =>{
    //         console.log(response)
    //         localStorage.setItem('token', response.data.access_token)
    //         localStorage.setItem('refreshToken', response.data.refresh_token)
    //         localStorage.setItem('exipiresIn', response.data.expires_in)
    //     })
    //     .catch((err) =>{console.log(err)})

    //     setTimeout(() => {
    //         RenovarToken()
    //     }, exipiresIn);
    // }

    // obtendo id do usuario
    // axios({
    //     method: 'GET',
    //     url: 'https://api.spotify.com/v1/me',
    //     headers: {Authorization: ` ${accessToken}`}
    // })


    return(
        <>
        <ContainerHome>
        <Nav/>
            <DivCentro>
                <DivQuadro>
                    <Fonte2>Bem-vindo!!</Fonte2>
                    <Estrela1Img src={Estrela1} alt=''></Estrela1Img>
                    <Texto>Wild Tunes é uma <br/> plataforma de indicação <br/> de músicas, com o objetivo <br/> debeneficiar bandas<br/> e artistas independentes, <br/> facilitando as músicas <br/> de chegarematé você!</Texto>
                    <Estrela2Img src={Estrela2} alt=''></Estrela2Img>
                </DivQuadro>
                <SideBar>
                    <div><ChevronLeftIcon color='#5E5812' boxSize={10}/></div>
                    <h3>Não sabe por onde começar?</h3>
                    <p>Aqui estão algumas playlists feitas pensando em você!!</p>
                    <a href=''>
                        <CapaPlaylist src='https://marketplace.canva.com/EAFj32UqSLY/1/0/1600w/canva-capa-para-playlist-s%C3%B3-as-melhores-mp3-moderno-rosa-l5vU9SJcVuw.jpg'/>
                        <NomePlaylist>Queer art</NomePlaylist>
                    </a>
                    <a href=''>
                        <CapaPlaylist src='https://marketplace.canva.com/EAFj32UqSLY/1/0/1600w/canva-capa-para-playlist-s%C3%B3-as-melhores-mp3-moderno-rosa-l5vU9SJcVuw.jpg'/>
                        <NomePlaylist>Só brasileiras</NomePlaylist>
                    </a>
                    <a href=''>
                        <CapaPlaylist src='https://marketplace.canva.com/EAFj32UqSLY/1/0/1600w/canva-capa-para-playlist-s%C3%B3-as-melhores-mp3-moderno-rosa-l5vU9SJcVuw.jpg'/>
                        <NomePlaylist>Indie</NomePlaylist>
                    </a>
                </SideBar>
            </DivCentro>
        </ContainerHome>
        
        </>
    )
}

export default Home