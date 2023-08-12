import styled from "styled-components";

export default function Categories() {
    return (
        <CategoriesContainer>
                <p>Pokemon</p>
                <p>Yu-gi-oh</p>
                <p>Digimon</p>
            </CategoriesContainer>
    )
}

const CategoriesContainer = styled.div`    
        padding: 0 15%;
        height: 50px;
        width: 100%;
        font-size: 10px;
        background-color: #73384E;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
        margin-top: 310px;

        p{
            border: 2px solid white;
            cursor: pointer;
        }
    
`