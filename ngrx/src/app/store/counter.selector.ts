import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectCount = (state: { counter: number }) => {
  return state.counter;
};

// export const selectCount = createFeatureSelector<CounterState>

export const selectDoubleCount = createSelector(selectCount, (state) => {
  return state * 2;
});
