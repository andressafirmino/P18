import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Categories() {
    return (
        <CategoriesContainer>
            <LinksCategories to="/pokemon">Pokemon</LinksCategories>
            <LinksCategories to="/yugioh">Yu-gi-oh</LinksCategories>
            <LinksCategories to="/digimon">Digimon</LinksCategories>
        </CategoriesContainer>
    )
}

const CategoriesContainer = styled.div`    
        padding: 0 15%;
        height: 50px;
        width: 100%;
        font-size: 10px;
        background-color: #00ab84;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
        margin-top: 270px;
 
`

const LinksCategories = styled(Link)`
    background-color: #00AB84;
            color: #FFFFFF;
            border: 2px solid white;
            border-radius: 5px;
            cursor: pointer;
            text-decoration: none;
`