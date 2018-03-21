import { call, put, takeLatest } from 'redux-saga/effects';
import { getG } from './apis';
import * as constants from '../constants';
import * as actions from '../actions';

export function * fetchData(action: actions.RequestAction) {
  try {
    const data = yield call(getG, action);
    yield put({type: constants.INCREMENT_ENTHUSIASM, apps: data});
  } catch (error) {
    // this is an error with the request itself
    // any other errors will just come back in the data response
    console.log(error);
    yield put({type: constants.REQUEST_FAILURE, message: error.message});
  }
}

function* mySaga() {
  yield takeLatest(constants.DECREMENT_ENTHUSIASM, fetchData);
}

export default mySaga;
