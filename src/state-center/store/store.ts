import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer/reducer';
import { devToolsEnhancer } from 'redux-devtools-extension';

export const store = createStore(reducer, applyMiddleware(thunk));
