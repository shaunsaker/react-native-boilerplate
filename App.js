import React from 'react';
import { Router } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import codepush from 'react-native-code-push';

import { store, persistor } from './store';
import navigator from './navigation';

import ErrorHandler from './handlers/ErrorHandler';
import SystemMessageHandler from './handlers/SystemMessageHandler';
import AuthHandler from './handlers/AuthHandler';
import DatabaseHandler from './handlers/DatabaseHandler';
import NetworkHandler from './handlers/NetworkHandler';
import LocationHandler from './handlers/LocationHandler';

// Connect router to store
const ConnectedRouter = connect()(Router);

// Helper to clear local storage during development
// if (__DEV__) {
//   persistor.purge();
// }

export function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorHandler>
          <SystemMessageHandler>
            <AuthHandler />
            <DatabaseHandler />
            <NetworkHandler />
            <LocationHandler />
            <ConnectedRouter navigator={navigator} />
          </SystemMessageHandler>
        </ErrorHandler>
      </PersistGate>
    </Provider>
  );
}

export default codepush(App);
