import { useContext, useEffect, useState } from "react";
import Categories from "../components/Categories";
import Menu from "../components/Menu";
import styled from "styled-components";
import axios from "axios";
import { AuthContext } from "../context/auth";
import { useNavigate } from "react-router-dom";

export default function CategoryPage() {

    const { category, setId } = useContext(AuthContext);
    const [all, setAll] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const url = `${import.meta.env.VITE_API_URL}/${category}`;
        axios.get(url)
            .then((res) => {
                setAll(res.data.products);
            })
            .catch((err) => {
                console.log(err.message)
            })

    }, [category]);

    function getById(id) {
        setId(id);
        navigate(`/produto/${id}`);
    }

    return (
        <>
            <Menu />
            <Categories />
            <HomeContainer>
                {!all || all.length === 0 && (
                    <p>No momento não existem produtos dessa categoria...</p>
                )}

                {all && (
                    <>
                        {all.filter(prod => prod.status).map(prod =>
                            <CsProduct key={prod.idProduct} conClick={() => getById(prod.idProduct)}>
                                <img src={prod.photos[0].photo} />
                                <h2 >{prod.nameProduct}</h2>
                                <div className="valuesProduct" > {prod.category}</div>
                                <button className="addCard">Fale com o vendedor</button>
                            </CsProduct>
                        )}
                    </>
                )}

            </HomeContainer>
        </>
    )
}

const HomeContainer = styled.div`
  height: auto;
  width: 100hv;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 320px;
  background-color: #f8ffc9;
  main{
    width: 100hv;
    height: auto;
    display: flex;
    
  }
`;
const CsProduct = styled.div`
    width: 200px;
    height: 350px;
    margin: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border: 0.3px solid #FF3EB5;
    border-radius: 5px;

    img{
        width: 100%;
        height: 85%;
        cursor: pointer;
        border-radius: 12px;
        transition: transform 0.3s;
        &:hover {
            transform: scale(1.05);
        }
    }
    h2{
        overflow-y: hidden;
        max-height: 100px;
        cursor: pointer;
    }
    .valuesProduct{
        margin-top: 3px; 
        cursor: pointer;

    }
    .addCard{
        width: 100%;
        height: 35px;
        margin-top: 3px;
    }
    button{
        cursor: pointer;
        background-color: #FF3EB5;
        color: white;
        border-radius: 5px;
        border: none;
        transition: transform 0.3s;
        &:hover {
            transform: scale(1.1);
        }
    }
`;