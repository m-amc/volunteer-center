import React from "react";
import {
  SelectInput
} from './form-fields.component';

export const Category = props => (
  <SelectInput
    id="category"
    name="category"
    label="Category"
    options={[
      { value: "community", label: "Community" },
      { value: "education", label: "Education" },
      { value: "forestry", label: "Forestry" },
      { value: "healthcare", label: "Healthcare" },
      { value: "office", label: "Office" },
      { value: "animals", label: "Animals" },
      { value: "retail", label: "Retail" },
      { value: "sports", label: "Sports" },
      { value: "tourism", label: "Tourism" },
    ]}
    {...props}
  />
);


