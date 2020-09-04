import React, {forwardRef} from 'react';
import { useField } from 'formik'
import DatePicker from "react-datepicker";
import moment from 'moment'

export const TextInput = forwardRef( (props, ref) => {
  const [field, meta] = useField(props);
  const { label } = props;
  return (
    <label>
      {label}
      <input ref={ref} {...field} {...props} />
      {
        meta.touched && meta.error ? (
          <div className="error">
            {meta.error}
          </div>
          ) : null}
    </label>
  )
})

export const SelectInput = ({ label, options, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select id={props.id || props.name} {...field} {...props}>
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
    <label>
      {label}
      <textarea {...field} {...props} />
      {
        meta.touched && meta.error ? (
          <div className="error">
            {meta.error}
          </div>
        ) : null}
    </label>
  )
}

export const DatePickerInput = ({
  label,
  ...props
}) => {
  const { field } = props;

  return (
    <>
      <label>
        {label}
        <DatePicker
          name={field.name}
          selected={moment(field.value).toDate()}
          minDate={moment(field.value).toDate()}
          onChange={e => props.form.setFieldValue(field.name, moment(e).format())}
        />
      </label>
    </>
  )
}