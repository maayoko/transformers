import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './pages/Home';
import AddNew from "./pages/AddNew/AddNew";
import Search from "./pages/Search";
import Details from "./pages/Details";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <App>
            <Route exact path="/" component={Home} />
            <Route exact path="/transformers/search" component={Search} />
            <Route exact path="/transformers/:transformer/details" component={Details} />
            <Route path="/transformers/add" component={AddNew} />
        </App>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
