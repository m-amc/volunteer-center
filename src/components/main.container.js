import { Main } from './main.component';
import { selectActivePostings } from '../store/selectors/postingSelectors';

// connect Main component with the redux store so we can read values from the Redux store and re-read the values when the store updates
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  requestPostings,
  filterPostings,
  addPosting,
} from '../store/actions/postingActions'

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

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)
