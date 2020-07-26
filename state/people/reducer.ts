import {
  LOADING_PEOPLE,
  RECEIVE_PEOPLE,
  RECEIVE_PEOPLE_ERROR,
  CLEAR_SEARCH_RESULTS,
  PeopleActionTypes,
} from "../types";
import { Person } from "../../types/Person";

const initialState = {
  list: [] as Person[],
  peopleLoading: false,
  peopleError: "",
  next: "http://swapi.dev/api/people/?page=1",
};

export default (state = initialState, action: PeopleActionTypes) => {
  switch (action.type) {
    case RECEIVE_PEOPLE:
      return {
        ...state,
        list: [...state.list, ...action.payload.results],
        next: action.payload.next,
        peopleLoading: false,
      };
    case LOADING_PEOPLE:
      return {
        ...state,
        peopleLoading: true,
      };
    case RECEIVE_PEOPLE_ERROR:
      return {
        ...state,
        peopleError: action.payload,
        peopleLoading: false,
      };
    case CLEAR_SEARCH_RESULTS:
      return {
        ...state,
        list: [],
        peopleLoading: false,
        peopleError: "",
        next: "",
      };
    default:
      return state;
  }
};
