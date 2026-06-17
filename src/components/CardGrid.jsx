export default function CardGrid() {
  const pokemonList = [
    {
      id: crypto.randomUUID(),
      name: "bulbasaur",
    },
    {
      id: crypto.randomUUID(),
      name: "charizard",
    },
  ];

  const pokemonCards = pokemonList.map((pokemon) => (
    <li key={pokemon.id} value={pokemon.name} onClick={handleClick}>
      {pokemon.name}
    </li>
  ));

  return (
    <div className="cardGrid">
      <ul>{pokemonCards}</ul>
    </div>
  );
}
