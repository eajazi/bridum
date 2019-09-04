import React from 'react';
import withSizes from 'react-sizes';
import { Container, Row, Col } from 'react-bootstrap';
import DateCountDown from '../date_countdown/DateCountDown';
import Scroll from '../scroll/Scroll';

class Header extends React.Component {
  renderHeaderTitle = () => {
    if (this.props.isMedium) {
      return <h1>DORIS & EDIS </h1>;
    }

    return null;
  };

  renderHeader = () => {
    return (
      <div className="header-container-main">
        <div className="header-vertical-layer" />
        <Container className="header-container-content">
          <Row className="align-middle">
            <Col lg={{ span: 8, offset: 4 }} xl={{ span: 8, offset: 4 }}>
              {this.renderHeaderTitle()}
            </Col>
          </Row>

          <DateCountDown />
        </Container>

        <Scroll linkToId="saveTheDate" />
      </div>
    );
  };

  render() {
    return <div>{this.renderHeader()}</div>;
  }
}

const mapSizesToProps = ({ width }) => ({
  isMedium: width > 768
});

export default withSizes(mapSizesToProps)(Header);
