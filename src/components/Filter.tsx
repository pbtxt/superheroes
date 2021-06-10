import React, { Component } from "react";
import { Powerstats, Appearance } from "./Types";

export interface Props {}

interface State {}

const filterTypes = ["poderes", "apariencia"];
const filterSubcategories = {
  poderes: [
    "intelligence",
    "strength",
    "speed",
    "durability",
    "power",
    "combat",
  ],
  apariencia: ["gender", "race", "height", "weight", "eye-color"],
};
export default class Filter extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  handleSearch = (ev: React.ChangeEvent<HTMLInputElement>) => {};
  render() {
    return (
      <div className="filter-container">
        <div className="filter-title">
          <h1>Ordenar por:</h1>
        </div>
        <div className="filter-types">
          {Object.keys(filterSubcategories).map((filter, filterIndex) => {
            return (
              <div key={filterIndex} className="filter-type-name">
                <h2>{filter}</h2>
                <ul className="filter-categories">
                  {Object.values(filterSubcategories)[filterIndex].map(
                    (filterCategory, filterCategoryIndex) => {
                      return (
                        <li key={filterCategory} className="filter-category">
                          {filterCategory}
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
