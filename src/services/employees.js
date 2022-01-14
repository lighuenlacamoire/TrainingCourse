
import { paths } from './api';
import { ApiCall } from '../utils/api';

/**
 * Consulta el listado de Empleados en capacitacion
 * @param {string} pages cantidad de paginas
 */
export const employeesListRequest = (
  pages,
) =>
  ApiCall(
    paths.app.employees.list.resource(pages),
    paths.app.employees.list.method,
    undefined,
    undefined,
  );
