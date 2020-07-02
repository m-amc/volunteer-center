import React from "react";
import PropTypes from "prop-types";

export const Category = (props) => (
  <select
    id={props.id}
    name={props.name}
    onChange={props.onChange}
    value={props.value}
    required={props.required}
  >
    <option value="">{props.defaultText}</option>
    <option value="community">Community</option>
    <option value="education">Education</option>
    <option value="forestry">Forestry</option>
    <option value="healthcare">Health Care</option>
    <option value="office">Office</option>
    <option value="animals">Pets/Animals</option>
    <option value="retail">Retail</option>
    <option value="sports">Sports/Recreation</option>
    <option value="tourism">Tourism</option>
  </select>
);

Category.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  required: PropTypes.string,
  defaultText: PropTypes.string,
};
