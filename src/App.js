import React from 'react';
import './App.css';
import { reducer } from './redux/reducer';
import { initialState } from './redux/init-state';
import { createStore } from 'redux';
import Home from './Home';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';


const store = createStore(reducer, initialState);
// debug
store.subscribe(() => {
  console.log('store', store.getState());
})


function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact={true} path="/" component={Home} />

        <Redirect path="/**" to="/" />
      </Switch>
    </Provider>
  );
}

export default App;
