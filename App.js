import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

import {StyleSheet} from 'react-native';
import LandingPage from './components/LandingPage';
const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <LandingPage />
    </Provider>
  );
};
const styles = StyleSheet.create({});

export default App;
