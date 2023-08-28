import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../paginas/Principal/principal";
import Login from "../paginas/login/Login";
import Musicas from "../paginas/musicas/Musicas";
import Cadastro from "../paginas/cadastro/Cadastro";
import Playlists from "../paginas/albuns/Albuns";
import Adicionar from "../paginas/adicionar/Adicionar";
import QuemSomos from "../paginas/quemsomos/QuemSomos";
import Contato from "../paginas/contato/Contato";
import Favoritos from "../paginas/favoritos/Favoritos";
import NomeMusica from "../paginas/nomeMusica/NomeMusica";
import NomeAlbum from "../paginas/nomeAlbum/NomeAlbum";
import SuaConta from "../paginas/suaConta/SuaConta";


function Rota() {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route index element = {<Home/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='musicas' element={<Musicas/>}/>
                <Route path='cadastro' element={<Cadastro/>}/>
                <Route path='albuns' element={<Playlists/>}/>
                <Route path='adicionar' element={<Adicionar/>}/>
                <Route path='quemsomos' element={<QuemSomos/>}/>
                <Route path='contato' element={<Contato/>}/>
                <Route path='favoritos' element={<Favoritos/>}/>
                <Route path='nomeMusica' element={<NomeMusica/>}/>
                <Route path='nome-album' element={<NomeAlbum/>}/>
                <Route path='sua-conta' element={<SuaConta/>}/>
                {/* <Route path='*' element={<Erro/>}/> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Rota;