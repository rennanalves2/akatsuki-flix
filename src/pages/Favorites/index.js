import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import "./favorites.css";

const Favorites = () => {
    const [characters, setCharacters] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const myList = localStorage.getItem("@akatsuki-members");
        let saveCharacters = JSON.parse(myList) || [];
        setCharacters(saveCharacters);
    }, []);

    const removeCharacter = (id) => {
        let filteredCharacters = characters.filter((character) => {
            return (character.id != id);
        });
        setCharacters(filteredCharacters);
        localStorage.setItem("@akatsuki-members", JSON.stringify(filteredCharacters));
        alert("Filme removido com sucesso!");
    }

    return (
        <div>
            {characters.length === 0 && <span className="no-characters">No characters.</span>}
            <ul className="favorites">
                {characters.map((character) => {
                    return (
                        <li>{character.name}<button onClick={() => removeCharacter(character.id)}>Excluir</button></li>                          
                    )
                })}
            </ul>
        </div>
    )
}

export default Favorites;