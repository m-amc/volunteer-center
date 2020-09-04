import React from 'react';
import { useField } from 'formik'
import DatePicker from "react-datepicker";
import moment from 'moment'

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {
        meta.touched && meta.error ? (
          <div className="error">
            {meta.error}
          </div>
        ) : null}
    </>
  )
}

export const SelectInput = ({ label, options, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props}>
        <option value="">Select a value</option>
        {
          options.map(option => 
            <option
              key={option.value}
              value={option.value}
            >
              {option.label || option.value}
            </option>
            )
        }
      </select>

      {
        meta.touched && meta.error ? (
          <div className="error">
            {meta.error}
          </div>
        ) : null}
    </>
  )
}

export const TextAreaInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea {...field} {...props} />
      {
        meta.touched && meta.error ? (
          <div className="error">
            {meta.error}
          </div>
        ) : null}
    </>
  )
}

export const DatePickerInput = ({
  label,
  ...props
}) => {
  const { field } = props;

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <DatePicker
        name={field.name}
        selected={moment(field.value).toDate()}
        minDate={moment(field.value).toDate()}
        onChange={e => props.form.setFieldValue(field.name, moment(e).format())}
      />
    </>
  )
}