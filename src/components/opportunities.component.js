import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

export const Opportunities = ({ activePostings: postedOpportunities }) => {
  return (
    <ul>
      {postedOpportunities.map((post, index) => {
        return (
          <li key={index}>
            <div>
              <h2>{post.role}</h2>
              <p className="postingDateRange">
                From {moment(post.start_date).format("l")} to {moment(post.end_date).format('l')}
              </p>
              <p className="postingRoleDescription">{post.role_description}</p>
              <p className="postedDate">
                Posted {moment(post.created).format("ll")}
              </p>
            </div>

            <div>
              <h3>{post.organization}</h3>
              <p className="postingAddress">
                {post.address}{" "}
                <span>
                  {post.city}, {post.state}
                </span>
              </p>
              <p>{post.phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")}</p>
              <a href={post.website}>{post.website}</a>
              <p>{post.email}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

Opportunities.propTypes = {
  props: PropTypes.object,
};