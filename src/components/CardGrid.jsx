import { useState, useEffect } from "react";

import Card from "./Card";
import getData from "../game/getData";

import "../styles/cardGrid.css";

const pokemonNames = [
  "serperior",
  "dragonite",
  "rampardos",
  "ariados",
  "magmortar",
  "hitmonchan",
  "snorlax",
  "darkrai",
  "empoleon",
  "wobbuffet",
  "raikou",
  "electivire",
  "articuno",
  "togekiss",
  "seviper",
  "staraptor",
  "torterra",
  "steelix",
];

export default function CardGrid({ setScore, setBestScore }) {
  // When we click on card, App get rendered > CardGrid gets rendered > so shuffle() is executed again
  shuffle(pokemonNames);

  const [pokemonItems, setPokemomItems] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      const fetchedItems = [];
      for (let i = 0; i < pokemonNames.length; i++) {
        let item = await getData(pokemonNames[i]);
        fetchedItems.push(item);
      }
      if (!ignore) {
        setPokemomItems(fetchedItems);
      }
    }

    startFetching();

    return () => {
      ignore = false;
    };
  }, []);

  const pokemonCards = pokemonItems.map((pokemon) => (
    <Card
      item={pokemon}
      key={pokemon.name}
      setScore={setScore}
      setBestScore={setBestScore}
    />
  ));

  return (
    <div className="cardGrid" onClick={() => shuffle(pokemonItems)}>
      {pokemonCards}
    </div>
  );
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);

    // exchange
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
}
