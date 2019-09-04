import React from 'react';
import { Link } from 'react-scroll';

const TimelineLink = ({ toId, time, title, subtitle }) => {
  return (
    <div className="timeline-link-root">
      <li>
        <Link
          activeClass="active"
          to={toId}
          spy={true}
          smooth={true}
          duration={500}
        >
          <span className="counter">{time}</span>
          <h3 className="title">{title}</h3>
          <p className="body">
            <strong>{subtitle}</strong>
          </p>
        </Link>
      </li>
    </div>
  );
};

export default TimelineLink;
