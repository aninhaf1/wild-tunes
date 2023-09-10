import { Botoes, BotoesLogin, ContainerEntrada, Linha, Logo, Sessao, SessaoMeio } from "./styled";
import logo from '../../assets/logo-verde.png'  
import { useNavigate } from "react-router-dom";

function Entrada() {
    const navegar = useNavigate()
    const goToLogin = () => {
        navegar('/login')
    }
    const goCadastro = () => {
        navegar('/cadastro')
    }

    return(
        <>
        <ContainerEntrada>
            <Sessao>
                <Logo src={logo}/>
                <SessaoMeio>
                    <h1>Wild Tunes</h1>
                    <Linha/>
                </SessaoMeio>
                <Botoes>
                    <BotoesLogin onClick={goCadastro}>Cadastro</BotoesLogin>
                    <BotoesLogin onClick={goToLogin}>Login</BotoesLogin>
                </Botoes>
            </Sessao>       
        </ContainerEntrada>
        </>
    )
}

export default Entrada;