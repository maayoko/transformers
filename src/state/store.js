import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";
import { authMiddleware } from "./auth/midlleware";

export default function configureStore(preloadedState, uiSpecificMiddlewares = []) {
	const middlewares = [thunkMiddleware, authMiddleware, ...uiSpecificMiddlewares];
	const enhancers = [applyMiddleware(...middlewares)];

	const composeEnhancers =
		process.env.NODE_ENV !== "production" &&
		typeof window === "object" &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
			? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
			: compose;

	const store = createStore(reducers, preloadedState, composeEnhancers(...enhancers));

	return store;
}
