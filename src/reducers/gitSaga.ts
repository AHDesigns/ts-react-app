import { call, put, takeLatest } from 'redux-saga/effects';
import { getGit } from './apis';

export function * fetchData(action: any) {
  try {
    console.log(action);
    const data = yield call(getGit, action);
    console.log(data);
    yield put({type: 'REQUEST_SUCCSS', apps: data});
  } catch (error) {
    console.log(error);
    yield put({type: 'REQUEST_FAILURE', message: error.message});
  }
}

function* mySaga() {
  yield takeLatest('DECREMENT_ENTHUSIASM', fetchData);
}

export default mySaga;
