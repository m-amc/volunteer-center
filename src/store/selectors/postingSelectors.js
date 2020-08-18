import { createSelector } from 'reselect'
import moment from "moment";

const momentDateFormat = "MM/DD/YYYY"

const getAllPostings = (state) => {
  return state.postings.postings
}

export const selectAllPostings = createSelector(
  getAllPostings,
  postings => {
    return postings
  }
)

export const getActivePostings = (postings, category) => {
  const today = new Date();
  const momentToday = moment(today.toLocaleDateString(), momentDateFormat);

  return Object.values(postings)
    .filter(data =>
      category ? moment(data.end_date, momentDateFormat) >= momentToday && data.category === category : moment(data.end_date, momentDateFormat) >= momentToday)
}

export const selectCurrentFilter = (state) => state.postings.currentFilter

export const selectActivePostings = createSelector(
  selectAllPostings,
  selectCurrentFilter,
  (postings, currentFilter) => {
    return getActivePostings(postings, currentFilter)
  }
)