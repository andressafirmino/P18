import { useContext, useEffect, useState } from "react";
import Categories from "../components/Categories";
import Menu from "../components/Menu";
import styled from "styled-components";
import axios from "axios";
import { AuthContext } from "../context/auth";

export default function HomePage() {

    const {token} = useContext(AuthContext);
    const [all, setAll] = useState([]);

    useEffect(() => {
        const url = `${import.meta.env.VITE_API_URL}/`;
        axios.get(url,  {
            headers: { authorization: `Bearer ${token}` }
        })
            .then((res) => {
              console.log(res.data.products);
              setAll(res.data.products);
            })
            .catch((err) => {
                console.log(err.message)
            })

    }, []);


    return (
        <>
            <Menu />
            <Categories />
            <HomeContainer>
                {!all || all.length === 0 && (
                    <p>Carregando...</p>
                )}

                {all && (
                    <>
                        {all.map(l =>
                            <CsProduct key={l.idProduct}>
                            <img src={l.photos[0].photo}  onClick={()=>displayProduct(l.category, l.idProduct)}/>
                            <h2  onClick={()=>displayProduct(l.category, l.idProduct)}>{l.nameProduct}</h2>
                            <div className="valuesProduct"  onClick={()=>displayProduct(l.category, l.idProduct)}> {l.category}</div>
                            
                            
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
  main{
    width: 100hv;
    height: auto;
    display: flex;
    
  }
`;
const CsProduct = styled.div`
    width: 200px;
    height: 300px;
    margin: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border: 3px solid #73384E;
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