import React from 'react';
import '../partials/_header.scss';
import NavBar from '../components/NavBar';

const Header = ({app}) => {
    const handleSubmit = (event) => {
        event.preventDefault();

        /* 
        isManagement state is false if it's in the Listings view. onClick will set isManagement to true and the button will change text to View Listing.  
        isManagement state is true if it's in the Management view. onClick will set isManagement to false and the button will change text to Post Opportunities
        */

        let newState = {};

        if (app.state.isManagement) {
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
        app.setState(newState);
    }

    return(
        <header className={app.state.isManagement ? 'managementHeader' : ''}>
            <NavBar />
            <div>
                <h1>Volunteer Center</h1>
                <input type="submit"
                    value={app.state.headerButtonText}
                    onClick={handleSubmit}
                />
            </div>
            <p className="photoCredit">Photo by Anna Earl on Unsplash</p>
        </header>
    )
}

export default Header;