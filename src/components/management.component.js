import React, {useState} from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import { Category } from "./category.component";
import { saveSuccessful, dateRangeError } from "../utils/alerts";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "../partials/_main.scss";
import moment from 'moment';

export const Management = ({ addPosting, ...props }) => {
  const [organization, setOrganization] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('Toronto');
  const [stateProvince, setStateProvince] = useState('ON');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [role, setRole] = useState('');
  const [roleDescription, setRoleDescription] = useState('');
  const [startDate, setStartDate] = useState(moment().toDate());
  const [endDate, setEndDate] = useState(moment().toDate());

  // To automatically set the focus to the first input field after submit
  const organizationInput = React.createRef();

  const clearFields = () => {
    // Clear the fields after submit
    setOrganization('');
    setAddress('');
    setStateProvince('ON');
    setCity("Toronto");
    setPhone('');
    setWebsite('');
    setEmail('');
    setCategory('');
    setRole('');
    setRoleDescription('');
    setStartDate(moment().toDate());
    setEndDate(moment().toDate());
  }

  const handleSubmit = event => {
    event.preventDefault();

    // Validate date range. Do not continue if there's an error.
    if (endDate < startDate) {
      return dateRangeError();
    }

    addPosting({
      posting: [
        {
          organization,
          address,
          state: 'ON',
          city,
          phone: phone.replace(/-/g, ""),
          website,
          email,
          category,
          role,
          role_description: roleDescription,
          start_date: moment(startDate).format('l'), 
          end_date: moment(endDate).format('l'),
          created: Date.now()
        }
      ],
    });

    clearFields();

    organizationInput.current.focus();
    saveSuccessful();
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="fieldsetContainer">
        <fieldset>
          <legend>Organization Information</legend>
          <div className="fieldsContainer">
            <label>
              Name <span>*</span>
              <input
                id="organization"
                type="text"
                name="organization"
                onChange={e => setOrganization(e.target.value)}
                value={organization}
                placeholder="Animal Shelter"
                size="30"
                ref={organizationInput}
                required
              />
            </label>

            <label>
              Address <span>*</span>
              <input
                id="address"
                type="text"
                name="address"
                onChange={e => setAddress(e.target.value)}
                value={address}
                placeholder="123 Main Street"
                required
              />
            </label>

            <label>
              City
              <input
                id="city"
                type="text"
                name="city"
                onChange={e => setCity(e.target.value)}
                value={city}
                disabled
              />
            </label>

            <label htmlFor="state">State</label>
            <input
              id="state"
              type="text"
              name="state"
              onChange={e => setStateProvince(e.target.value)}
              value={stateProvince}
              disabled
            />

            <label>
              Phone <span>*</span>
              <input
                id="phone"
                type="tel"
                name="phone"
                pattern="[\d]{3}-?[\d]{3}-?[\d]{4}"
                onChange={e => setPhone(e.target.value)}
                value={phone}
                placeholder="416-123-4567"
                title="Format: 416-123-4567 or 4161234567"
                required
              />
            </label>

            <label>
              Website
              <input
                id="website"
                type="url"
                name="website"
                onChange={e => setWebsite(e.target.value)}
                value={website}
                placeholder="https://organization.com"
              />
            </label>
            
            <label>
              Email
              <input
                id="email"
                type="email"
                name="email"
                onChange={e => setEmail(e.target.value)}
                value={email}
                size="30"
                placeholder="johndoe@domain.com"
              />
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>About the Role</legend>
          <div className="fieldsContainer">
            <label>
              Category <span>*</span>
              <Category
                name="category"
                id="category"
                onChange={e => setCategory(e.target.value)}
                value={category}
                required="required"
                defaultText="Select Category"
                {...props}
              />
            </label>

            <label>
              Role <span>*</span>
              <input
                id="role"
                type="text"
                name="role"
                onChange={e => setRole(e.target.value)}
                value={role}
                placeholder="Dog Walker"
                required
              />
            </label>
            
            <label>
              Description <span>*</span>
              <textarea
                className="textArea"
                maxLength="500"
                id="roleDescription"
                type="text"
                name="role_description"
                onChange={e => setRoleDescription(e.target.value)}
                value={roleDescription}
                placeholder="What is the role about? How to apply? (Maximum of 500 characters)"
                required
              />
            </label>
            
            <div className="startEndDateContainer">
              <div className="dateContainer">
                <label>
                  Start Date
                  <DatePicker
                    selected={startDate}
                    onChange={e => setStartDate(e)}
                    minDate={moment().toDate()}
                  />
                </label>
              </div>

              <div className="dateContainer">
                <label>
                  End Date
                  <DatePicker
                    selected={endDate}
                    onChange={e => setEndDate(e)}
                    minDate={moment(startDate).toDate()}
                  />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <button className="formSubmit">SUBMIT</button>
      <p>
        <span>*</span> required fields
			</p>
    </form>
  );
};

Management.propTypes = {
  props: PropTypes.object,
};
