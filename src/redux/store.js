import {
  createStore,
  combineReducers
} from 'redux';
// Reducers
import employees from './reducers/employees';
import status from './reducers/status';

/**
 * Combina todos los reducers
 */
const rootReducer = combineReducers({
  employees,
  status,
});

/** Store de Redux */
export const store = createStore(rootReducer);
