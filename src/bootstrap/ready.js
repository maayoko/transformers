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
import Login from "ui/pages/Login";
import User from "ui/pages/User";
import { Provider as LoaderProvider } from "ui/components/Loader";
import PrivateRoute from "ui/components/PrivateRoute";
import configureStore from "state/store";
import { getTransformersData } from "state/global";
import { createDefaultTransformer } from "state/transformer";
import { setCurrentTransformer } from "state/currentTransformer";
import { createSkins } from "state/skins";
import { createGears } from "state/gears";
import * as serviceWorker from "serviceWorker";
import { createLoader, loaderTypes } from "../plugins/google/loader";

export const ready = app => {
	/**
	 * Variables
	 */
	const browserHistory = createBrowserHistory();
	const store = configureStore({}, [routerMiddleware(browserHistory)]);
	const storeState = store.getState();
	const history = syncHistoryWithStore(browserHistory, store);
	const currentTransformer = history.location.state && history.location.state.currentTransformer;
	const clientLoader = createLoader(loaderTypes.CLIENT, {
		clientId: storeState.global.credentials.CLIENT_ID,
		apiKey: storeState.global.credentials.API_KEY,
		discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
		scope: "profile email https://www.googleapis.com/auth/calendar"
	});

	if (currentTransformer) {
		store.dispatch(setCurrentTransformer(currentTransformer));
	}

	store.dispatch(createSkins());
	store.dispatch(createGears());
	store.dispatch(getTransformersData());
	store.dispatch(createDefaultTransformer());

	ReactDOM.render(
		<LoaderProvider loader={clientLoader}>
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
							<Route exact path="/login" component={Login} />
							<Route path="/transformers/add" component={AddNew} />
							<PrivateRoute path="/users/:user" component={User} />
						</Switch>
					</App>
				</Router>
			</Provider>
		</LoaderProvider>,
		document.getElementById("root")
	);

	// If you want your app to work offline and load faster, you can change
	// unregister() to register() below. Note this comes with some pitfalls.
	// Learn more about service workers: https://bit.ly/CRA-PWA
	serviceWorker.unregister();
};
