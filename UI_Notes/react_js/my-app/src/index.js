import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login  from './components/Login.js';
import Home  from './components/Home1.js';

ReactDOM.render(<Router>
  <Route exact path = "/" component = {Login} />
  <Route path = "/home/:name" component = {Home} />
</Router>, document.getElementById('root'));

//ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));

//setTimeout(() => {
  //  ReactDOM.unmountComponentAtNode( document.getElementById('root') );
   //}, 15000);



//ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,document.getElementById('root'));

//ReactDOM.render(<ErrorHandler> <Timer3 /></ErrorHandler>,document.getElementById('root'));
//ReactDOM.render(<React.StrictMode><CustomApp /></React.StrictMode>,document.getElementById('root'));
//ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,document.getElementById('root'));
//ReactDOM.render(<React.StrictMode> <h1>hello world</h1></React.StrictMode>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
