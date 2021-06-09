import axios from "axios";

export async function getSuperHeroes() {
  const superheroes = await axios.get(
    "https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/3044147965817064/search/a"
  );
  return superheroes;
}

export async function getSuperHeroesName(name) {
  const superheroes = await axios.get(
    `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/3044147965817064/search/${name}`
  );
  return superheroes;
}
