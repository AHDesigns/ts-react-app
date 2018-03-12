// #<{(|*
//  *  * Gets the repositories of the user from Github
//  *   |)}>#
//
// import { call, put, select, takeLatest } from 'redux-saga/effects';
// import { LOAD_REPOS } from 'containers/App/constants';
// import { reposLoaded, repoLoadingError } from 'containers/App/actions';
//
// import 'whatwg-fetch';
// const request = (p) => fetch(p)
//   .then(function(response) {
//     return response.text()
//   }).then(function(body) {
//     document.body.innerHTML = body
//   })
// // import request from 'utils/request';
// // import { makeSelectUsername } from 'containers/HomePage/selectors';
//
// #<{(|*
//  *  * Github repos request/response handler
//  *   |)}>#
// export function* getRepos() {
//   // Select username from store
//   // const username = yield select(makeSelectUsername());
//   const username = 'AHDesigns';
//   const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
//
//   try {
//     // Call our request helper (see 'utils/request')
//     const repos = yield call(request, requestURL);
//     console.log(repos);
//     yield put(reposLoaded(repos, username));
//   } catch (err) {
//     yield put(repoLoadingError(err));
//   }
// }
//
// #<{(|*
//  * Root saga manages watcher lifecycle
//  |)}>#
// export default function* githubData() {
//   // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
//   // By using `takeLatest` only the result of the latest API call is applied.
//   // It returns task descriptor (just like fork) so we can continue execution
//   // It will be cancelled automatically on component unmount
//   yield takeLatest(LOAD_REPOS, getRepos);
// }
//
//
//

import { takeLatest, call, put, select } from 'redux-saga/effects';

// Root saga
export default function* rootSaga() {
  // if necessary, start multiple sagas at once with `all`
  yield [
    takeLatest(LOAD_REPOS, getRepos),
    takeLatest(LOAD_USERS, getUsers),
  ];
}
