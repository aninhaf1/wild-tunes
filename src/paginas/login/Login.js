import { useNavigate } from "react-router-dom";
import CaixaTitulo from "../../componets/caixaTitulo/CaixaTitulo";
import Input from "../../componets/input/Input";
import { BotaoEntrar, CaixaInput, ContainerLogin, FazerCadastro, Redicionamentos } from "./styled";
import HeaderEntrar from "../../componets/Header/HeaderEntrar";
import { useState } from "react";


function Login() {
    const navegar = useNavigate()
    const goCadastro = () => {
        navegar('/cadastro')
    }
    const goToHome = () => {
        navegar('/home')
    }

    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')

    const handleInputUsuario = (e) =>{
            setUsuario(e.target.value)
    }
    const handleInputSenha = (e) =>{
            setPassword(e.target.value)
    }

    console.log(usuario)
    console.log(password)

    return(
        <> 
        <HeaderEntrar/>
        <ContainerLogin>
            <CaixaTitulo titulo='Login'/>
            <CaixaInput>
                <Input 
                titulo='Usuário:' 
                type='text' 
                placeholder='Digite seu usuário' 
                value={usuario} 
                onChange={handleInputUsuario}/>
                <Input 
                titulo='Senha:' 
                type='password' 
                placeholder='Digite sua senha' 
                value={password} 
                onChange={handleInputSenha}/>
                <BotaoEntrar type="submit" onClick={goToHome}>Entrar</BotaoEntrar>
                <Redicionamentos>
                    <FazerCadastro onClick={goCadastro}>Não tem uma conta? Faça seu cadastro!</FazerCadastro>
                </Redicionamentos>
            </CaixaInput>
        </ContainerLogin>
        </>
    )
}

export default Login;