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
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <DatePicker
        {...field}
        {...props}
        onChange={e => setFieldValue(field.name, moment(e).format('l'))}
      />
    </>
  )
}

export const DateRangeInput = ({
  selectedStartDate,
  minStartDate,
  selectedEndDate,
  minEndDate,
  ...props
}) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  const startDate = moment(field.value.start_date).toDate();
  const endDate = moment(field.value.end_date).toDate()
  const isDateRangeValid = Boolean(startDate <= endDate)

  return (
    <div className="startEndDateContainer">
      <div className="dateContainer">
        <DatePickerInput
          label="Start Date"
          name="start_date"
          selected={selectedStartDate}
          minDate={minStartDate}
          onChange={isDateRangeValid ? startDate : setFieldValue("end_date", moment(startDate).format('l'))}
          {...props}
        />
      </div>

      <div className="dateContainer">
        <DatePickerInput
          label="End Date"
          name="end_date"
          selected={moment(field.value.start_date).toDate()}
          minDate={moment(field.value.start_date).toDate()}
          {...props}
        />
      </div>
    </div>
  )
}