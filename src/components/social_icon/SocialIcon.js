import React from 'react';
import { Image } from 'react-bootstrap';

const SocialIcon = ({ icon }) => {
  return (
    <a href="#">
      <Image className="social-icon" fluid src={icon} />
    </a>
  );
};

export default SocialIcon;
