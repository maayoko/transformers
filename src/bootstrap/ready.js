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
import App from "ui/App";
import Home from "ui/pages/Home";
import AddNew from "ui/pages/AddNew";
import Search from "ui/pages/Search";
import Details from "ui/pages/Details";
import configureStore from "state/store";
import { getTransformersData } from "state/global";
import { createNewTransformer } from "state/transformer";
import { createSkins } from "state/skins";
import * as serviceWorker from "serviceWorker";

export const ready = () => {
	/**
	 * Variables
	 */
	const browserHistory = createBrowserHistory();
	const store = configureStore({}, [routerMiddleware(browserHistory)]);
	const history = syncHistoryWithStore(browserHistory, store);

	store.dispatch(getTransformersData());
	store.dispatch(createNewTransformer());
	store.dispatch(createSkins());

	ReactDOM.render(
		<Provider store={store}>
			<Router history={history}>
				<App>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/transformers/search" component={Search} />
						<Route
							exact
							path="/transformers/:transformer/details"
							component={Details}
						/>
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
};
