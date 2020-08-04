import React from "react";
import { Category } from "./category.component";

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