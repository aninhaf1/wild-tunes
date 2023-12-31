import { useNavigate } from "react-router-dom";
import CaixaTitulo from "../../componets/caixaTitulo/CaixaTitulo";
import Input from "../../componets/input/Input";
import { BotaoEntrar, CaixaInput, ContainerCadastro, FazerLogin } from "./styled";
import HeaderEntrar from "../../componets/Header/HeaderEntrar";


function Cadastro() {
    const navegar = useNavigate()
    const goToLogin = () => {
        navegar('/login')
    }

    return(
        <>
        <HeaderEntrar/>
        <ContainerCadastro>
            <CaixaTitulo titulo='Cadastro'/>
            <CaixaInput>
                <Input titulo='Email:' type='email' placeholder='seuemail@gmail.com'/>
                <Input titulo='Usuário:' type='text' placeholder='usuario123'/>
                <Input titulo='Senha:' type='password' placeholder='Digite uma senha'/>
                <Input titulo='Confirmar senha:' type='password' placeholder='Confirme sua senha'/>
                <BotaoEntrar>Entrar</BotaoEntrar>
                <FazerLogin onClick={goToLogin}>Já tem uma conta? Faça Login!</FazerLogin>
            </CaixaInput>
        </ContainerCadastro>
        </>
    )
}

export default Cadastro;