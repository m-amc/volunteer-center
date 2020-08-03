import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { Opportunities } from "./Opportunities";
import { Management } from "./Management";
import { Footer } from "./Footer";
import { FilterCategory } from "./FilterCategory";
import { NavBar } from "./NavBar";
import { Metas } from "./Metas";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import history from "../utils/history";
import ".././partials/App.scss";
import "../utils/fontawesome";
import { selectActivePostings } from '../store/selectors/postingSelectors';

// connect Main component with the redux store so we can read values from the Redux store and re-read the values when the store updates
import { connect } from 'react-redux'; 
import { createStructuredSelector } from 'reselect';

import {
  requestPostings,
  filterPostings,
  addPosting,
} from '../store/actions/postingActions'

const Main = ({
  requestPostings,
  filterPostings,
  activePostings,
  ...props
}) => {
  const [hasNoResult, setHasNoResult] = useState(false);
  const [category, setCategory] = useState(undefined);
  
  useEffect(() => {
    requestPostings({ filter: category })
  }, [requestPostings, category])

  useEffect(() => {
    setHasNoResult(activePostings.length === 0)
  }, [activePostings])

  const handleCategoryChange = event => {
    setCategory(event.target.value)
    filterPostings(
      {
        category: event.target.value
      }
    )
  }

  const filterCategoryProps = {
    category,
    handleCategoryChange
  }

  return (
    <div className="app">
      <Metas />
      <a href="#main" className="skip-link">
        Skip to main content.
      </a>

      <Router basename="/volunteer-center" history={history}>
        <NavBar {...props} />
        <Header />

        <main id="main" className="wrapper">
          <section>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <>
                    <FilterCategory {...filterCategoryProps} />
                    <Opportunities activePostings={activePostings} />

                    <div
                      className={
                        hasNoResult ? "showNoResult" : "hideNoResult"
                      }
                    >
                      {
                        hasNoResult && (
                          <p>No opportunities for this category at this time</p>
                        )
                      }
                    </div>
                  </>
                )}
              />

              <PrivateRoute
                exact
                path="/organization"
                render={(routeProps) => (
                  <Management {...routeProps} {...props} />
                )}
              />
            </Switch>
          </section>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

// This function takes in the state of the store (that we already have access to) and will return an object which represents which properties are attached to the props of this component so we can access the props in this component

const mapStateToProps = createStructuredSelector({
  activePostings: selectActivePostings,
})

const mapDispatchToProps = (dispatch) => {
  return {
    // ES6 Concise method notation that is available when the function is inside an object
    // requestPostings() {
    //   dispatch(requestPostings())
    // },

    // Fat arrow
    filterPostings: payload => dispatch(filterPostings(payload)),
    addPosting: payload => dispatch(addPosting(payload)),
    requestPostings: (payload) => dispatch(requestPostings(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
