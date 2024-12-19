import { useState,useEffect } from "react";
import "./favorites.css";
import { toast } from "react-toastify";

const Favorites = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const myList = localStorage.getItem("@akatsuki-members");
        let saveCharacters = JSON.parse(myList) || [];
        setCharacters(saveCharacters);
    }, []);

    const removeCharacter = (id) => {
        let filteredCharacters = characters.filter((character) => {
            return (character.id !== id);
        });
        setCharacters(filteredCharacters);
        localStorage.setItem("@akatsuki-members", JSON.stringify(filteredCharacters));
        toast.success("Filme removido com sucesso!");
    }

    return (
        <div>
            {characters.length === 0 && <span className="no-characters">No characters.</span>}
            <ul className="favorites">
                {characters.map((character) => {
                    return (
                        <li key={character.id}>{character.name}<button onClick={() => removeCharacter(character.id)}>Excluir</button></li>                          
                    )
                })}
            </ul>
        </div>
    )
}

export default Favorites;