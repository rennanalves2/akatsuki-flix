import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import "./character.css";

function Character() {
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadCharacter() {
            const response = await api.get(`akatsuki/${id}`);
            setCharacter(response.data);
        }
        loadCharacter();
        setLoading(false);
    }, []);

    if(loading) {
        return (
            <div className="container-loading">
                <h1>Carregando detalhes...</h1>
            </div>      
        )
    }

    return (
        <div className="container-character">
            <h2>{character.name}</h2>
            <img src={character.images} alt={character.name} />
        </div>
    );
}

export default Character;