import React from "react";
import { Category } from "./Category";

export const FilterCategory = ({ handleCategoryChange, filteredCategory }) => (
  <div className="filterCategory">
    <p>Filter:</p>
    <Category
      onChange={handleCategoryChange}
      value={filteredCategory}
      defaultText="All Category"
    />
  </div>
);
