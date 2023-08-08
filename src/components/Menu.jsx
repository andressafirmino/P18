import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext, useState } from "react";

export default function Menu() {

    const [login, setLogin] = useState(false);
    const navigate = useNavigate();
    function logout() {
        localStorage.clear();
        setToken('');
        setLogin(false);
        navigate("/")
    }

    return (
        <MenuContainer>
            {login && (
                <Welcome>
                    <img />
                    <p className="green">Seja bem-vindo: { }</p>
                    <MenuLinks>
                        <Link className="gray" to="/users/me">Home</Link>
                        <Link className="gray" to="/ranking">Ranking</Link>
                        <Link className="gray" to="/" onClick={logout}>Sair</Link>
                    </MenuLinks>
                </Welcome>

            )}
            {!login && (
                <>
                    <img />
                    <MenuLinks>
                        <Link className="gray" to="/signin">Entrar</Link>
                        <Link className="gray" to="/signup">Cadastrar-se</Link>
                    </MenuLinks>
                </>
            )}
            {/* <LogoContainer>
                <p>Shortly</p>
                <img src={Logo} />
            </LogoContainer> */}
        </MenuContainer>
    )
}
const MenuContainer = styled.div`
    width:100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto 50px;
    position: fixed;
    left: 0;
    top: 0;
    background-color: aquamarine;
    padding: 0 15px;
    img {
        width: 40px;
        height: 50px;
        background-color: #5D9040;
    }
`
const Welcome = styled.div`
    height: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
        font-size: 14px;
        font-weight: 400;
        margin-top: 40px;
        color: #5D9040;
    }
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
const LogoContainer = styled.div`
    width: 314px;
    height: 102px;
    margin: 50px auto 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p {        
        font-size: 64px;
        font-weight: 200;
        color: #000;
    }
    img {
        width: 102px;
        height: 102px;
    }
`
