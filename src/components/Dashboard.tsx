import React, { Component } from "react";
import { getSuperHeroes, getSuperHeroesName } from "../functions/api";
import SuperHeroe from "./SuperHeroe";
import { SuperHeroeType } from "./Types";
export interface Props {}

type State = {
  superheroes: SuperHeroeType[];
  value: string;
};

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export default class Dashboard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      superheroes: [],
      value: "",
    };
  }

  componentDidMount() {
    getSuperHeroes().then((data) => {
      this.setState({ superheroes: data.data.results });
      console.log(this.state.superheroes);
    });
  }

  handleSearch = (ev: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(
      {
        value: ev.target.value,
      },
      () => {
        if (this.state.value.length > 0) {
          getSuperHeroesName(this.state.value).then((data) => {
            this.setState({ superheroes: data.data.results });
          });
        } else {
          getSuperHeroes().then((data) => {
            this.setState({ superheroes: data.data.results });
          });
        }
      }
    );
  };

  searchByLetter = (letter: string) => {
    let supers: SuperHeroeType[] = [];
    getSuperHeroesName(letter).then((data) => {
      data.data.results.map((x: SuperHeroeType) => {
        if (x.name.charAt(0) == letter) {
          supers.push(x);
        }
      });
      this.setState({ superheroes: supers });
    });
  };

  render() {
    const { superheroes, value } = this.state;
    return (
      <div className="dashboard-container">
        <h1>Dashboard SuperHeroes</h1>
        <input
          onChange={this.handleSearch}
          value={value}
          className="input"
          type="search"
          id="search-bar__input"
          placeholder="Buscar"
        />
        <div className="dashboard-letters-container">
          {letters.map((letter) => {
            return (
              <button
                className="dashboard-letter-button"
                onClick={() => this.searchByLetter(letter)}
              >
                {letter}
              </button>
            );
          })}
        </div>
        <div className="dashboard-superheroes-container">
          {superheroes &&
            superheroes.map((superHeroe, superKey) => {
              return <SuperHeroe superheroe={superHeroe} />;
            })}
        </div>
      </div>
    );
  }
}
