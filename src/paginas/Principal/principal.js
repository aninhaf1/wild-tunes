import {ContainerHome, DivQuadro, Fonte2, Estrela1Img, Estrela2Img, Texto, DivCentro, SideBar, CapaPlaylist, NomePlaylist} from './styled'
import Estrela1 from '../../assets/stars.png'
import Estrela2 from '../../assets/stars2.png'
import Nav from '../../componets/Nav/Nav'
import axios from 'axios'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import Entrada from '../entrada/Entrada'
import { useEffect } from 'react'
import { useState } from 'react'

function Home(props) {
    const clientID = '80cc8182cdc3419fb86b2fbafe1dbffa'
    const clientSecret = ''

    
    // obtendo codigo da url
    let params = new URLSearchParams(document.location.search)
    let code = params.get('code')
    // console.log("code:", code)     
    
    
    // obtendo access token       
    useEffect(()=>{
        // const data = {
            //     method: 'POST',
            //     headers: {
                //         'Content-Type': 'application/x-www-form-urlencoded'
                //     },
                //     body: `grant_type:authorization_code&client_id=${clientID}&client_secret=${clientSecret}`
                // }
        // fetch('https://accounts.spotify.com/api/token', data)
            let body = {
                'grant_type': 'authorization_code',
                'code': code,
                'redirect_uri': 'http://localhost:3000/home'
            }
            // console.log("body", body)
            
            const headers = {
                headers: {
                    Authorization: `Basic ${btoa(clientID + ':' + clientSecret)}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
            
            axios.post('https://accounts.spotify.com/api/token', new URLSearchParams({
                'grant_type': 'authorization_code',
                'code': code,
                'redirect_uri': 'http://localhost:3000/home'
            }), headers)
            .then((response) =>{
                console.log(response)
                
                // setTokenExterno('token', response.data.access_token)
                // console.log("tokenExterno", tokenExterno)
                localStorage.setItem('token', response.data.access_token)
                localStorage.setItem('refreshToken', response.data.refresh_token)
                localStorage.setItem('exipiresIn', response.data.expires_in)
                console.log('token: ', response.data.access_token);
                console.log('refresh: ', response.data.refresh_token);
            })
            .catch((err) =>{console.log(err)})
    }, [])
        
    let token = localStorage.getItem('token')
        
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
    const [usuario, setUsuario] = useState([])
    useEffect(()=>{
        const user = async () => {
            try {
              const response = await axios({
                method: 'GET',
                url: 'https://api.spotify.com/v1/me',
                headers: { Authorization: `Bearer ${token}` },
              });
              const userData = response.data;
              setUsuario(userData);
              console.log('user', userData);
            } catch (error) {
                console.error('Erro:', error);
                // window.location = '/'
              }
        };
        user();
    }, [token]);
    localStorage.setItem('id_user', usuario.id)
    localStorage.setItem('nome_user', usuario.display_name)
    localStorage.setItem('email', usuario.email)
    let userPic = "";
    if (usuario.images && Array.isArray(usuario.images) && usuario.images.length > 0) {
        userPic = usuario.images[0].url;
    } 
    localStorage.setItem('ft_perfil', userPic)
    

    //obtendo playlists
    const [playlistsQueerArt, setPlaylistsQueerArt] = useState([])
    const [playlistsBR, setPlaylistsBR] = useState([])
    const [playlistsCoracao, setPlaylistsCoracao] = useState([])
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await axios({
                method: 'GET',
                url: 'https://api.spotify.com/v1/playlists/3pnGqZyXgTIsZDxo1Uho0H',
                headers: { Authorization: `Bearer ${token}` },
              });
              const playlistData = response.data;
              setPlaylistsQueerArt(playlistData);
            //   console.log(playlistData);
            } catch (error) {
                console.error('Erro:', error);
              }
        };
        fetchData();
    }, [token]);
    const playlistQueerArtName = playlistsQueerArt.name;
    const playlistQueerArtSpotifyUrl = playlistsQueerArt.external_urls?.spotify;
    let playlistQueerArtImages = "";
    if (playlistsQueerArt.images && Array.isArray(playlistsQueerArt.images) && playlistsQueerArt.images.length > 0) {
        playlistQueerArtImages = playlistsQueerArt.images[0].url;
    } 
    
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await axios({
                method: 'GET',
                url: 'https://api.spotify.com/v1/playlists/1jWZQzDfkksK5qbZx022Pc',
                headers: { Authorization: `Bearer ${token}` },
              });
              const playlistData = response.data;
              setPlaylistsCoracao(playlistData);
            //   console.log(playlistData);
            } catch (error) {
                console.error('Erro:', error);
              }
        };
        fetchData();
    }, [token]);
    const coracaoName = playlistsCoracao.name;
    const coracaoSpotifyUrl = playlistsCoracao.external_urls?.spotify;
    let coracaoImages = "";
    if (playlistsCoracao.images && Array.isArray(playlistsCoracao.images) && playlistsCoracao.images.length > 0) {
        coracaoImages = playlistsCoracao.images[0].url;
    } 

    useEffect(()=>{
        const info = async () => {
            try {
              const res = await axios({
                method: 'GET',
                url: 'https://api.spotify.com/v1/playlists/0wmwU7CZafUrETGMaoqTH2',
                headers: { Authorization: `Bearer ${token}` },
              });
              const playlistBrData = res.data;
              setPlaylistsBR(playlistBrData);
            //   console.log(playlistData);
            } catch (error) {
                console.error('Erro:', error);
              }
        };
        info();
    }, [token]);
    const BRName = playlistsBR.name;
    const BRSpotifyUrl = playlistsBR.external_urls?.spotify;
    let BRImages = "";
    if (playlistsBR.images && Array.isArray(playlistsBR.images) && playlistsBR.images.length > 0) {
        BRImages = playlistsBR.images[0].url;
    } 
    
    

    return(
        code ? 
        <ContainerHome>
        <Nav/>
            <DivCentro>
                <DivQuadro>
                    <Fonte2>Bem-vindo!!</Fonte2>
                    <Estrela1Img src={Estrela1} alt=''></Estrela1Img>
                    <Texto>Wild Tunes é uma <br/> plataforma de indicação <br/> de músicas, com o objetivo <br/> de beneficiar bandas<br/> e artistas independentes, <br/> facilitando as músicas <br/> de chegarem até você!</Texto>
                    <Estrela2Img src={Estrela2} alt=''></Estrela2Img>
                </DivQuadro>
                <SideBar>
                    <div><ChevronLeftIcon color='#5E5812' boxSize={10}/></div>
                    <h3>Não sabe por onde começar?</h3>
                    <p>Aqui estão algumas playlists feitas pensando em você!!</p>
                    <a href={playlistQueerArtSpotifyUrl} target="_blank">
                        <CapaPlaylist src={playlistQueerArtImages}/>
                        <NomePlaylist>{playlistQueerArtName}</NomePlaylist>
                    </a>
                    <a href={BRSpotifyUrl} target="_blank">
                        <CapaPlaylist src={BRImages}/>
                        <NomePlaylist>{BRName}</NomePlaylist>
                    </a>
                    <a href={coracaoSpotifyUrl} target="_blank">
                        <CapaPlaylist src={coracaoImages}/>
                        <NomePlaylist>{coracaoName}</NomePlaylist>
                    </a>
                </SideBar>
            </DivCentro>
        </ContainerHome>
        
        : <Entrada/>
        
    )
}

export default Home