import { useEffect, useState } from "react";

import Card from "../components/Card";

import Layout from "../components/Layout";
import "../styles/App.css";

interface Pokemon {
  id: number;
  name: string;
  types: Array<{ type: { name: string } }>;
}

function Index() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  const randomCountPokemon = Math.floor(Math.random() * 50);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${randomCountPokemon}`
      );
      const data = await response.json();
      setPokemon(data.results);
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="grid  grid-cols-2 gap-3 p-3">
        {pokemon.map((data) => (
          <Card key={data.id} name={data.name} id={data.id} />
        ))}
      </div>
    </Layout>
  );
}

export default Index;
