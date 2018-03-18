import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { createStore } from 'redux';
import { enthusiasm } from './reducers';
import { StoreState } from './types';
import { Provider } from 'react-redux';

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
