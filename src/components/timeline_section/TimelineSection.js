import React from 'react';

const TimelineSection = ({ id, backgroundColor, background }) => {
  return (
    <section
      id={id}
      className="timeline-section-root"
      style={{
        background: `url(${background}) right bottom no-repeat`,
        backgroundColor: backgroundColor
      }}
    />
  );
};

export default TimelineSection;
