import { Action, createReducer, on } from '@ngrx/store';
import {
  decrement,
  // CounterActions,
  // DECREMENT,
  // DecrementAction,
  // INCREMENT,
  // IncrementAction,
  increment,
  set,
} from './counter.actions';

const initialState = 0;
export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state, action) => state - action.value),
  on(set, (state, action) => action.value)
);

// export function counterReducer(
//   state = initialState,
//   action: CounterActions | Action
// ) {
//   switch (action.type) {
//     case INCREMENT:
//       return state + (action as IncrementAction).payload.value;
//     case DECREMENT:
//       return state - (action as DecrementAction).payload.value;
//   }
//   return state;
// }
