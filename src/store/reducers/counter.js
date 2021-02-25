import * as actionTypes from '../actions';

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_ASYNC:
        const newState = Object.assign({},state);
        newState.counter = state.counter + 1;
        return newState;
    case actionTypes.DECREMENT_ASYNC:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.ADD_ASYNC:
      return {
        ...state,
        counter: state.counter + 5,
      };
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - 5,
      };
  }
  return state;
};

export default reducer;
