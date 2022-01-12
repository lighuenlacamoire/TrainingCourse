import React, { useState, useEffect } from 'react';
import { employeesListRequest } from '../../services/employees';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../redux/actions/status';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardsList from './CardsList';

const SearchForm = () => {
  /** Dispatch de Redux */
  const dispatch = useDispatch();  
  const [data, setData] = useState();

  const searchList = () => {
    dispatch(setLoading("consulta", true));
    employeesListRequest()
      .then(async (response) => {
        if (response && response.results) {
          setData(response);
        }
      })
      .catch((error) => {
        setData();
        console.log(error);
      })
      .finally(() => dispatch(setLoading("consulta", false)));
  }

  useEffect(() => {
    searchList();
  }, []);
  
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>{"Listado"}</h1>
      <Row className="w-100">
        <Col xs="12">
          {data && data?.results.length > 0 ? <CardsList list={data?.results} /> : null}
        </Col>
      </Row>
    </div>
  );
}
export default SearchForm;