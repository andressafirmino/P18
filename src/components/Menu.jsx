import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext, useState } from "react";
import Logo from "../assets/Logo.png";
import { AuthContext } from "../context/auth";

export default function Menu() {

    const {name, login} = useContext(AuthContext);
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
                        <p className="blue">Seja bem-vindo: {name}</p>
                        </Infos>
                        <MenuLinks>
                            <Link className="pink" to="/">Home ●</Link>
                            <Link className="pink" to="/me">Meus Produtos ●</Link>
                            <Link className="pink" to="/" onClick={logout}>Sair</Link>
                        </MenuLinks>
                    </Welcome>

                )}
                {!login && (
                    <>
                        <img className="logo" src={Logo} />
                        <MenuLinks>
                            <Link className="pink" to="/signin">Entrar ●</Link>
                            <Link className="pink" to="/signup">Cadastrar-se</Link>
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
    .logo {
        width: 40px;
        height: auto;
        margin-right: 10px;
    }
`
const MenuBox = styled.div`
    width:100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
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
    .blue {
        color: #009CBD;
        text-decoration: none;
    }
    .pink {
        color: #FF3EB5;
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
        color: #009CBD;
        text-align: center;
    }
`
const Caixa = styled.img`
    display: flex;
    margin: 0 auto;
    width: 200px;   
`