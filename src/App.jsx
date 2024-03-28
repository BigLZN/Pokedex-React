import PokemonCard from "./assets/components/Pokemoncard";

const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Mew",
  },
];

function App() {
  return (
    <div>
      <PokemonCard pokemonList={pokemonList} />
    </div>
  );
}

export default App;
