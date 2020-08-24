import { createSelector } from 'reselect'
import moment from "moment";

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
  const today = moment().endOf('day').toDate()

  return Object.values(postings)
    .filter(data =>
      category ? moment(data.end_date).endOf('day').toDate() >= today && data.category === category : moment(data.end_date).endOf('day').toDate() >= today)

}

export const selectCurrentFilter = (state) => state.postings.currentFilter

export const selectActivePostings = createSelector(
  selectAllPostings,
  selectCurrentFilter,
  (postings, currentFilter) => {
    return getActivePostings(postings, currentFilter)
  }
)