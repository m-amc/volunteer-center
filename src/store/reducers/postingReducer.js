import {
  REQUEST_POSTINGS,
  REQUEST_POSTINGS_SUCCESS,
  REQUEST_POSTINGS_ERROR,
  FILTER_POSTINGS,
  ADD_POSTING_SUCCESS
} from '../actions/actionTypes';
import { getActivePostings } from '../selectors/postingSelectors'

const initState = {posting: []}

const postingReducer = (state = initState, action) => {
  const { payload, filter } = action;

  // This is where we will manipulate the data. 
  // Return the state if there's no matching action
  switch (action.type) {
    case REQUEST_POSTINGS:
      return {
        posting: [],
        error: false,
        loading: true
      }
    case REQUEST_POSTINGS_SUCCESS:
      const responseData = payload;
      
      // ToDo - FILTER BY DATE AS WELL!
      const filteredData = responseData
        .filter(data => data.category === action.filter)

      /**
       * posting - this is what gets filtered and rendered
       * allPostings - this will hold the raw data and will be the arg when filtering. 
       * We can't use posting prop because once it gets filtered, the next filter will be based on the already filtered data which may not contain the category we need
       */
      return {
        posting: filteredData,
        allPostings: responseData,
        filter,
        error: false,
        loading: false
      }      

    case REQUEST_POSTINGS_ERROR:
      return {
        posting: [],
        error: true,
        loading: false,
      }
    
    case FILTER_POSTINGS:
      // Make sure to destructure state to ensure we still have the allPosting state prop
      return {
        ...state, 
        posting: getActivePostings(state.allPostings, payload.category)
      }
    
    case ADD_POSTING_SUCCESS:
      return {
        ...state,
        posting: payload
      }
      
    default:
      return state
  }
}

export default postingReducer