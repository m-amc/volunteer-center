import React, { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-wrapper";
import { Link } from "react-router-dom";
import logo from "../assets/vc-logo.png";
import "../partials/_navBar.scss";

export const NavBar = () => {
  // check if user is authenticated
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  // useState hook will be updated when the user clicks Post Job or View Job
  const [isManagement, setManagementLinkState] = useState(false);

  // Whenever the DOM is updated and the url path is in the organization component, it will change the isManagement state
  useEffect(() => {
    console.log(window.location.pathname);
    if (window.location.pathname === "/volunteer-center/organization") {
      setManagementLinkState(true);
    } else {
      setManagementLinkState(false);
    }
  }, []);

  return (
    <div className="navContainer">
      <div className="logoMainNav wrapper">
        <div className="logoContainer">
          <img src={logo} alt="" />
        </div>
        <nav className="mainNav">
          <ul>
            {isManagement ? (
              <li>
                <Link
                  to="/"
                  onClick={() => setManagementLinkState(false)}
                  className="posting"
                >
                  View Jobs
								</Link>
              </li>
            ) : (
                <li>
                  <Link
                    to="/organization"
                    onClick={() => setManagementLinkState(true)}
                    className="posting"
                  >
                    Post Job
								</Link>
                </li>
              )}

            <li>
              {!isAuthenticated && (
                <button onClick={() => loginWithRedirect({})}>Sign In</button>
              )}

              {isAuthenticated && (
                <button onClick={() => logout()}>Sign out</button>
              )}
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
