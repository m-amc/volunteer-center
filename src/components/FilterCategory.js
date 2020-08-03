import React from "react";
import { Category } from "./Category";

export const FilterCategory = ({ category, handleCategoryChange }) => (
  <div className="filterCategory">
    <p>Filter:</p>
    <Category
      onChange={handleCategoryChange}
      value={category}
      defaultText="All Category"
    />
  </div>
);