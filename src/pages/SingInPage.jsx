import { useContext, useState } from "react";
import Menu from "../components/Menu";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();
    
    function login(e) {
        e.preventDefault();
    
        const url = `${import.meta.env.VITE_API_URL}/signin`;
        const login = { email, password };
        const promise = axios.post(url, login);
        setDisabled(true);
        promise.then(response => {
          /* setName(response.data.name);
          setToken(response.data.token);
          setLogin(true); */
          localStorage.setItem("user", JSON.stringify({token: response.data.token, name: response.data.name}));
          navigate('/users/me');
        })
        promise.catch(e => {
          alert(e.response.data.message);
          setDisabled(false);
        })
      }

    return (
        <SignInContainer>
            <Menu />
            <form onSubmit={login}>
                <input placeholder="E-mail" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={disabled} />
                <input placeholder="Senha" type="password" autoComplete="new-password" required value={password} onChange={(e) => setPassword(e.target.value)} disabled={disabled} />
                <button className="top" type='submit' disabled={disabled} >
                    {disabled ? (
                        <ThreeDots width={32} height={21} border-radius={4.5} background-color="#5D9040" color="#FFFFFF" font-size={9} />
                    ) : (
                        <p>Entrar</p>
                    )}
                </button>
            </form>
            <LinkRegister to="/signup" ><p>Não tem uma conta? Cadastre-se!</p></LinkRegister>
        </SignInContainer>
    )
}

const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 120px;
`
const LinkRegister = styled(Link)`
    color: #52B6FF;
    margin: 30px auto;
    text-decoration: none;
    p {
        font-size: 14px;
        font-weight: 400;
      }
` 