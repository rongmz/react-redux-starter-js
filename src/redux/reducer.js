import { produce } from 'immer';
import { initialState } from './init-state';

export const reducer = (state = initialState, action) => {
  console.log('action', action);
  switch(action.type) {

    default:
      return state;
  }
}