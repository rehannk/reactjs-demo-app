import * as actionTypes from "../actions";

const initialState = {
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS:
      return {
        ...state,
        users: action.data,
      };
  }
  return state;
};
export default reducer;
