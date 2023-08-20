import { useNavigate } from "react-router-dom";
import Header from "../../componets/Header/Header";
import CaixaTitulo from "../../componets/caixaTitulo/CaixaTitulo";
import Input from "../../componets/input/Input";
import { BotaoEntrar, CaixaInput, ContainerLogin, FazerCadastro, Redicionamentos } from "./styled";


function Login() {
    const navegar = useNavigate()
    const goCadastro = () => {
        navegar('/cadastro')
    }

    return(
        <>
        <Header/>
        <ContainerLogin>
            <CaixaTitulo titulo='Login'/>
            <CaixaInput>
                <Input titulo='Usuário:' type='text' placeholder='Digite seu usuário'/>
                <Input titulo='Senha:' type='password' placeholder='Digite sua senha'/>
                <BotaoEntrar>Entrar</BotaoEntrar>
                <Redicionamentos>
                    <FazerCadastro>Esqueceu sua senha? Crie uma nova!</FazerCadastro>
                    <FazerCadastro onClick={goCadastro}>Não tem uma conta? Faça seu cadastro!</FazerCadastro>
                </Redicionamentos>
            </CaixaInput>
        </ContainerLogin>
        </>
    )
}

export default Login;