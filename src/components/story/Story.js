import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Story extends React.Component {
  getImageColumnOrder() {
    return this.props.isRightAlign ? 1 : 2;
  }

  getParagraphColumnOrder() {
    return this.props.isRightAlign ? 2 : 1;
  }

  render() {
    return (
      <div
        id={this.props.id}
        className="story-container"
        style={{
          background: `url(${require('../../assets/covers/second_cover.jpg')}) left center no-repeat`
        }}
      >
        <div className="scroll-line-below" />
        <Container>
          <Row>
            <Col md={{ span: 6, order: this.getImageColumnOrder() }}>
              <img
                className="story-image"
                fluid="true"
                src={this.props.image}
              />
            </Col>

            <Col md={{ span: 6, order: this.getParagraphColumnOrder() }}>
              <div className="story-header">
                <h6>Priča 01</h6>
                <h2>Kako je sve krenulo</h2>
              </div>

              <div className="story-content">
                <p>
                  i tako se<span>dvoje</span> <br />
                  iz totalno drugačijih okolina
                  <br />
                  jednog lijepog dana našlo na odbojci
                  <br />
                  rekla mu je ona<span>izvuci se</span>
                  <br />
                  i objasnila mu lijepo
                  <br />
                  gdje treba stajati dok čeka smeč
                  <br />
                  a nije ni slutila da je to tek jedna od
                  <br />
                  <span>ovo ovako, ono onako</span>
                  <br />
                  rečenica što će mu izgovoriti...
                  <br />
                </p>

                <h5>nastavit će se...</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Story;
