import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import "./character.css";

const Character = () => {
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

    const saveCharacter = () => {
        const myList = localStorage.getItem("@akatsuki-members");
        let saveCharacters = JSON.parse(myList) || [];   
        const hasCharacter = saveCharacters.some((saveCharacter) => saveCharacter.id == character.id);
        if(hasCharacter) {
            alert("Esse personagem já está na sua lista!")
            return;
        }
        saveCharacters.push(character);
        localStorage.setItem("@akatsuki-members", JSON.stringify(saveCharacters));
        alert("Personagem salvo com sucesso!");
    }

    if(loading) {
        return (
            <div className="container-loading">
                <h1>Carregando detalhes...</h1>
            </div>      
        )
    }

    return (
        <div className="container">
            <div className="collumn">
                <h2>{character.name}</h2>
                <img src={character.images} alt={character.name} />
                <button onClick={saveCharacter}>Salvar</button>
            </div>
        </div>
    );
}

export default Character;