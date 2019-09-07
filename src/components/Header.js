import React from 'react';
import '../partials/_header.scss';

const Header = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();

        /* 
        isManagement state is false if it's in the Listings view. onClick will set isManagement to true and the button will change text to View Listing.  
        isManagement state is true if it's in the Management view. onClick will set isManagement to false and the button will change text to Post Opportunities
        */

        let newState = {};

        if (props.app.state.isManagement) {
            newState = {
                isManagement: false,
                headerButtonText: 'Post Opportunities'
            }
        } else {
            newState = {
                isManagement: true,
                headerButtonText: 'View Postings'
            }
        }

        // Set the app state with newState
        props.app.setState(newState);
    }

    return(
        <header className="wrapper">
            <h1>Volunteer Center</h1>
            <button onClick={handleSubmit}>{props.app.state.headerButtonText}</button>
        </header>
    )
}

export default Header;