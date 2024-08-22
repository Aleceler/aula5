import React from "react"
import {Link} from "react-router-dom";
import styles from "./pokemonList.module.css"

interface PokemonList {
    name: string,
    url: string
}
const PokemonListComponent: React.FC<PokemonList> = ({pokemonList}) => {
    return <div className={styles.pokemonListContainer}>
        {pokemonList.map((item, index) => {
            const pokeID = item.url.split("/")
            return <div className={styles.card}>
                <h1 className={styles.pokemonName} key={index}>Nome: {item.name}</h1>
                <Link className={styles.link} to={`/pokemon/${pokeID[pokeID.length -2]}`}>{item.url}</Link>
            </div>
        })}
    </div>
}

export default PokemonListComponent