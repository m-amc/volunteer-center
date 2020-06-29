import React from 'react';
import Category from './Category';

const FilterCategory = ({ app }) => {
  return (
    <div className="filterCategory">
      <p>Filter:</p>
      <Category
        onChange={app.handleCategoryChange}
        value={app.state.filteredCategory}
        defaultText="All Category"
      />
    </div>
  )
}

export default FilterCategory;