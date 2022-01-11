/* eslint-disable import/no-anonymous-default-export */
/** * Urls de ambientes */
const path = {
  PROD: 'https://swapi.dev/',
  PRE: 'https://swapi.dev/',
  QA: 'https://swapi.dev/',
  DEV: 'https://swapi.dev/',
};

/** * Variables de ambiente */
export const getEnvPath = () => path.DEV;

const peopleController = 'api/people';

/**
 * Lista de Endpoints
 */
export const paths = {
  app: {
    employees: {
      list: {
        resource: (pages) =>
          `${peopleController}/${
            pages ? `?page=${pages}` : ''
          }`,
        method: 'GET',
      },
    },
  },
};

export default {};