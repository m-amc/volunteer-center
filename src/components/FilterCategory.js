import React from "react";
import { Category } from "./Category";

export const FilterCategory = ({ app }) => (
  <div className="filterCategory">
    <p>Filter:</p>
    <Category
      onChange={app.handleCategoryChange}
      value={app.state.filteredCategory}
      defaultText="All Category"
    />
  </div>
);
