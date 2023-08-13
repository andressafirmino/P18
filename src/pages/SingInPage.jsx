import { useContext, useState } from "react";
import Menu from "../components/Menu";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { AuthContext } from "../context/auth";

export default function SignIn() {

    const {setName, setToken, setLogin} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();
    
    function loginUser (e) {
        e.preventDefault();
    
        const url = `${import.meta.env.VITE_API_URL}/signin`;
        const signin = { email, password };
        const promise = axios.post(url, signin);
        setDisabled(true);
        promise.then(response => {
          setName(response.data.name);
          setToken(response.data.token);
          setLogin(true);
          localStorage.setItem("user", JSON.stringify({token: response.data.token, name: response.data.name}));
          navigate('/');
        })
        promise.catch(e => {
          alert(e.response.data.message);
          setDisabled(false);
        })
      }

    return (
        <SignInContainer>
            <Menu />
            <form onSubmit={loginUser}>
                <input placeholder="E-mail" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={disabled} />
                <input placeholder="Senha" type="password" autoComplete="new-password" required value={password} onChange={(e) => setPassword(e.target.value)} disabled={disabled} />
                <button type='submit' disabled={disabled} >
                    {disabled ? (
                        <ThreeDots width={32} height={21} border-radius={4.5} background-color="#5D9040" color="#FFFFFF" font-size={9} />
                    ) : (
                        <>Entrar</>
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
    margin-top: 270px;
`
const LinkRegister = styled(Link)`
    color: #009CBD;
    margin: 30px auto;
    text-decoration: none;
    p {
        font-size: 14px;
        font-weight: 400;
      }
` 