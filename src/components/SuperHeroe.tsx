import React, { Component } from "react";
import { SuperHeroeType } from "./Types";

export type Props = {
  superheroe?: SuperHeroeType;
  handleDetails: (id: string) => void;
};

type State = {
  showDetails: boolean;
};

export default class SuperHeroe extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showDetails: false,
    };
  }

  componentDidMount() {}

  handleDetails = (id: string) => {
    this.setState({ showDetails: !this.state.showDetails }, () => {
      this.props.handleDetails(id);
    });
  };

  render() {
    const { superheroe } = this.props;
    const { showDetails } = this.state;

    return (
      <div className="superheroe-container">
        {superheroe && !showDetails ? (
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
                Lugar de nacimiento: {superheroe.biography?.["place-of-birth"]}
              </p>
              <p>Alteregos: {superheroe.biography?.["alter-egos"]}</p>
              <div className="superheroe-aliases-container">
                <h2>Aliados</h2>
                {superheroe.biography?.aliases?.map((ally) => {
                  return <p>{ally}</p>;
                })}
              </div>
            </div>
          </div>
        ) : (
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
                <p>Biografia</p>
                <p>Apariencia</p>
                <p>Conecciones</p>
                <p>Poderes</p>
                <p>Trabajo</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
