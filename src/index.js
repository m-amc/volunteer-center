import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "./react-auth0-wrapper";
import config from "./auth_config.json";
import history from "./utils/history";
import "./index.css";

import configureStore from './store/configureStore';
import { Provider } from 'react-redux'; // Provider - binding layer which binds redux with our react app

import firebase from 'firebase/app';
import 'firebase/database';
import { firebaseConfig } from './utils/firebaseConfig';

import {
  ReactReduxFirebaseProvider,
} from 'react-redux-firebase'

const rrfConfig = {
  postings: 'postings',
  enabledLogging: 'false'
}

firebase.initializeApp(firebaseConfig)

const store = configureStore()

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
}

// A function that routes the user to the right place after login
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
    {/* store is now available in the app */}
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
