import { useContext, useEffect, useState } from "react";
import Menu from "../components/Menu";
import styled from "styled-components";
import { AuthContext } from "../context/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function MePage() {

    const { token } = useContext(AuthContext);
    const [myProducts, setMyProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const url = `${import.meta.env.VITE_API_URL}/me`
        axios.get(url, {
            headers: { authorization: `Bearer ${token}` }
        })
            .then((res) => {
                setMyProducts(res.data);
            })
            .catch((err) => {
                console.log("nao foi")
                console.log(err)
            })

    }, [])

    function add() {
        navigate("/adicionar");
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
                {myProducts.length === 0 && (
                    <p className="empty">Você ainda não adicionou nenhum item!</p>
                )}
                {myProducts && (
                    <>
                        {myProducts.map(item => (<CartProducts key={item.id}
                            name={item.name} images={item.images} id={item.id}
                            value={item.value} description={item.description}
                        />))}
                    </>
                )}


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