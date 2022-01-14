import {
  CLEAR_FAILURE,
  SET_FAILURE,
  SET_LOADING,
} from '../reducers/status';

/**
 * Setea la configuracion del Loading/Carga
 * @param key clave de la actividad
 * @param status estado de la actividad
 */
export const setLoading = (key, status) => ({
  type: SET_LOADING,
  payload: {
    key,
    status,
  },
});

/**
 * Setea un error
 * @param title Titulo del error
 * @param message Mensaje del error
 */
export const setFailure = (title, message) => ({
  type: SET_FAILURE,
  payload: {
    title,
    message,
  },
});

/**
 * Limpia el error actual
 */
export const clearFailure = () => ({
  type: CLEAR_FAILURE,
});
