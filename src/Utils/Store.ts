import {configureStore} from '@reduxjs/toolkit';
import {favreducer} from './reducer';

export const store = configureStore({
  reducer: favreducer,
});
