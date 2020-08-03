import {
  REQUEST_POSTINGS,
  REQUEST_POSTINGS_SUCCESS,
  REQUEST_POSTINGS_ERROR,
  FILTER_POSTINGS,
  ADD_POSTING,
  ADD_POSTING_SUCCESS
} from './actionTypes';

export const requestPostings = payload => {
  return {
    type: REQUEST_POSTINGS,
    payload
  }
}

export const requestPostingsSuccess = (payload, filter) => {
  return {
    type: REQUEST_POSTINGS_SUCCESS,
    payload,
    filter
  }
}

export const requestPostingsError = () => {
  return {
    type: REQUEST_POSTINGS_ERROR
  }
}

export const filterPostings = payload => {
  return {
    type: FILTER_POSTINGS,
    payload
  }
}

export const addPosting = payload => {
  return {
    type: ADD_POSTING,
    payload
  }
}

export const addPostingSuccess = payload => {
  return {
    type: ADD_POSTING_SUCCESS,
    payload
  }
}