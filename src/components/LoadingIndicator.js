import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Plane  } from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const LoadingIndicator = () => {
  /** Dispatch de Redux */
  const { loading, failure } = useSelector((state) => state.status);
  const [activity, setActivity] = useState(loading);
  /**
   * Verifica si existe algun elemento cargando
   *
   */
  const isLoading = () => {
    setActivity(loading);
  };

  useEffect(() => {
    isLoading();
  }, [loading]);

  return (
    activity ?
      <div
        className='loading-overlay'
      >
        <div
          className='loading-container'
      >
          <Plane color='#307ecc' arialLabel="loading-indicator" />
          </div>
      </div>
      : null
  );
};

export default LoadingIndicator;