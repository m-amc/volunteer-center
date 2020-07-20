import React, { useState } from "react";
// import firebase from "../utils/firebase";
// import { stateData } from "./state";
// import moment from "moment";
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

// connect Main component with the redux store so we can read values from the Reudx store and re-read the values when the store updates
import { connect } from 'react-redux'; 

/*
NOTE: The firebase volunteer-center database will (in the future) have a couple more objects in it.  For example, users and company.  For this project, I will only have 1 object but the structure is prepared to have multiple objects hence why the use of "child". I am planning to build more on top of the existing functionality after the bootcamp.
*/

// const usePostingsViewFilter = ({ setAllPostings, setPostings}) => {
//   /** 
//    * Filter postings 
//    * @param {Object} postings - the postings to be filtered
//    * @param {string} selectedCategory - the selected postings category 
//    */
//   const filterPostings = (postings, selectedCategory) => {
//     const today = new Date();
//     const momentToday = moment(today.toLocaleDateString());

//     // return Object.values(postings).filter(data => data.end_data >= momentToday)
//     return Object.values(postings).filter(data => {
//       // undefined is the value of the category filter on initial load. It's empty string when All Category is selected.
//       if (selectedCategory === undefined || selectedCategory === "") {
//         return moment(data.end_date) >= momentToday
//       } else {
//         return moment(data.end_date) >= momentToday && data.category === selectedCategory
//       }
//     })
//   };

//   const getFilteredPostingData = postings => {
//     const filteredPostings = filterPostings(postings);

//     return Object.values(filteredPostings)
//       .reduce((arr, val) =>
//         [...arr, val]
//         , [])
//   }

//   return {
//     getFilteredPostingData,
//     filterPostings,
//   }
// }

const Main = ({ ...props }) => {

  const [hasNoResult, setHasNoResult] = useState(false);

  /*
  const state = stateData;
  const dbRef = firebase.database().ref();

  const [postings, setPostings] = useState([]);
  const [allPostings, setAllPostings] = useState({});
  

  const { getFilteredPostingData, filterPostings } = usePostingsViewFilter(postings);

  const handleCategoryChange = event => {
    const data = filterPostings(
      allPostings,
      event.target.value
    );

    const filteredPostingData = getFilteredPostingData(data)
    const isEmpty = data.length > 0 ? false : true;

    setPostings(filteredPostingData);
    setHasNoResult(isEmpty);
  };
  
  useEffect(() => {
    dbRef.on("value", response => { 
      const responseData = response.val().posting;

      // Only show current postings (end dates greater or equal to today's date)
      const filteredPostingData = getFilteredPostingData(responseData)
      
      setAllPostings(responseData);
      setPostings(filteredPostingData)
    })
  },
    // eslint-disable-next-line
    []
  )


  const props = {
    postingDBRef: dbRef.child("posting"),
    allPostings,
    postings,
    state,
    handleCategoryChange,
  }
  */

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
                    <FilterCategory {...props} />
                    <Opportunities {...props} />
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

          <div
            className={
              hasNoResult ? "showNoResult" : "hideNoResult"
            }
          >
            <p>No opportunities for this category at this time</p>
          </div>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

// This function takes in the state of the store (that we already have access to) and will return an object which represents which properties are attached to the props of this component so we can access the props in this component
const mapStateToProps = (state) => {
  return {
    postedOpportunities: state.posting.posting
  }
}

export default connect(mapStateToProps)(Main)