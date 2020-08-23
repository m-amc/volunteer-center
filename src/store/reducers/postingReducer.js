import {
  REQUEST_POSTINGS_START,
  REQUEST_POSTINGS_SUCCESS,
  REQUEST_POSTINGS_ERROR,
  FILTER_POSTINGS,
} from '../actions/actionTypes';
import { getActivePostings } from '../selectors/postingSelectors'

const initState = {
  allPostings: [],
  postings: [],
  isError: false,
  currentFilter: ""
}

const postingReducer = (state = initState, action) => {  
  const { payload, filter } = action;

  switch (action.type) {
    case REQUEST_POSTINGS_START:
      return {
        ...state,
      }
    case REQUEST_POSTINGS_SUCCESS:
      const responseData = payload;
      
      /**
       * postings - this is what gets filtered and rendered
       * allPostings - this will hold the raw data and will be the arg when filtering. 
       * We can't use postings prop because once it gets filtered, the next filter will be based on the already filtered data which may not contain the category we need
       */
      return {
        ...state,
        postings: responseData,
        allPostings: responseData,
      }      

    case REQUEST_POSTINGS_ERROR:
      return {
        ...state,
        posting: [],
        allPostings: [],
        isError: true,
      }
    
    case FILTER_POSTINGS:
      return {
        ...state, 
        postings: getActivePostings(state.allPostings, filter),
        currentFilter: filter
      }
      
    default:
      // Return the state if there's no matching action
      return state
  }
}

export default postingReducer