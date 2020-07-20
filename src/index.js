import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "./react-auth0-wrapper";
import config from "./auth_config.json";
import history from "./utils/history";

import { createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer'; 

import { Provider } from 'react-redux'; //binding layer which binds redux with our react app

const store = createStore(rootReducer);

// A function that routes the user to the right place
// after login
const onRedirectCallback = (appState) => {
	history.push(
		appState && appState.targetUrl
			? "/volunteer-center" + appState.targetUrl
			: window.location.pathname
	);
};

ReactDOM.render(
	/* 
    redirect_uri - we don't need to pass this URI to every call to loginWithRedirect, and it keeps the configuration in one place.

    onRediretCallback - which tries to route the user to the right place once they have logged in. For example, if the user tries to access a page that requires them to be authenticated, they will be asked to log in. 

    */

	<Auth0Provider
		domain={config.domain}
		client_id={config.clientId}
		redirect_uri={window.location.origin + "/volunteer-center"}
		onRedirectCallback={onRedirectCallback}
  >
    <Provider store={store}>
      <App />
    </Provider>
	</Auth0Provider>,
	document.getElementById("root")
);

serviceWorker.unregister();
