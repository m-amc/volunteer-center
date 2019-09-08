import React from 'react';
import '../partials/_footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return(
        <footer> 
            <div className="wrapper">
                <p>&copy; 2019 Ana Morales</p>
                <ul>
                    <li>
                        <a href="https://twitter.com/class_AnaTheDev" aria-label="Go to twitter">
                            <FontAwesomeIcon icon={['fab', 'twitter-square']} aria-hidden/>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/in/anamariemorales/" aria-label="Go to linkedin">
                            <FontAwesomeIcon icon={['fab', 'linkedin']} aria-hidden/>
                        </a>
                    </li>

                    <li>
                        <a href="https://medium.com/@anamorales.dev" aria-label="Go to Medium">
                            <FontAwesomeIcon icon={['fab', 'medium']} aria-hidden/>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;