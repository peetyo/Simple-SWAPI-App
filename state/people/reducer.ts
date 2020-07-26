const initialState = {
  list: [] as any[],
  peopleLoading: false,
  peopleError: "",
  next: "http://swapi.dev/api/people/?page=1",
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
