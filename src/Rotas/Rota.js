import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../paginas/Principal/principal";
import Login from "../paginas/login/Login";
import Musicas from "../paginas/musicas/Musicas";
import Cadastro from "../paginas/cadastro/Cadastro";
import Playlists from "../paginas/playlists/Playlists";
import Adicionar from "../paginas/adicionar/Adicionar";
import QuemSomos from "../paginas/quemsomos/QuemSomos";
import Contato from "../paginas/contato/Contato";
import Favoritos from "../paginas/favoritos/Favoritos";


function Rota() {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route index element = {<Home/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='musicas' element={<Musicas/>}/>
                <Route path='cadastro' element={<Cadastro/>}/>
                <Route path='playlists' element={<Playlists/>}/>
                <Route path='adicionar' element={<Adicionar/>}/>
                <Route path='quemsomos' element={<QuemSomos/>}/>
                <Route path='contato' element={<Contato/>}/>
                <Route path='favoritos' element={<Favoritos/>}/>
                {/* <Route path='*' element={<Erro/>}/> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Rota;