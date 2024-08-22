import React from "react"
import styles from "./pokemonDetails.module.css"
import {useNavigate} from "react-router-dom";

const PokemonDetails = ({pokemonDetails}) => {
    const navigate = useNavigate()

    return <div className={styles.pokemonDetailsContainer}>
        <div className={styles.pokemonName}>
            <h2>name: <span> {pokemonDetails.name}</span></h2>

        </div>
        <div className={styles.pokemonTypes}>
            <h2>types:
                {pokemonDetails.types.map((item, index) => {
                    return <span key={index}> {item.type.name} </span>
                })}
            </h2>
        </div>
        <img className={styles.pokemonImage} src={pokemonDetails.sprites.front_default} alt=""/>
        <div className={styles.buttons}>
            <button onClick={() => parseInt(pokemonDetails.id) > 1 && navigate(`/pokemon/${parseInt(pokemonDetails.id) - 1}`)}>Anterior</button>
            <button onClick={() => parseInt(pokemonDetails.id) < 151 && navigate(`/pokemon/${parseInt(pokemonDetails.id) + 1}`)}>Proximo</button>
        </div>
    </div>
}
export default PokemonDetails