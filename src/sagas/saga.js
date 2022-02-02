import { takeEvery, call, put } from "redux-saga/effects";

import FetchApi from "../api/FetchApi";

function* getApiData() {
  try {
    const data = yield call(FetchApi);
    yield put({ type: "RECEIVE_API", data });
    yield console.log(data);
    yield alert("data after" + data[0].body);
  } catch (e) {
    console.log(e);
  }
}

function* watcherSagaForApiRequest() {
  yield takeEvery("REQUEST_API", getApiData);
}

export default watcherSagaForApiRequest;
