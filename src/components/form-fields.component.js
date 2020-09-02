import React from 'react';
import { useField, useFormikContext } from 'formik'
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
  const { setFieldValue } = useFormikContext()
  const [field] = useField(props)

  return (
    <div className="startEndDateContainer">
      <div className="dateContainer">
        <label htmlFor={props.id || props.name}>{label}</label>
        <DatePicker
          {...field}
          {...props}
          onChange={e => setFieldValue(field.name, moment(e).format('l'))}
        />
      </div>
    </div>
  )
}

export const DateRangeInput = ({
  selectedStartDate,
  minStartDate,
  selectedEndDate,
  minEndDate,
  ...props
}) => {
  return (
    <>
      <DatePickerInput
        label="Start Date"
        name="startDate"
        selected={selectedStartDate}
        minDate={minStartDate}
        {...props}
      />

      <DatePickerInput
        label="End Date"
        name="endDate"
        selected={selectedEndDate}
        minDate={minEndDate}
        {...props}
      />
    </>
  )
}