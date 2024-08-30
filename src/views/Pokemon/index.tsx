import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonDetails } from "../../services/pokemonService.ts";
import PokemonDetails from "../../components/PokemonDetails";
import styles from "./pokemon.module.css";
import Header from "../../components/Header";

const Pokemon = () => {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchPokemonById = async () => {
        try {
          const data = await fetchPokemonDetails(id);
          setPokemonDetails(data);
        } catch (error) {
          console.error(error);
          setError("Failed to fetch Pokémon details");
        } finally {
          setLoading(false);
        }
      };

      fetchPokemonById();
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!pokemonDetails) return null;

  return (
    <div className={styles.pokemonDetailsContainer}>
      <Header />
      <PokemonDetails pokemonDetails={pokemonDetails} />
    </div>
  );
};

export default Pokemon;
