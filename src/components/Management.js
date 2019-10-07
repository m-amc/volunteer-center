// import React from 'react';
import React, { useEffect } from "react";

import Category from './Category';
import PropTypes from 'prop-types';
import '../partials/_main.scss';
import DatePicker from "react-datepicker";
import successful, { dateRangeError } from '../alerts'
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { useAuth0 } from "../react-auth0-wrapper";


const Management = (props) => {
    // Authentication check
    /* Source: Auth0 documentation
    This makes use of the useEffect hook to redirect to the user to the login page if they are not yet authenticated.

    If the user is authenticated, the redirect will not take place 
    */

    const { loading, isAuthenticated, loginWithRedirect } = useAuth0();

    const path = "/";

    useEffect(() => {
        if (loading || isAuthenticated) {
            return;
        }
        const fn = async () => {
            await loginWithRedirect({
                appState: { targetUrl: path }
            });
        };
        fn();
    }, [loading, isAuthenticated, loginWithRedirect, path]);
    // Authentication check ends

    const dbRef = props.app.dbRef.child('posting'),
        appState = props.app.state,
        app = props.app;

    // To automatically set the focus to the first input field after submit
    const organizationInput = React.createRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate date range. Do not continue if there's an error. 
        if (appState.end_date < appState.start_date) {
            dateRangeError();
            return
        }

        // The dbRef push property will be able to return the object key but it needs to be assigned to variable first before setting the state
        const newPostRef = dbRef.push();
        newPostRef.set({
            id: newPostRef.key,
            organization: appState.organization,
            address: appState.address,
            state: 'ON',
            city: 'Toronto',
            phone: appState.phone.replace(/-/g, ''),
            website: appState.website,
            email: appState.email,
            category: appState.category,
            role: appState.role,
            role_description: appState.role_description,
            start_date: appState.start_date.toLocaleDateString(),
            end_date: appState.end_date.toLocaleDateString(),
            created: appState.created
        });

        // Clear the fields after submit
        app.setState({
            organization: '',
            address: '',
            state: 'ON',
            city: 'Toronto',
            phone: '',
            website: '',
            email: '',
            category: '',
            role: '',
            role_description: '',
            start_date: new Date(),
            end_date: new Date(),
            created: Date.now()
        })

        organizationInput.current.focus();

        successful();
    }

    const handleChange = (event) => {
        app.setState({
            [event.target.name]: event.target.value
        })
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <div className="fieldsetContainer">
                <fieldset>
                    <legend>Organization Information</legend>
                    <div className="fieldsContainer">
                        <label htmlFor="organization">Name</label>
                        <input
                            id="organization"
                            type="text"
                            name="organization"
                            onChange={handleChange}
                            value={appState.organization}
                            placeholder="Animal Shelter"
                            size="30"
                            ref={organizationInput}
                            required
                        />

                        <label htmlFor="address">Address</label>
                        <input
                            id="address"
                            type="text"
                            name="address"
                            onChange={handleChange}
                            value={appState.address}
                            placeholder="123 Main Street"
                            required
                        />

                        <label htmlFor="city">City</label>
                        <input
                            id="city"
                            type="text"
                            name="city"
                            onChange={handleChange}
                            value={appState.city}
                            disabled
                        />

                        <label htmlFor="state">State</label>
                        <input
                            id="state"
                            type="text"
                            name="state"
                            onChange={handleChange}
                            value={appState.state}
                            disabled
                        />

                        <label htmlFor="phone">Phone</label>
                        <input
                            id="phone"
                            type="tel"
                            name="phone"
                            pattern="[\d]{3}-?[\d]{3}-?[\d]{4}"
                            onChange={handleChange}
                            value={appState.phone}
                            placeholder="416-123-456"
                            title="Format: 416-123-456 or 416123456"
                            required
                        />

                        <label htmlFor="website">Website</label>
                        <input
                            id="website"
                            type="url"
                            name="website"
                            onChange={handleChange}
                            value={appState.website}
                            placeholder="https://organization.com"
                        />

                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={appState.email}
                            size="30"
                            placeholder="johndoe@domain.com"
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <legend>About the Role</legend>
                    <div className="fieldsContainer">
                        <label htmlFor="category">Category</label>
                        <Category
                            name="category"
                            id="category"
                            app={app}
                            onChange={handleChange}
                            value={appState.category}
                            required="required"
                            defaultText="Select Category"
                        />

                        <label htmlFor="role">Role</label>
                        <input
                            id="role"
                            type="text"
                            name="role"
                            onChange={handleChange}
                            value={appState.role}
                            placeholder="Dog Walker"
                            required
                        />

                        <label htmlFor="roleDescription">Description</label>
                        <textarea
                            className="textArea"
                            maxLength="500"
                            id="roleDescription"
                            type="text"
                            name="role_description"
                            onChange={handleChange}
                            value={appState.role_description}
                            placeholder="What is the role about? How to apply? (Maximum of 500 characters)"
                            required
                        />

                        <div className="startEndDateContainer">
                            <div className="dateContainer">
                                <label htmlFor="startDate">Start Date</label>
                                <DatePicker
                                    selected={appState.start_date}
                                    onChange={(e) => app.setState({ start_date: e })}
                                    minDate={new Date()}
                                />
                            </div>

                            <div className="dateContainer">
                                <label htmlFor="endDate">End Date</label>
                                <DatePicker
                                    selected={appState.end_date}
                                    onChange={(e) => app.setState({ end_date: e })}
                                    minDate={appState.start_date}
                                />
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
            <button className="formSubmit">SUBMIT</button>
        </form>
    )
}

Management.propTypes = {
    props: PropTypes.object
};

export default Management;