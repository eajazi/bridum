import React from 'react';
import { Link } from 'react-scroll';

const Scroll = ({ linkToId }) => {
  return (
    <div>
      <div className="content-scroll">
        <Link to={linkToId} smooth={true} duration={500}>
          <span>Scroll down</span>
        </Link>
      </div>

      <div className="scroll-line" />
    </div>
  );
};

export default Scroll;
