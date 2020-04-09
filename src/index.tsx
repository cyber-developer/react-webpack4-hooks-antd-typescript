import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  } from "react-router-dom";
import { renderRoutes } from 'react-router-config';

import {Provider} from 'react-redux';
import {createStore} from 'redux'
import rootReducer from './reducers'

import routes from './routes';
import 'antd/dist/antd.less';
import './assets/styles/main.less';

const store = createStore(
  rootReducer
)

ReactDOM.render(<Provider store={store}><BrowserRouter>
  {renderRoutes(routes)}
</BrowserRouter></Provider>, document.querySelector('#root'));

if (module && module.hot) {
  module.hot.accept();

  module.hot.addStatusHandler(status => {
    if (status === 'prepare') console.clear();
  });
}
