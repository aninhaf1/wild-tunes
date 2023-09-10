import logo from '../../assets/logo.png'
import flecha from '../../assets/flecha.png'
import { ContainerHeader, HeaderImage, Fonte2, BotaoVoltar, DivLogo, DivPerfil, ImgPerfil, Texto, Icon, Dropdown } from "./styled"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider
  } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function Header() {
    const user = {
        name: 'user123',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg'
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


    return(
        <>
        <ContainerHeader>
            <DivLogo>
                <HeaderImage src={logo} alt="Logo Wild Tunes"></HeaderImage>
                <Fonte2>Wild Tunes</Fonte2>
            </DivLogo>
            <DivLogo>
                <BotaoVoltar onClick={goBack}>Voltar a tela inicial</BotaoVoltar>
                <DivPerfil>
                    <ImgPerfil
                    src={user.imageUrl}
                    />
                    <Menu>
                    <MenuButton as={Texto}>
                        <Dropdown>
                            <Icon src={flecha}/> 
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