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
        <>
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
                        <p className="data">Telefone: {product[0].phone}</p>
                        <p className="data">Email: {product[0].email}</p>
                    </InfoSeller>
                </ProductInfo>

            )}

        </>
    )
}

const ProductInfo = styled.div`
    width: 80%;
    height: 80%;
    border: 0.3px solid #000000;
    border-radius: 10px;
    margin: 320px auto 0;
    display: flex;
    padding: 3px;
`
const BoxPhotos = styled.div`
    width: 60%;
    display: flex;
    padding: 3px;
`
const MiniPhotos = styled.div`
    width: 10%;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 2px;
    img {
        width: 100%; 
        border-radius: 2px;  
        margin-bottom: 3px;
    }
`
const MainPhoto = styled.div`
    width: 50%;
    height: auto;
    img {
        width: 100%;
        height: auto;
        border: 10px;
    }
`
const BoxDetails = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
const Title = styled.div`
    h1 {
        font-size: 30px;
    }
    h2 {
        font-size: 20px;
    }
    p {
        font-size: 15px;
    }
`
const InfoSeller = styled.div`
    width: 50%;
    .name {
        font-size: 20px;
        font-weight: 700;
    }
    .data {
        font-size: 15px;
        font-weight: 400;
    }
`
