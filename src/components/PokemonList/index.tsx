import React from "react"
import {Link} from "react-router-dom";
import styles from "./pokemonList.module.css"
import PokeballSvg from "../../assets/images/pokeball.svg";

interface PokemonList {
    name: string,
    url: string
}
const PokemonListComponent: React.FC<PokemonList> = ({pokemonList}) => {
    return <div className={styles.pokemonListContainer}>
        {pokemonList.map((item, index) => {
            const pokeID = item.url.split("/")
            return <div className={styles.card}>
                <img className={styles.pokeballImage} src={PokeballSvg} width={30} height={30} alt="Imagem de pokebola"/>
                <h1 className={styles.pokemonName} key={index}>Nome: {item.name}</h1>
                <Link className={styles.link} to={`/pokemon/${pokeID[pokeID.length - 2]}`}>Ver Detalhes</Link>
            </div>
        })}
    </div>
}

export default PokemonListComponent