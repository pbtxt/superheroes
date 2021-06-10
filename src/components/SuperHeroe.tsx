import React, { Component } from "react";
import { Appearance, SuperHeroeType } from "./Types";
import LoadingCircle from "./Common/LoadingCircle";
import Filter from "./Filter";
import { FilterType } from "./Types";

export type Props = {
  superheroe?: any;
};

type State = {
  loading: boolean;
  selected: FilterType;
  showMenu: string[];
};

export default class SuperHeroe extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: true,
      selected: {
        poderes: [],
        apariencia: [],
      },
      showMenu: ["bio"],
    };
  }

  handleSelection = (category: string, subcategorie: string) => {
    this.setState({ loading: true });
    let poderes = this.state.selected.poderes;
    let apariencia = this.state.selected.apariencia;
    if (category == "apariencia") {
      apariencia.push(subcategorie);
    } else {
      poderes.push(subcategorie);
    }
    this.setState(
      {
        selected: {
          apariencia: apariencia,
          poderes: poderes,
        },
      },
      () => {
        this.setState({ loading: false });
      }
    );
  };

  showItem = (item: string) => {
    let items = this.state.showMenu;
    if (items.includes(item)) {
      var indice = items.indexOf(item);
      items.splice(indice, 1);
    } else {
      items.push(item);
    }
    this.setState({ showMenu: items });
  };

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    const { superheroe } = this.props;
    const { loading, selected, showMenu } = this.state;

    return (
      <div className="superheroes-details">
        <Filter
          onChange={(category: string, subcategorie: string) =>
            this.handleSelection(category, subcategorie)
          }
        />
        <div className="superheroe-container">
          {loading && <LoadingCircle />}
          {superheroe && (
            <div className="superheroe-details-card">
              <div className="superheroe-big-card">
                {superheroe && superheroe.image && (
                  <img
                    src={superheroe.image.url}
                    alt={`${superheroe.name}-imagen`}
                  />
                )}
                <div className="superheroe-big-card-info">
                  <h1>{superheroe?.biography?.["full-name"]}</h1>
                  <div>
                    <h4 onClick={() => this.showItem("bio")}>Bio</h4>
                    {showMenu.includes("bio") && (
                      <ul>
                        <li>Alineación: {superheroe.biography?.alignment}</li>
                        <li>
                          Alter egos: {superheroe.biography?.["alter-egos"]}
                        </li>
                        <li>
                          Primera aparición:{" "}
                          {superheroe.biography?.["first-appearance"]}
                        </li>
                        <li>
                          Lugar de nacimiento:{" "}
                          {superheroe.biography?.["place-of-birth"]}
                        </li>
                      </ul>
                    )}
                  </div>
                  <div>
                    <h4>Apariencia</h4>
                    <ul>
                      {selected &&
                        selected.apariencia.map((item) => {
                          return (
                            <li>
                              {item}
                              {": "}
                              {item &&
                                superheroe.appearance &&
                                superheroe.appearance[item]}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                  <div>
                    <h4 onClick={() => this.showItem("conecciones")}>
                      Conecciones
                    </h4>
                    {showMenu.includes("conecciones") && (
                      <ul>
                        <li>
                          Afiliaciones:{" "}
                          {superheroe.connections?.["group-affiliation"]}
                        </li>
                        <li>Familia: {superheroe.connections?.relatives}</li>
                      </ul>
                    )}
                  </div>
                  <div>
                    <h4 onClick={() => this.showItem("trabajo")}>Trabajo</h4>
                    {showMenu.includes("trabajo") && (
                      <ul>
                        <li>Base: {superheroe.work?.base}</li>
                        <li>Ocupación: {superheroe.work?.occupation}</li>
                      </ul>
                    )}
                  </div>
                  <div>
                    <h4>Poderes</h4>
                    <ul>
                      {selected &&
                        selected.poderes.map((item) => {
                          return (
                            <li>
                              {item}
                              {": "}
                              {item &&
                                superheroe.powerstats &&
                                superheroe.powerstats[item]}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
