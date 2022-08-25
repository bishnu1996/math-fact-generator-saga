import { call, put, takeLatest } from "redux-saga/effects";

import { MathApi } from "../MathApi";

import Action from "./action";

//worker saga
function* fetchMathFact(action) {
  try {
    const fact = yield call(MathApi);
    yield put({
      type: Action.FETCH_FACT_SUCCESS,
      payload: { fact: fact, successMessage: "Fact fetch successfully" },
    });
  } catch (e) {
    yield put({
      type: Action.FETCH_FACT_FAILED,
      payload: { errorMessage: e.message },
    });
  }
}

//watcher saga
function* mySaga() {
  yield takeLatest(Action.FETCH_FACT_REQUEST, fetchMathFact);
}
export default mySaga;
