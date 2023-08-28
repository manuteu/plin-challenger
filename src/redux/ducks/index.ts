import { combineReducers } from '@reduxjs/toolkit';
import cep from './cep';
import climate from './climate';
import contact from './contact';

const reducers = combineReducers({
  cep,
  climate,
  contact
});

export default reducers;