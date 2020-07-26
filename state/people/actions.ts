import {
  LOADING_PEOPLE,
  RECEIVE_PEOPLE,
  RECEIVE_PEOPLE_ERROR,
  CLEAR_SEARCH_RESULTS,
  PeopleActionTypes,
} from "../types";
import { Dispatch } from "redux";

export const getPeople = (endpoint: string) => async (
  dispatch: Dispatch<PeopleActionTypes>
) => {
  try {
    dispatch({
      type: LOADING_PEOPLE,
    });

    const res = await fetch(endpoint);
    const data = await res.json();

    dispatch({
      type: RECEIVE_PEOPLE,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RECEIVE_PEOPLE_ERROR,
      payload: error.response.data,
    });
  }
};

export const clearSearchResults = (): PeopleActionTypes=> ({
  type: CLEAR_SEARCH_RESULTS,
});