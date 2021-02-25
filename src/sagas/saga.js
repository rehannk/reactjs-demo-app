import * as actionTypes from "../store/actions";
import {
  takeLatest,
  put,
  delay,
  all
} from "redux-saga/effects";

function* incrementAsync() {
  yield delay(100);
  yield put({ type: actionTypes.INCREMENT_ASYNC });
}

function* descrementAsync() {
  yield delay(100);
  yield put({ type: actionTypes.DECREMENT_ASYNC });
}

function* addAsync() {
  yield delay(100);
  yield put({ type: actionTypes.ADD_ASYNC });
}
function* subtractAsync() {
  yield delay(100);
  yield put({ type: actionTypes.SUBTRACT_ASYNC });
}

function* watchIncrement() {
  yield takeLatest(actionTypes.INCREMENT, incrementAsync);
  yield takeLatest(actionTypes.DECREMENT, descrementAsync);
  yield takeLatest(actionTypes.ADD, addAsync);
  yield takeLatest(actionTypes.SUBTRACT, subtractAsync);
  // yield takeEvery(actionTypes.GET_USERS, fetchUser);
}

export function* rootSagas() {
  yield all([watchIncrement()]);
}
