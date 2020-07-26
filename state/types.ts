import {FetchedData} from '../types/FetchedData'

export const LOADING_PEOPLE = "LOADING_PEOPLE";
export const RECEIVE_PEOPLE = "RECEIVE_PEOPLE";
export const RECEIVE_PEOPLE_ERROR = "RECEIVE_ERROR";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";

interface SetLoading {
  type: typeof LOADING_PEOPLE;
}

interface ReceivePeople {
  type: typeof RECEIVE_PEOPLE;
  payload: FetchedData;
}

interface ReceivePeopleError {
  type: typeof RECEIVE_PEOPLE_ERROR;
  payload: string;
}

interface ClearSearchResults {
  type: typeof CLEAR_SEARCH_RESULTS;
}

export type PeopleActionTypes =
  | SetLoading
  | ReceivePeople
  | ReceivePeopleError
  | ClearSearchResults;
