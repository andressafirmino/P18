import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext, useState } from "react";
import Logo from "../assets/Logo.png";

export default function Menu() {

    const [login, setLogin] = useState(true);
    const navigate = useNavigate();
    function logout() {
        localStorage.clear();
        setToken('');
        setLogin(false);
        navigate("/")
    }

    return (
        <MenuContainer>
            <MenuBox>
                {login && (
                    <Welcome>
                        <Infos>
                        <img className="logo" src={Logo} />
                        <p className="green">Seja bem-vindo: { }</p>
                        </Infos>
                        <MenuLinks>
                            <Link className="gray" to="/users/me">Home ●</Link>
                            <Link className="gray" to="/ranking">Meus Produtos ●</Link>
                            <Link className="gray" to="/" onClick={logout}>Sair</Link>
                        </MenuLinks>
                    </Welcome>

                )}
                {!login && (
                    <>
                        <img className="logo" src={Logo} />
                        <MenuLinks>
                            <Link className="gray" to="/signin">Entrar</Link>
                            <Link className="gray" to="/signup">Cadastrar-se</Link>
                        </MenuLinks>
                    </>
                )}

            </MenuBox>
            <Caixa src={Logo} />
        </MenuContainer>
    )
}
const MenuContainer = styled.div`
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
   
`
const MenuBox = styled.div`
    width:100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    border: 1px solid #FF671F;
`
const Welcome = styled.div`
    width: 100%;
    height: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const MenuLinks = styled.div`
    height: 18px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    link {
        font-size: 14px;
        font-weight: 400;
    }    
    .green {
        color: #5D9040;
        text-decoration: none;
    }
    .gray {
        color: #9C9C9C;
        margin-left: 10px;
        text-decoration: none;
    }
`
const Infos = styled.div`
    width: 40%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .logo {
        width: 40px;
        height: auto;
        margin-right: 10px;
    }
    p {
        font-size: 14px;
        font-weight: 400;
        color: #5D9040;
        text-align: center;
    }
`
const Caixa = styled.img`
    display: flex;
    margin: 0 auto 20px;
    width: calc(100vh - 700px);   
`