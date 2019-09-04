import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Random component
const Completionist = () => {
  return (
    <Row className="completionist">
      <Col md={5} lg={{ span: 2, offset: 4 }} xl={{ span: 3, offset: 4 }}>
        <hr />
      </Col>

      <Col md={7} lg={6} xl={5}>
        <h5>dva srca, kucaju</h5>
      </Col>
      <Col>
        <h1>kao jedno</h1>
      </Col>
    </Row>
  );
};

export default Completionist;
