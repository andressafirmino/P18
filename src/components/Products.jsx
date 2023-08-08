import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { styled } from "styled-components";

export default function Product( props ) {
    
    const navigate = useNavigate();
    const {name , images, value, sector, id} = props.prod;
    const [isSelect, setIsSelect] = useState(false);
    const displayProduct = (sector, id)=>{
        navigate(`/${sector}/${id}`);
    }

    function addProduct() {
        let newArray = [...cartProducts, {
            name, images, value, id
        }];

        const serialNewArray = JSON.stringify(newArray);
        localStorage.setItem("localCart", serialNewArray);

        
        setCartProducts(newArray);
        setIsSelect(true);  
        setTotal((prevTotal) => prevTotal + parseFloat(value));     
    }
    function rmProduct(id) {
        const newArray = [...cartProducts];
        let position = newArray.findIndex( item => item.id === id);
        let remove = newArray.splice(position, 1);
        setCartProducts(newArray);
        setIsSelect(false);
        setTotal((prevTotal) => prevTotal - parseFloat(value));
    }

    return (
        <CsProduct>
            <img src={images}  onClick={()=>displayProduct(sector, id)}/>
            <h2  onClick={()=>displayProduct(sector, id)}>{name}</h2>
            <div className="valuesProduct"  onClick={()=>displayProduct(sector, id)}> R$ {value.toFixed(2)}</div>
            
            {isSelect ? (
                <button className="addCard select" onClick={() => rmProduct(id)}>Adicionado ao carrinho!</button>
            ) : (
                <button className="addCard" onClick={addProduct}>Adquira Agora!</button>
            )}
            
        </CsProduct>
    );
}

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
    .select {
        background-color: green;
    }
    button{
        cursor: pointer;
        background-color: #73384E;
        color: white;
        border-radius: 5px;
        border: none;
        transition: transform 0.3s;
        &:hover {
            transform: scale(1.1);
        }
    }
`;