require('../style/style.less');
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import React    from 'react';
import ReactDOM from 'react-dom';
import Routes   from './routes/Routes.js';

ReactDOM.render((
    <div>
        <Routes />
    </div>
), document.getElementById('container'));
