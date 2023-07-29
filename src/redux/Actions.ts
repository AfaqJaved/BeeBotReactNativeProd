// actionTypes.ts
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Define action interfaces for type safety
export interface IncrementAction {
  type: typeof INCREMENT;
}

export interface DecrementAction {
  type: typeof DECREMENT;
}

export type CounterAction = IncrementAction | DecrementAction;
