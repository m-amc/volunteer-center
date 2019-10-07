import React from "react";
import { useAuth0 } from "../react-auth0-wrapper";
import '../partials/_header.scss';

const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div className="loginOut wrapper">
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
        </div>
    );
};

export default NavBar;