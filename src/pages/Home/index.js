import { useState,useEffect } from "react";
import api from "../../services/api";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
    const [characters, SetCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadCharacters() {
            const response = await api.get("akatsuki", {
                params: {
                    page: 1
                }
            });
            SetCharacters(response.data.akatsuki);
            setLoading(false);
        }
        loadCharacters();
    }, []);

    if(loading) {
        return (
            <div className="container-loading">
                <h1>Carregando membros...</h1>
            </div>      
        )
    }

    return (
        <>
            <div className="container">
                <ul>
                    {characters.map((character) => {
                        return (
                            <li key={character.id}>
                                <div className="container-name">
                                    <strong>{character.name}</strong>
                                </div>                               
                                <img src={character.images[0]} alt={character.name} />
                                <div className="container-buttons">
                                    <button><Link to={`character/${character.id}`}>Ver detalhes</Link></button>
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