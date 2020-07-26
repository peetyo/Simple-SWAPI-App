import {
  LOADING_PEOPLE,
  RECEIVE_PEOPLE,
  RECEIVE_PEOPLE_ERROR,
  PeopleActionTypes,
} from "../types";

const initialState = {
  list: [] as any[],
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
    default:
      return state;
  }
};
