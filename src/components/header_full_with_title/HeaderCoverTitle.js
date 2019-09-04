import React from 'react';
import { Container } from 'react-bootstrap';
import Scroll from '../scroll/Scroll';

const FullCoverTitle = ({ background, subtitle, title, linkToId }) => {
  return (
    <div
      className="cover-full"
      style={{ background: `url(${background}) left center no-repeat` }}
    >
      <Container className="cover-full-content">
        <h4>{subtitle}</h4>
        <h1>{title}</h1>
        <hr className="hr-dark" />
      </Container>

      <Scroll linkToId={linkToId} />
    </div>
  );
};

export default FullCoverTitle;
