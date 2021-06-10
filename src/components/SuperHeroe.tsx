import React, { Component } from "react";
import { SuperHeroeType } from "./Types";
import LoadingCircle from "./Common/LoadingCircle";

export type Props = {
  superheroe?: SuperHeroeType;
};

type State = {
  loading: boolean;
};

export default class SuperHeroe extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    const { superheroe } = this.props;
    const { loading } = this.state;
    return (
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
