import React, { Component } from "react";

export type Props = {
  superheroe?: {
    name: string;
    id: string;
    image: { url: string };
  };
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
