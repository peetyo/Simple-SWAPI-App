export const LOADING_PEOPLE = "LOADING_PEOPLE";
export const RECEIVE_PEOPLE = "RECEIVE_PEOPLE";
export const RECEIVE_PEOPLE_ERROR = "RECEIVE_ERROR";

interface SetLoading {
  type: typeof LOADING_PEOPLE;
}

interface ReceivePeople {
  type: typeof RECEIVE_PEOPLE;
  payload: any;
  // TODO create a type
}

interface ReceivePeopleError {
  type: typeof RECEIVE_PEOPLE_ERROR;
  payload: string;
}

export type PeopleActionTypes = SetLoading | ReceivePeople | ReceivePeopleError;
