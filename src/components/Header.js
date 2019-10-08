import React from 'react';
import '../partials/_header.scss';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

const Header = ({app}) => {
    const handleSubmit = () => {
        /* 
        isManagement state is false if it's in the Listings view. onClick will set isManagement to true and the button will change text to View Listing.  
        isManagement state is true if it's in the Management view. onClick will set isManagement to false and the button will change text to Post Opportunities
        */

        const status = !app.state.isManagement;

        app.setState({
            isManagement: status
        })
    }

    return(
        <header className={app.state.isManagement ? 'managementHeader' : ''}>
            <NavBar />
            
            <h1>Volunteer Center</h1>
            <Link 
                to={app.state.isManagement ? "/" : "/organization"} className="postingLink" onClick={handleSubmit}>{app.state.isManagement ? "View Opportunities" : "Post Opportunities"}
            </Link>

            <p className="photoCredit">Photo by Anna Earl on Unsplash</p>
        </header>
    )
}

export default Header;