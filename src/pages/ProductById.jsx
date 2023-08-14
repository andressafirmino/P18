import { useContext, useEffect, useState } from "react";
import Categories from "../components/Categories";
import Menu from "../components/Menu";
import styled from "styled-components";
import axios from "axios";
import { AuthContext } from "../context/auth";
import { useNavigate } from "react-router-dom";

export default function ProductById() {

    const { id } = useContext(AuthContext);
    const [product, setProduct] = useState([]);
    const [mainImage, setMainImage] = useState('');
    
    useEffect(() => {
        const url = `${import.meta.env.VITE_API_URL}/produto/${id}`;
        axios.get(url)
            .then((res) => {
                console.log(res.data.product);
                setProduct(res.data.product);
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, []);

    return (
        <MainContainer>
            <Menu />
            <Categories />
            {!product || product.length === 0 && (
                <p>Carregando...</p>
            )}
            {product && product.length > 0 && (
                <ProductInfo>
                    <BoxPhotos>
                        <MiniPhotos>
                            {product[0].photos.map(photo => {
                                const photoUrl = photo.photo;
                                return (
                                    <img src={photoUrl || 'https://cdn.awsli.com.br/production/static/img/produto-sem-imagem.gif'}
                                        onClick={() => setMainImage(photoUrl || 'https://cdn.awsli.com.br/production/static/img/produto-sem-imagem.gif')} />
                                )
                            })}
                        </MiniPhotos>
                        <MainPhoto>
                            <img src={mainImage} />
                        </MainPhoto>
                    </BoxPhotos>
                    <BoxDetails>
                            <Title>
                                <h1>{product[0].nameProduct}</h1>
                                <h2>{product[0].category}</h2>
                                <p>{product[0].description}</p>
                            </Title>
                    </BoxDetails>
                    <InfoSeller>
                        <p className="name">Nome do vendedor: {product[0].nameSeller}</p>
                        <p className="data">● Telefone: {product[0].phone}</p>
                        <p className="data">● Email: {product[0].email}</p>
                    </InfoSeller>
                </ProductInfo>
            )}
        </MainContainer>
    )
}

const MainContainer = styled.div`
    
`
const ProductInfo = styled.div`
    width: 80%;
    height: 150px;
    border: 0.3px solid #000000;
    border-radius: 10px;
    margin: 320px auto 0;
    display: flex;
    padding: 3px;
    background-color: #FFFFFF;
`
const BoxPhotos = styled.div`
    width: 60%;
    display: flex;
    padding: 3px;
    background-color: #FFFFFF;
`
const MiniPhotos = styled.div`
    width: 13%;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 2px;
    background-color: #FFFFFF;
    img {
        width: 100%; 
        border-radius: 2px;
        border: 1px solid #474747;  
        margin-bottom: 3px;
    }
`
const MainPhoto = styled.div`
    width: 50%;
    height: auto;
    background-color: #FFFFFF;
    img {
        width: 100%;
        height: auto;
        border-radius: 10px;
        border: 1px solid #474747;  
        margin-left: 10px;
    }
`
const BoxDetails = styled.div`
    width: 100%;
    height: 130px;
    background-color: #FFFFFF;
    padding: 3px;
`
const Title = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: space-around;
    background-color: #FFFFFF;
    padding: 3px;
    h1 {
        font-size: 30px;
        margin-bottom: 7px;
        color: #474747;
        background-color: #FFFFFF;
    }
    h2 {
        font-size: 20px;
        margin-bottom: 3px;
        color: #474747;
        background-color: #FFFFFF;
    }
    p {
        font-size: 15px;
        color: #474747;
        background-color: #FFFFFF;
    }
`
const InfoSeller = styled.div`
    width: 70%;
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: space-around;
    color: #474747;
    background-color: #FFFFFF;
    padding: 3px;
    .name {
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 7px;
        background-color: #FFFFFF;
    }
    .data {
        font-size: 15px;
        font-weight: 400;
        margin-bottom: 5px;
        background-color: #FFFFFF;
    }
`
