import styled from "styled-components";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    function signUp(e) {
        e.preventDefault();
    
        if (password !== confirmPassword) {
          return alert("As senhas são diferentes!");
        }
    
        const url = `${import.meta.env.VITE_API_URL}/signup`;
        const newSignUp = { name, email, password, confirmPassword };
        const promise = axios.post(url, newSignUp);
        setDisabled(true);
        promise.then(() => navigate('/signin'));
        promise.catch(e => {
          alert(e.response.data.message);
          setDisabled(false);
        })    
      }

    return (
        <SignUpContainer>
            {/* <Menu /> */}
            <form onSubmit={signUp}>
                <input placeholder="Nome" type="text" required value={name} onChange={(e) => setName(e.target.value)} disabled={disabled} />
                <input placeholder="E-mail" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={disabled} />
                <input placeholder="Senha" type="password" autoComplete="new-password" required value={password} onChange={(e) => setPassword(e.target.value)} disabled={disabled} />
                <input placeholder="Confirme a senha" type="password" autoComplete="new-password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} disabled={disabled} />
                <input placeholder="CPF" type="text" required value={cpf} onChange={(e) => setCpf(e.target.value)} disabled={disabled} />
                <input placeholder="Telefone" type="text" required value={phone} onChange={(e) => setPhone(e.target.value)} disabled={disabled} />
                <button className="top" type='submit' disabled={disabled} >
                    {disabled ? (
                        <ThreeDots width={32} height={21} border-radius={4.5} background-color="#5D9040" color="#FFFFFF" font-size={9} />
                    ) : (
                        <p>Criar Conta</p>
                    )}
                </button>
            </form>
            <LinkRegister><p>Já tem conta? Faça login!</p></LinkRegister>
        </SignUpContainer>
    )
}

const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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