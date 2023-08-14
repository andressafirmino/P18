import { useContext, useEffect, useState } from "react";
import Menu from "../components/Menu";
import styled from "styled-components";
import { AuthContext } from "../context/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function MePage() {

    const { token, setId } = useContext(AuthContext);
    const [myProducts, setMyProducts] = useState([]);
    const [reload, setReload] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const url = `${import.meta.env.VITE_API_URL}/me`
        axios.get(url, {
            headers: { authorization: `Bearer ${token}` }
        })
            .then((res) => {
                setMyProducts(res.data);
                console.log(res.data)
                setReload(false);
            })
            .catch((err) => {
                console.log("nao foi")
                console.log(err)
            })

    }, [reload])

    function add() {
        navigate("/adicionar");
    }
    function getById(id) {
        setId(id);
        navigate(`/produto/${id}`);
    }
    function hide(id) {
        const url = `${import.meta.env.VITE_API_URL}/me`;
        const body = {id};
        axios.put(url, body, {
            headers: { authorization: `Bearer ${token}` }
        })
        .then(() => {
            setReload(true);
        })
        .catch(e => {
            console.log("nao foi");
        })
    }
    function delId(id) {
        const url = `${import.meta.env.VITE_API_URL}/me`;
        const body = {id};
        axios.delete(url, body, {
            headers: { authorization: `Bearer ${token}` }
        })
        .then(() => {
            setReload(true);
        })
        .catch(e => {
            console.log("nao foi");
        })
    }

    return (
        <>
            <Menu />
            <MeContainer>
                <Add>
                    <p>Adicionar item</p>
                    <button className="add" onClick={add}>+</button>
                </Add>
                {!myProducts && (
                    <p className="empty">Carregando...</p>
                )}
                <Line></Line>               
                <Line></Line>
                {myProducts.length === 0 && (
                    <>
                        <p className="empty">Você ainda não adicionou nenhum item!</p>
                    </>
                )}
                {myProducts && (
                    <>
                        {myProducts.map(prod =>
                            <Product key={prod.id}>
                                <InfoProduct>
                        <img src={prod.photos} onClick={()=> getById(prod.id)}/>
                        <p className="title" onClick={()=> getById(prod.id)}>{prod.name}</p>
                    </InfoProduct>
                    <Remove>
                        <Hide onClick={() => hide(prod.id)}>Ocultar produto da lista de venda</Hide>
                        <ion-icon name="trash-outline" onClick={() => delId(prod.id)}></ion-icon>
                    </Remove>
                            </Product>
                        )}
                    </>
                )}
                <Line></Line>               
                <Line></Line>
            </MeContainer>
        </>
    )
}

const MeContainer = styled.div`
    width: 100%;
    margin-top: 270px;
    display: flex;
    flex-direction: column;

    .empty {
        color: #6D6E71;
        font-size: 40px;
        margin: 0 auto;
    }
`
const Add = styled.div`
    width: 80%;
    margin: 0 auto 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    p {
        font-size: 25px;
        color: #009CBD;
    }
    .add {
        width: 25px;
        height: 25px;
        background-color: #009CBD;
        margin-left: 5px;
    }
`
const Product = styled.div`
    width: 80%;
    height: 80px;
    margin: 0 auto;   
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    ion-icon {
        font-size: 40px;
        margin-left: 10px;
    }
`
const InfoProduct = styled.div`
    width: 60%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
        width: 60px;
        height: 60px;
        border: 1px solid #00AB84;
        border-radius: 10px;
        margin-right: 10px;
    }
    .title {
        font-size: 30px;
        font-weight: 700;
        color: #00AB84;
    }
    p {
        font-size: 20px;
        color: #009CBD;
    }
`
const Remove = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const Hide = styled.button`
    height: 50px;
    background-color: #FF671F;
`
const Line = styled.div`
    width: 60%;
    border: 1px solid #D3D3D3;
    margin: 20px auto; 
`