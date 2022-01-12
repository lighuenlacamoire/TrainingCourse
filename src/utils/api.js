import axios from 'axios';
import { headers, getEnvPath } from '../services/api';

const axiosInstance = axios.create({
  // timeout: 1000 * 45, // Wait for 20 seconds
  baseURL: getEnvPath(),
});
// axiosInstance.defaults.timeout = 5000;

/**
 * Realiza la llamada al Endpoint
 * @param {String} path Url relativa para agregarla al API endpoint
 * @param {String} method Metodo HTTP ejemplo: POST, PUT, etc
 * @param {Object} headers Headers en caso de ser necesario
 * @param {Object} body Objeto a enviar en el cuerpo
 * @param {Boolean} suppressRedBox If true, no warning is shown on failed request
 * @returns {Promise}  of response body
 */
export const ApiCall = async (
  path,
  method,
  header,
  body,
  suppressRedBox,
) => {
  try {
    const apiRoot = getEnvPath();
    const endpoint = apiRoot + path;
    const formMethod = method;
    const response = await sendRequest(endpoint, formMethod, header, body);
    return response.data;
  } catch (error) {
    const newError = handleError(error.response);
    if (!suppressRedBox) {
      logError(error, path, method);
    }
    throw newError;
  }
};

/**
 * Construye e invoca el request HTTP
 * @param {String} path Url relativa para agregarla al API endpoint
 * @param {String} method One of: get|post|put|delete
 * @param {Object} headers Headers en caso de ser necesario
 * @param {Object} body Objeto a enviar en el cuerpo
 */
const sendRequest = async (
  endpoint,
  method,
  header,
  body,
) => {
  const formHeaders = setRequestHeaders(header);
  const requestConfig = {
    method: method,
    url: endpoint,
    data: body,
    headers: formHeaders,
  };

  console.log('Request URL', endpoint);
  console.log('Request Body', JSON.stringify(body || ''));
  return axiosInstance.request(requestConfig);
};

/**
 * Crea los cabezales para el request HTTP
 * @param {Header} header Headers en caso de ser necesario
 * @param {string} token token de la app
 */
export const setRequestHeaders = (header) => {
  const formHeaders = header || headers;

  return formHeaders;
};

const handleError = (error) => {
  let erMessage = "Ha ocurrido un error";
  let erCode = 500;
  let erStatus = 500;
  if (error) {
    if (error.message && error.message.length > 0) {
      erMessage = error.message;
    }

    if (error.statusText && error.statusText.length > 0) {
      erMessage = error.statusText;
    }

    if (error.data && error.data.data) {
      erMessage = error.data?.data?.errMessage;
      erCode = parseInt(error.data?.data?.errNumber || '0', 10);
    }

    if (error.status) {
      erStatus = error.status;
    }
  }

  return {
    code: erCode,
    status: erStatus,
    message: erMessage,
  };
};

/**
 * Se intenta recuperar el error de HTTP o de ejecucion
 */
const logError = (error, endpoint, method) => {
  if (error.status) {
    // eslint-disable-next-line no-underscore-dangle
    const summary = `(${error.status} ${error.statusText}): ${error._bodyInit}`;
    console.log(
      `API request ${method.toUpperCase()} ${endpoint} responded with ${summary}`,
    );
  } else {
    console.log(
      `API request ${method.toUpperCase()} ${endpoint} failed with message "${
        error.message
      }"`,
    );
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {};
