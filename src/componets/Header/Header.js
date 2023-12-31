import logo from '../../assets/logo.png'
import seta from '../../assets/flecha.png'
import { ContainerHeader, HeaderImage, Fonte2, BotaoVoltar, DivLogo, DivPerfil, ImgPerfil, Texto, Icon, Dropdown, Icon2 } from "./styled"
import {Menu, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


function Header() {
    const user = {
        name: localStorage.getItem('nome_user'),
        imageUrl: localStorage.getItem('ft_perfil')
    };
    
    const navegar = useNavigate()
    
    const goBack = () => {
        navegar('/home')
    }
    const goToFavoritos = () => {
        navegar('/favoritos')
    }
    const goToSuaConta = () => {
        navegar('/sua-conta')
    }
    const logOff = () => {
        navegar('/')
    }

    const [flecha, setFlecha] = useState(true);

    const girarFlecha = () => {
        setFlecha(!flecha);
    };
    

    return(
        <>
        <ContainerHeader>
            <DivLogo>
                <HeaderImage src={logo} alt="Logo Wild Tunes"></HeaderImage>
                <Fonte2>Wild Tunes</Fonte2>
            </DivLogo>
            <DivLogo>
                {/* <BotaoVoltar onClick={goBack}>Voltar a tela inicial</BotaoVoltar> */}
                <DivPerfil>
                    <ImgPerfil
                    src={user.imageUrl}
                    />
                    <Menu>
                    <MenuButton as={Texto} onClick={girarFlecha}>
                        <Dropdown>
                            {flecha ? (
                                <Icon src={seta}/>
                            ) : (
                                <Icon2 src={seta}/>
                            )}
                            {user.name}
                        </Dropdown>
                    </MenuButton>
                    <MenuList color='#F5F2D0' bg='#5C582C' borderColor='#F5F2D0'>
                        <MenuGroup title='Perfil' bg='#5C582C'>
                        <MenuItem onClick={goToFavoritos} bg='#5C582C'>Favoritos</MenuItem>
                        <MenuItem onClick={goToSuaConta} bg='#5C582C'>Sua Conta </MenuItem>
                        </MenuGroup>
                        <MenuDivider />
                        <MenuGroup bg='#5C582C'>
                        <MenuItem bg='#5C582C' onClick={logOff}>Sair</MenuItem>
                        </MenuGroup>
                    </MenuList>
                    </Menu>
                </DivPerfil>
            </DivLogo>
        </ContainerHeader>
</>
    )
};

export default Header