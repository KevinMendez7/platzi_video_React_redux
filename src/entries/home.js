import React from 'react';
import {render} from 'react-dom';
import Home from '../pages/containers/home'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducer from '../reducers/index'
import {Map as map} from 'immutable'
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

function logger_({getState, dispatch}){
  return (next) =>{
    return (action) =>{
      console.log('Se enviara esta accion ', action)
      const value = next(action)
      console.log('este es mi nuevo estado ', getState().toJS())
      return value
    }
  }
}

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
    )
  )

  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// React.render("Que voy a renderizar, donde voy a ponerlo")

const homeContainer = document.getElementById('home-container');
// const holaMundo = <h1>hola mundo!!!!</h1>;

render(
  <Provider store={store}>
    <Home />
  </Provider>
  , homeContainer);
