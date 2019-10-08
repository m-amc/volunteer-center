import React, { Component } from 'react';
import firebase from '../firebase';
import stateData from './state';
import Header from './Header';
import Opportunities from './Opportunities';
import Management from './Management';
import Footer from './Footer';
import '.././partials/App.scss';
import '../fontawesome';
import FilterCategory from './FilterCategory';
import moment from 'moment';
import Metas from './Metas';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

/*
NOTE: The firebase volunteer-center database will (in the future) have a couple more objects in it.  For example, users and company.  For this project, I will only have 1 object but the structure is prepared to have multiple objects hence why the use of "child". I am planning to build more on top of the existing functionality after the bootcamp.
*/

class App extends Component {
  constructor() {
    super();

    // Set state to the state.js stateData variable.
    this.state = stateData;

    this.today = new Date();

    this.dbRef = firebase.database().ref();
  }

  componentDidMount() {
    const dbRef = this.dbRef;

    dbRef.on('value', (response) => {
      // response returns the whole database object so just grab the child (posting)
      this.postingData = response.val().posting;

      // Filter the postings where end dates are greater or equal to today's date
      const filteredPostings = this.filterPostings(this.postingData);

      // Because we can't directly change the state, we have to create a new array.
      const newPostingData = [];

      // Loop through the postingData variable that holds the posting data object and push the data to the new array.  This will render the data to the page via render().  Any new data added will also re-render due to dbRef.on('value') always listening to changes.
      // eslint-disable-next-line
      for (let index in filteredPostings) {
        newPostingData.push(this.postingData[index])
      }

      // Here we re-assign the postings state to the newPostingData and we need to clear the role state.
      this.setState({
        postings: newPostingData,
      })
    })
  }

  handleCategoryChange = (event) => {
    const filterPostingData = this.filterPostings(this.postingData, event.target.value);
    const newPostingData = [];

    // eslint-disable-next-line
    for (let index in filterPostingData) {
      newPostingData.push(filterPostingData[index])
    }

    const isEmpty = newPostingData.length > 0 ? false : true

    this.setState({
      filteredCategory: event.target.value,
      isNoResult: isEmpty,
      postings: newPostingData
    });
  }

  // Function to filter the postings. There's no filter() for objects so we need to filter it through for in loop
  filterPostings = (postingObject, selectedCategory) => {
    // Create an empty filteredPostings object.  We will push filtered postings here
    const filteredPostings = {};

    // eslint-disable-next-line
    for (let key in postingObject) {
      // use momentjs to correctly parse the date string
      const momentEndDate = moment(postingObject[key].end_date);
      const momentToday = moment(this.today.toLocaleDateString());

      const category = postingObject[key].category;

      // undefined is the value of the category filter on initial load. It's empty string when All Category is selected.
      if ((selectedCategory === undefined) || (selectedCategory === '')) {
        // Push to the filteredPostings object those postings that are ending today and in the future
        if (momentEndDate >= momentToday) {
          filteredPostings[key] = postingObject[key];
        }
      } else {
        if (momentEndDate >= momentToday && category === selectedCategory) {
          filteredPostings[key] = postingObject[key];
        }
      }
    }

    return filteredPostings;
  }

  render() {
    return (
      <div className="app">
        <Metas />

        <a href="#main" className="skip-link">Skip to main content.</a>

        <Router>
          <Header app={this} />

          <main id="main" className="wrapper">
            <section>
              <Switch>
                <Route exact path="/" render={() =>
                  <React.Fragment>
                    <FilterCategory app={this} />
                    <Opportunities postingData={this.state.postings} />
                  </React.Fragment>
                } />

                <PrivateRoute path="/organization"
                  render={(routeProps) =>
                    <Management {...routeProps} app={this} />
                  }/>
                </Switch>
            </section>

            <div className={this.state.isNoResult ? 'showNoResult' : 'hideNoResult'}>
              <p>No opportunities for this category at this time</p>
            </div>
          </main>
        </Router>

        <Footer />
      </div>
    );
  }
}

export default App;
