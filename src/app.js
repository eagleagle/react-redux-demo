import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { ConnectedRouter } from 'react-router-redux';

import store, { history } from './redux/store/';
//引入路由
import Routes from './routes';
import './static/style/global.less';
const App = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Routes />
            </ConnectedRouter>
        </Provider>
    );
};

ReactDOM.render(<App />, document.getElementById('app')); 

if (module.hot) { //启用热更新
    module.hot.accept();
}