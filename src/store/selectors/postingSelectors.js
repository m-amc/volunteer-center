import { createSelector } from 'reselect'
import moment from "moment";

const getAllPostings = (state) => {
  return state.posting.posting
}

export const selectAllPostings = createSelector(
  getAllPostings,
  postings => {
    return postings
  }
)

export const getActivePostings = (postings, category) => {
  const today = new Date();
  const momentToday = moment(today.toLocaleDateString());

  return Object.values(postings)
    .filter(data =>
      category ? moment(data.end_date) >= momentToday && data.category === category : moment(data.end_date) >= momentToday)
}

export const selectActivePostings = createSelector(
  selectAllPostings,
  postings => {
    return getActivePostings(postings, null)
  }
)