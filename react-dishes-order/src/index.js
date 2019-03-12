import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BasicRoute from './routers/BasicRoute';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BasicRoute />, document.getElementById('root'));

serviceWorker.register();
