import React from 'react';
import PropTypes from 'prop-types';

const Category = (props) => {
    return (        
        <select
            name={props.name}
            onChange={props.onChange}
            value={props.value}
            required={props.required}>
            <option value="">{props.defaultText}</option>
            <option value="community">Community</option>
            <option value="education">Education</option>
            <option value="healthcare">Health Care</option>
            <option value="animals">Pets/Animals</option>
        </select>
    )
}

Category.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    required: PropTypes.string,
    defaultText: PropTypes.string
}

export default Category;