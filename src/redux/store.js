import {
  createStore,
  combineReducers
} from 'redux';
// Reducers
import employees from './reducers/employees';

/**
 * Combina todos los reducers
 */
const rootReducer = combineReducers({
  employees
});

/** Store de Redux */
export const store = createStore(rootReducer);
