import React from "react";
import { useAuth0 } from "../react-auth0-wrapper";
import '../partials/_navBar.scss';
import { Link } from 'react-router-dom';
import logo from '../assets/vc-logo.png';

const NavBar = ({app}) => {
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

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    console.log(app.state.isManagement);
    return (
        <div className="navContainer">
            <div className="logoMainNav wrapper">
                <div className="logoContainer">
                	<img src={logo} alt=""/>
                </div>
                <nav className="mainNav">
                    <ul>
                    {
                        app.state.isManagement ? 
                        <li>
                            <Link to="/" 
                                onClick={handleSubmit}
                                className="posting">
                                    View Jobs
                            </Link>
                        </li>

                        :

                        <li>
                            <Link to="/organization" 
                                onClick={handleSubmit}
                                className="posting">
                                    Post Job
                            </Link>
                        </li>
                    }

                    <li>
                        {!isAuthenticated && (
                            <button
                                onClick={() =>
                                    loginWithRedirect({})
                                }
                            >
                                Sign In
                            </button>
                        )}

                        {isAuthenticated && <button onClick={() => logout()}>Sign out</button>}
                    </li>
                </ul>
                </nav>
            </div>
        </div>

        // <div className="loginOut wrapper">
        // {!isAuthenticated && (
        //     <button 
        //         onClick={() => 
        //             loginWithRedirect({})
        //         }
        //     >
        //         Sign In
        //     </button>
        // )}

        // {isAuthenticated && <button onClick={() => logout()}>Sign out</button>}
        // </div>
    );
};

export default NavBar;