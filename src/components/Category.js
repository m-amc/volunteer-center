import React from 'react';
import { app } from 'firebase';

const Category = (props) => {
    console.log(props);
    return (
        
        <select
            name={props.name}
            onChange={props.onChange}
            value={props.value}
            required={props.required}>
            <option value="">Select Category</option>
            <option value="community">Community</option>
            <option value="education">Education</option>
            <option value="healthcare">Health Care</option>
            <option value="animals">Pets/Animals</option>
        </select>
    )

}

export default Category;