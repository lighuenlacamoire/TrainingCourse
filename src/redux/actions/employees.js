import {
  EMPLOYEE_LIST
} from '../reducers/employees';

/**
 * Actualiza el listado de empleados para la capacitacion
 * @param {Array} data lista de empleados
 */
export const employeesSetList = (data) => ({
  type: EMPLOYEE_LIST,
  data,
});
