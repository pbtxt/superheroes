import React, { Component } from "react";
import { SuperHeroeType } from "./Types";

export type Props = {
  superheroe?: SuperHeroeType;
};

type State = {};

export default class SuperHeroe extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { superheroe } = this.props;
    return (
      <div className="superheroe-container">
        {superheroe && (
          <div className="superheroe-card">
            {superheroe && superheroe.image && (
              <img
                src={superheroe.image.url}
                alt={`${superheroe.name}-imagen`}
              />
            )}
            <h1>{superheroe.name}</h1>
          </div>
        )}
      </div>
    );
  }
}
