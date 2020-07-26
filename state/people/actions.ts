import {
  LOADING_PEOPLE,
  RECEIVE_PEOPLE,
  RECEIVE_PEOPLE_ERROR,
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
