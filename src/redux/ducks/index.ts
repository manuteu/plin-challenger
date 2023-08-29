import { combineReducers } from '@reduxjs/toolkit';
import cep from './cep';
import climate from './climate';

const reducers = combineReducers({
  cep,
  climate,
});

export default reducers;