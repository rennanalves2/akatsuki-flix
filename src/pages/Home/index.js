import { useState,useEffect } from "react";
import api from "../../services/api";
import Header from "../components/Header";
import "./home.css";

function Home() {
    const [characters, SetCharacters] = useState([]);

    useEffect(() => {
        async function loadCharacters() {
            const response = await api.get("akatsuki", {
                params: {
                    page: 1
                }
            });
            SetCharacters(response.data.akatsuki);
        }
        loadCharacters();
    }, []);

    return (
        <>
            <Header />
            <div className="container">
                <ul>
                    {characters.map((character) => {
                        return (
                            <li key={character.id}>
                                <div className="container-name">
                                    <strong>{character.name}</strong>
                                </div>                               
                                <img src={character.images[0]}/>
                                <div className="container-buttons">
                                    <button>Salvar</button>
                                    <button>Ver detalhes</button>
                                </div>          
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>   
    )
}

export default Home;