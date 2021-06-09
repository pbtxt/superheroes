import React, { Component } from "react";
import {
  getSuperHeroes,
  getSuperHeroesName,
  getSuperHeroesID,
} from "../functions/api";
import SuperHeroe from "./SuperHeroe";
import { SuperHeroeType } from "./Types";

export interface Props {}

type State = {
  superheroes: SuperHeroeType[];
  value: string;
  showDetails: boolean;
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
      showDetails: false,
    };
  }

  componentDidMount() {
    getSuperHeroes().then((data) => {
      this.setState({ superheroes: data.data.results });
      console.log(this.state.superheroes);
    });
  }

  handleDetails = (id: string) => {
    let result: SuperHeroeType[] = [];
    getSuperHeroesID(id).then((data) => {
      result.push(data.data);
      this.setState({
        superheroes: result,
        showDetails: !this.state.showDetails,
      });
    });
  };

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
    const { superheroes, value, showDetails } = this.state;
    return (
      <div className="dashboard-container">
        <h1 className="dashboard-title">SuperHeroes</h1>
        {!showDetails && (
          <input
            onChange={this.handleSearch}
            value={value}
            className="input"
            type="search"
            id="search-bar__input"
            placeholder="Buscar"
          />
        )}
        {!showDetails && (
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
        )}
        <div className="dashboard-superheroes-container">
          {superheroes &&
            superheroes.map((superHeroe) => {
              return (
                <SuperHeroe
                  superheroe={superHeroe}
                  handleDetails={() => this.handleDetails(superHeroe.id)}
                />
              );
            })}
        </div>
      </div>
    );
  }
}
