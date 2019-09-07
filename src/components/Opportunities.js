import React, { Component } from 'react';

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
                                <p>From {post.start_date} to {post.end_date}</p>
                                <p>{post.role_description}</p>
                                <p className="posted">Posted {new Date(post.created).toLocaleDateString()}</p>
                            </div>

                            <div>
                                <h3>{post.organization}</h3>
                                <p>{post.address}, {post.city} {post.state}</p>
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


export default Opportunities;