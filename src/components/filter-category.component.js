import React from "react";
import { Category } from "./category.component";
import {Formik} from 'formik';

export const FilterCategory = ({ handleCategoryChange }) => (
  <div className="filterCategory">
    <Formik>
      <Category
        label="Filter:"
        onChange={handleCategoryChange}
      />
    </Formik>
  </div>
);