import { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Menu from "../components/Menu";
import styled from "styled-components";
import axios from "axios";

export default function HomePage() {

    const [all, setAll] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/`)
            .then((res) => {
                setAll(res.data);
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
                            <BoxLink key={l.id}>
                                <Link>
                                    <p className="size" onClick={() => openLink(l.shortUrl, l.url)}>{l.url}</p>
                                    <p onClick={() => openLink(l.shortUrl, l.url)}>{l.shortUrl}</p>
                                    <p className="size">Quantidade de visitantes: {l.visitCount}</p>
                                </Link>
                                <TrashStyled>
                                    <img src={Trash} onClick={() => deleteUrl(l.id)} />
                                </TrashStyled>
                            </BoxLink>
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
  flex-direction: column;

  main{
    width: 100hv;
    height: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
