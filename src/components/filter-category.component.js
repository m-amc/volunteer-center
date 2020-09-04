import React from "react";
import { Category } from "./category.component";
import {Formik} from 'formik';

export const FilterCategory = ({ category, handleCategoryChange }) => (
  <div className="filterCategory">
    <Formik>
      <Category
        label="Filter: Category"
        onChange={handleCategoryChange}
      />
    </Formik>
  </div>
);