/**
 * External deps
 */
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { routerMiddleware, syncHistoryWithStore } from "react-router-redux";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";

/**
 * Internal deps
 */
import App from "./App";
import Home from "./pages/Home";
import AddNew from "./pages/AddNew/AddNew";
import Search from "./pages/Search";
import Details from "./pages/Details";
import configureStore from "./state/store";
import * as serviceWorker from "./serviceWorker";

/**
 * Variables
 */
const browserHistory = createBrowserHistory();
const store = configureStore({}, [routerMiddleware(browserHistory)]);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/transformers/search" component={Search} />
					<Route exact path="/transformers/:transformer/details" component={Details} />
					<Route path="/transformers/add" component={AddNew} />
				</Switch>
			</App>
		</Router>
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
