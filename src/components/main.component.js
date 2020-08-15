import React, { useState, useEffect } from "react";
import { Header } from "./header.component";
import { Opportunities } from "./opportunities.component";
import { Management } from "./management.component";
import { Footer } from "./footer.component";
import { FilterCategory } from "./filter-category.component";
import { NavBar } from "./nav-bar.component";
import { Metas } from "./metas.component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./private-route.component";
import history from "../utils/history";
import ".././partials/App.scss";
import "../utils/fontawesome";

export const Main = ({
  fetchPostings,
  filterPostings,
  activePostings,
  ...props
}) => {

  const [hasNoResult, setHasNoResult] = useState(false);
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchPostings()
  }, [fetchPostings])

  useEffect(() => {
    setHasNoResult(activePostings.length === 0)
  }, [activePostings])

  const handleCategoryChange = event => {
    setCategory(event.target.value)

    filterPostings(event.target.value)
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
