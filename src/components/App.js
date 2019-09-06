import React, { Component } from 'react';
import firebase from '../firebase';
import '../App.css';
import Header from './Header';
import Opportunities from './Opportunities';
import Management from './Management';
import stateData from './state';

// !!!!! NOTE: REMEMBER TO REMOVE FIREBASE.JS IN GITIGNORE !!!!!!

/*
NOTE: The firebase volunteer-center database will (in the future) have a couple of objects in it.  For example, company.  For this project, I will only have 1 object but the structure is prepared to have multiple objects hence why the use of "child". I am planning to build more on top of the existing functionality after the bootcamp.
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
    console.log("COMPONENTDIDMOUNT");
    const dbRef = this.dbRef;

    dbRef.on('value', (response) => {
      // response returns the whole database object so just grab the child (posting)
      const postingData = response.val().posting;

      // Filter the postings where end dates are greater or equal to today's date
      const filteredPostings = this.filterPostings(postingData);

      // Because we can't directly change the state, we have to create a new array.
      const newPostingData = [];

      // Loop through the postingData variable that holds the posting data object and push the data to the new array.  This will render the data to the page via render().  Any new data added will also re-render due to dbRef.on('value') always listening to changes.
      for (let index in filteredPostings) {
        newPostingData.push(postingData[index])
      }

      // Here we re-assign the postings state to the newPostingData and we need to clear the role state.
      this.setState({
        postings: newPostingData,
      })
    })
  }

  // Function to filter the postings. Note: There's no filter() for objects.
  filterPostings = (postingObject) => {
    // Create an empty filteredPostings object.  We will push filtered postings here
    const filteredPostings = {};

    for (let key in postingObject) {
      // Convert the stored postings end_date to date first
      const endDate = new Date(postingObject[key].end_date);

      // Push to the filteredPostings object those postings that are ending today and in the future
      if (endDate >= this.today) {
        filteredPostings[key] = postingObject[key];
      }
    }

    return filteredPostings;
  }

  render() {
    console.log("RENDER HERE");
    return (
      <div className="app">
        <Header app={this} />

        {
          // Conditional Rendering
          this.state.isManagement ? <Management app={this} /> : <Opportunities postingData={this.state.postings} />
        }
      </div>
    );
  }
}

export default App;
