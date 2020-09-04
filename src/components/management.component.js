import React from "react";
import PropTypes from "prop-types";
import { Category } from "./category.component";
import {
  saveSuccessful,
} from "../utils/alerts";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "../partials/_main.scss";
import moment from 'moment';
import {
  Formik,
  Form,
  Field,
} from 'formik';
import * as Yup from 'yup';
import {
  TextInput,
  TextAreaInput,
  DatePickerInput
} from './form-fields.component';

// The keys should correspond to the name attribute of the form fields
const initialValues = {
  organization: '',
  address: '',
  city: 'Toronto',
  state: 'ON',
  phone: '',
  website: '',
  email: '',
  category: '',
  role: '',
  role_description: '',
  start_date: moment().format(),
  end_date: moment().format()
}

const REQUIRED = 'Required'

// Validation schema
const validationSchema = Yup.object({
  organization: Yup.string()
    .max(30, "Maximum is 30 characters")
    .required(REQUIRED),
  address: Yup.string().required(REQUIRED),
  phone: Yup.string().required(REQUIRED),
  email: Yup.string()
    .email("Invalid email format")
    .max(30, "Maximum is 30 characters"),
  category: Yup.string().required(REQUIRED),
  role: Yup.string().required(REQUIRED),
  role_description: Yup.string().required(REQUIRED),
})

export const Management = ({ addPosting }) => {
  const organizationInput = React.createRef();

  const handleSubmit = (values, { resetForm }) => {
    addPosting({
      posting: [
        { ...values, created: moment().format() },
      ]
    })
    organizationInput.current.focus();
    saveSuccessful();
    resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="fieldsetContainer">
          <fieldset>
            <legend>Organization Information</legend>
            <div className="fieldsContainer">
              {
                <>
                  <TextInput
                    type="text"
                    label="Name"
                    name="organization"
                    placeholder="Animal Shelter"
                    ref={organizationInput}
                  />

                  <TextInput
                    type="text"
                    label="Address"
                    name="address"
                    placeholder="123 Main street"
                  />

                  <TextInput
                    type="text"
                    label="City"
                    name="city"
                    disabled
                  />

                  <TextInput
                    type="text"
                    label="State"
                    name="state"
                    disabled
                  />

                  <TextInput
                    type="tel"
                    name="phone"
                    label="Phone"
                    pattern="[\d]{3}-?[\d]{3}-?[\d]{4}"
                    placeholder="416-123-4567"
                    title="Format: 416-123-4567 or 4161234567"
                  />

                  <TextInput
                    type="url"
                    name="website"
                    label="Website"
                    placeholder="https://organization.com"
                  />

                  <TextInput
                    type="email"
                    name="email"
                    label="Email"
                    placeholder="johndoe@domain.com"
                  />
                </>
              }
            </div>
          </fieldset>

          <fieldset>
            <legend>About the Role</legend>
            <div className="fieldsContainer">
              <Category />
              <TextInput
                type="text"
                name="role"
                label="Role"
                placeholder="Dog walker"
              />

              <TextAreaInput
                className="textArea"
                maxLength="500"
                name="role_description"
                label="Role Description"
                placeholder="What is the role about? How to apply? (Maximum of 500 characters)"
              />

              <div className="startEndDateContainer">
                <div className="dateContainer">
                  <Field name="start_date">
                    {
                      props => {
                        const { field, form } = props;
                        const startDate = moment(field.value).toDate();
                        const endDate = moment(form.values.end_date).toDate()
                        const isDateRangeValid = Boolean(startDate <= endDate)

                        return (
                          <DatePickerInput
                            label="Start Date"
                            {...props}
                            onChange={isDateRangeValid ? startDate : form.setFieldValue("end_date", moment(startDate).format())}
                          />
                        )
                      }
                    }
                  </Field>
                </div>
                <div className="dateContainer">
                  <Field name="end_date">
                    {
                      props => {
                        return (
                          <DatePickerInput
                            label="End Date"
                            {...props}
                          />
                        )
                      }
                    }
                  </Field>
                </div>
              </div>
            </div>
          </fieldset>
        </div> 
        <button type="submit" className="formSubmit">SUBMIT</button>
      </Form>
    </Formik>
  );
};

Management.propTypes = {
  props: PropTypes.object,
};
