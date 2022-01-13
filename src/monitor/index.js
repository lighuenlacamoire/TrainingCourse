/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';


const Monitor = () => {
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

  return (activity && loading ? 
    <div
      style={{
        width: "100%",
        height: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
    </div>
    : null)
};

export default Monitor;