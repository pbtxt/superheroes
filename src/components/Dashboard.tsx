import React, { Component } from "react";
import {
  getSuperHeroes,
  getSuperHeroesName,
  getSuperHeroesID,
} from "../functions/api";
import SuperHeroe from "./SuperHeroe";
import { SuperHeroeType } from "./Types";
import LoadingCircle from "./Common/LoadingCircle";

export interface Props {}

type State = {
  superheroes: SuperHeroeType[];
  value: string;
  showDetails: boolean;
  loadign: boolean;
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
      loadign: true,
    };
  }

  componentDidMount() {
    getSuperHeroes()
      .then((data) => {
        this.setState({ superheroes: data.data.results });
      })
      .then(() => {
        this.setState({ loadign: false });
      });
  }

  handleDetails = (id: string) => {
    this.setState({ loadign: true });
    let result: SuperHeroeType[] = [];
    getSuperHeroesID(id)
      .then((data) => {
        result.push(data.data);
        this.setState({
          superheroes: result,
        });
      })
      .then(() => {
        this.setState({ showDetails: true, loadign: false });
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
    const { superheroes, value, showDetails, loadign } = this.state;
    return (
      <div className="dashboard-container">
        {loadign && <LoadingCircle />}
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
            superheroes.map((superheroe) => {
              return (
                <div>
                  {!showDetails ? (
                    <div className="superheroe-container">
                      <div
                        className="superheroe-card"
                        onClick={() => this.handleDetails(superheroe.id)}
                      >
                        {superheroe && superheroe.image && (
                          <img
                            src={superheroe.image.url}
                            alt={`${superheroe.name}-imagen`}
                          />
                        )}
                        <div className="superheroe-info-container">
                          <h1>{superheroe.name}</h1>
                          <p>
                            Lugar de nacimiento:{" "}
                            {superheroe.biography?.["place-of-birth"]}
                          </p>
                          <p>
                            Alteregos: {superheroe.biography?.["alter-egos"]}
                          </p>
                          <div className="superheroe-aliases-container">
                            <h2>Aliados</h2>
                            {superheroe.biography?.aliases?.map((ally) => {
                              return <p>{ally}</p>;
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <SuperHeroe superheroe={superheroe}></SuperHeroe>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
