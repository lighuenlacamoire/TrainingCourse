/* eslint-disable import/no-anonymous-default-export */

/** EMPLOYEE_LIST */
export const EMPLOYEE_LIST = 'capacitacion/employees/EMPLOYEE_LIST';
/**
 * Estado inicial
 */
export const initialState = {
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_LIST: {
      const { data } = action;
      return {
        ...state,
        list: data,
      };
    }

    default:
      return state;
  }
};