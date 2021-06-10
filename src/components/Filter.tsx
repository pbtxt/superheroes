import React, { Component } from "react";
import { FilterType } from "./Types";

export interface Props {
  onChange: (category: string, subcategorie: string) => void;
}

interface State {}

const filterSubcategories: FilterType = {
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

  handleSelector = (category: string, subcategorie: string) => {
    this.props.onChange(category, subcategorie);
  };

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
                        <li
                          key={filterCategoryIndex}
                          className="filter-category"
                          onClick={() =>
                            this.handleSelector(
                              Object.keys(filterSubcategories)[filterIndex],
                              filterCategory
                            )
                          }
                        >
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
