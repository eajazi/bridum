import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const FullPageContainer = () => {
  return (
    <section id="saveTheDate" className="full-page-container">
      <Container className="full-page-container-content">
        <Row>
          <Col lg={{ span: 6, order: 2 }}>
            <div className="full-page-container-image" />
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={12}>
                <h4>rezervirajte datum</h4>
              </Col>

              <Col lg={12}>
                <h1>08.06.2019.</h1>
              </Col>

              <Col lg={12}>
                <Row>
                  <Col xs={8}>
                    <hr />
                  </Col>
                  <Col xs={4}>
                    <h5>16:00</h5>
                  </Col>
                </Row>

                <Row>
                  <Col className="text-center button-container">
                    <button className="main-photo-btn generic-btn black-btn">
                      <Link to="/raspored">
                        <span>saznaj više</span>
                      </Link>
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FullPageContainer;
