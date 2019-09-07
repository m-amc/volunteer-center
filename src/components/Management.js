import React from 'react';
import Category from './Category';
import '../partials/_main.scss';

const Management = (props) => {
    const dbRef = props.app.dbRef.child('posting'),
        appState = props.app.state,
        app = props.app;


    const handleSubmit = (event) => {
        event.preventDefault();

        // The dbRef push property will be able to return the object key but it needs to be assigned to variable first before setting the state
        const newPostRef = dbRef.push();
        newPostRef.set({
            id: newPostRef.key,
            organization: appState.organization,
            address: appState.address,
            state: 'ON',
            city: 'Toronto',
            phone: appState.phone,
            website: appState.website,
            email: appState.email,
            category: appState.category,
            role: appState.role,
            role_description: appState.role_description,
            start_date: appState.start_date,
            created: appState.created,
            end_date: appState.end_date
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
            start_date: new Date().toLocaleDateString(),
            end_date: new Date().toLocaleDateString(),
            created: Date.now()
        })
    }

    const handleChange = (event) => {
        app.setState({
            [event.target.name]: event.target.value
        })
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <fieldset>
                <legend>Company Information</legend>
                <label htmlFor="organization">Organization Name</label>
                <input
                    id="organization"
                    type="text"
                    name="organization"
                    onChange={handleChange}
                    value={appState.organization}
                    required
                />

                <label htmlFor="address">Address</label>
                <input
                    id="address"
                    type="text"
                    name="address"
                    onChange={handleChange}
                    value={appState.address}
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
                    type="text"
                    name="phone"
                    onChange={handleChange}
                    value={appState.phone}
                    required
                />

                <label htmlFor="website">Website</label>
                <input
                    id="website"
                    type="url"
                    name="website"
                    onChange={handleChange}
                    value={appState.website}
                />

                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={appState.email}
                />
            </fieldset>

            <fieldset>
                <legend>About the Role</legend>
                <label htmlFor="Category">Category</label>
                <Category
                    name="category"
                    id="category"
                    name="category"
                    app={app}
                    onChange={handleChange}
                    value={appState.category}
                    required="required"
                />

                <label htmlFor="role">Role</label>
                <input
                    id="role"
                    type="text"
                    name="role"
                    onChange={handleChange}
                    value={appState.role}
                    required
                />

                <label htmlFor="roleDescription">Description</label>
                <textarea
                    rows="10"
                    cols="80"
                    maxLength="500"
                    id="roleDescription"
                    type="text"
                    name="role_description"
                    onChange={handleChange}
                    value={appState.role_description}
                    required
                />

                <label htmlFor="startDate">Start Date</label>
                <input
                    id="startDate"
                    type="date"
                    name="start_date"
                    onChange={handleChange}
                    value={appState.start_date}
                    required
                />


                <label htmlFor="endDate">End Date</label>
                <input
                    id="endDate"
                    type="date"
                    name="end_date"
                    onChange={handleChange}
                    value={appState.end_date}
                    required
                />
            </fieldset>

            <button className="formSubmit">SUBMIT</button>
        </form>
    )
}

export default Management;