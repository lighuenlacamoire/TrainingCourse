/* eslint-disable import/no-anonymous-default-export */
/** SET_LOADING */
export const SET_LOADING = 'capacitacion/status/SET_LOADING';
/** CLEAR_LOADING */
export const CLEAR_LOADING = 'capacitacion/status/CLEAR_LOADING';
/** SET_FAILURE */
export const SET_FAILURE = 'capacitacion/status/SET_FAILURE';
/** CLEAR_FAILURE */
export const CLEAR_FAILURE = 'capacitacion/status/CLEAR_FAILURE';

export const initialState = {
  loading: false,
  active: false,
  failure: undefined,
  closeApp: false,
};

/**
 * Indicadore de actividad:
 * Es un array de keys que mientras posea elementos, se mostrara el loading!
 */
const indicators = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      const { status, key } = action.payload;
      if (status) {
        indicators.push(key);
      } else {
        const index = indicators.indexOf(key);
        indicators.splice(index, 1);
      }
      return {
        ...state,
        loading: indicators.length !== 0,
      };
    }
    case CLEAR_LOADING: {
      indicators.splice(0, indicators.length);
      return {
        ...state,
        loading: false,
      };
    }
    case SET_FAILURE: {
      const { title, message } = action.payload;
      const error = {
        title,
        message,
      };

      return {
        ...state,
        failure: error,
      };
    }
    case CLEAR_FAILURE: {
      return {
        ...state,
        failure: undefined,
      };
    }
    default:
      return {
        ...state,
        closeApp: false,
      };
  }
};