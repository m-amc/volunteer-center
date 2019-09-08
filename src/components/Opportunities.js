import React from 'react';
import PropTypes from 'prop-types';

const Opportunities = (props) => {
    const postingData = props.postingData;

    return (
        <ul>
            {
                postingData.map((post, index) => {
                    return (
                        <li key={index}>
                            <div>
                                <h2>{post.role}</h2>
                                <p className="postingDateRange">From {post.start_date} to {post.end_date}</p>
                                <p className="postingRoleDescription">{post.role_description}</p>
                                <p className="postedDate">Posted {new Date(post.created).toLocaleDateString()}</p>
                            </div>

                            <div>
                                <h3>{post.organization}</h3>
                                <p className="postingAddress">{post.address} <span>{post.city},  {post.state}</span></p>
                                <p>{post.phone}</p>
                                <p>{post.website}</p>
                                <p>{post.email_address}</p>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

Opportunities.propTypes = {
    props: PropTypes.object
}

export default Opportunities;