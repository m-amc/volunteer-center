import {
  REQUEST_POSTINGS_START,
  REQUEST_POSTINGS_SUCCESS,
  REQUEST_POSTINGS_ERROR,
  FILTER_POSTINGS,
  ADD_POSTING_START,
  FETCH_POSTINGS,
} from './actionTypes';

export const fetchPostings = () => {
  return {
    type: FETCH_POSTINGS
  }
}

export const requestPostingsStart = () => {
  return {
    type: REQUEST_POSTINGS_START,
  }
}

export const requestPostingsSuccess = (payload, filter) => {
  return {
    type: REQUEST_POSTINGS_SUCCESS,
    payload,
    filter
  }
}

export const requestPostingsError = payload => {
  return {
    type: REQUEST_POSTINGS_ERROR,
    payload
  }
}

export const filterPostings = filter => {
  return {
    type: FILTER_POSTINGS,
    filter
  }
}

export const addPostingStart = (payload) => {
  return {
    type: ADD_POSTING_START,
    payload
  }
}