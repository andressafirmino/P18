import { useState } from "react";
import Menu from "../components/Menu";
import styled from "styled-components";
import axios from "axios";

export default function AddPage() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState('');
    const [photo2, setPhoto2] = useState('');
    const [photo3, setPhoto3] = useState('');
    const [category, setCategory] = useState('');
    const [disabled, setDisabled] = useState(false);

    function addProduct() {
      /*   const url = `${import.meta.env.VITE_API_URL}/adicionar`;
        body = {name, description, photos: {
            photo, photo2, photo3
        }, category};
        axios.post(url, body, {
            headers: { authorization: `Bearer ${token}` }
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(e => {
            alert(e.message);
        }) */
    }

    return (
        <AddContainer>
            <Menu />
            <form onSubmit={addProduct}>
                <input placeholder="Nome" type="text" required value={name} onChange={(e) => setName(e.target.value)} disabled={disabled} />
                <input placeholder="Descrição" type="text" required value={description} onChange={(e) => setDescription(e.target.value)} disabled={disabled} />
                <input placeholder="Foto" type="text" required value={photo} onChange={(e) => setPhoto(e.target.value)} disabled={disabled} />
                <input placeholder="Foto" type="text" value={photo2} onChange={(e) => setPhoto2(e.target.value)} disabled={disabled} />
                <input placeholder="Foto" type="text"  value={photo3} onChange={(e) => setPhoto3(e.target.value)} disabled={disabled} />
                
                <DivStyled>
                    <button type="button" onClick={() => setCategory("Pokemon")} className={category === "Pokemon" ? 'select' : ''}>Pokemon</button>
                    <button type="button" onClick={() => setCategory("Yu-gi-oh")} className={category === "Yu-gi-oh" ? 'select' : ''}>Yu-gi-oh</button>
                    <button type="button" onClick={() => setCategory("Digimon")} className={category === "Digimon" ? 'select' : ''}>Digimon</button>
                </DivStyled>
                <button type='submit' disabled={disabled} >
                    {disabled ? (
                        <ThreeDots width={32} height={21} border-radius={4.5} background-color="#00AB84" color="#FFFFFF" font-size={9} />
                    ) : (
                        <>Adicionar Carta</>
                    )}
                </button>
            </form>
        </AddContainer>
    )
}

const AddContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 270px;

`
const DivStyled = styled.div`
        width: 100%;
        margin: 0 auto 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        button {
            width: 30%;
            height: 40px;
            margin-bottom: 20px;
            background-color: #FF671F;
            color: #FFFFFF;
            border: none;
            border-radius: 10px;
        }
        .select {
            background-color: #00AB84;
        }
`