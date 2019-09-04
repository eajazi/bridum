import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';

const ContactSection = ({ id, backgroundColor, user }) => {
  return (
    <section
      id={id}
      className="contact-section-root"
      style={{
        backgroundColor: backgroundColor
      }}
    >
      <div className="scroll-line-below" />
      <Container className="contact-section-content">
        <Row>
          <Col md={6}>
            <h2>
              {user.name}
              <br />
              <span>{user.surname}</span>
            </h2>
          </Col>

          <Col md={6}>
            <p>kontaktirati na</p>
            <a className="contact-link" href={'tel:' + user.phoneNumber}>
              <h4>{user.phoneNumber}</h4>
            </a>

            <p>ili</p>
            <a
              className="contact-link"
              href={
                'mailto:' + user.email + '?subject=Vjenčanje - Doris i Edis'
              }
            >
              <h4>{user.email}</h4>
            </a>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <div className="social-links-warp">
              <div className="social-links">
                <a href={user.whatsAppUrl}>
                  <Image
                    src={require('../../assets/icons/social_icons/ic_whatsapp.svg')}
                  />
                </a>
                <a
                  href={
                    'mailto:' + user.email + '?subject=Vjenčanje - Doris i Edis'
                  }
                >
                  <Image
                    src={require('../../assets/icons/social_icons/ic_email.svg')}
                  />
                </a>
              </div>
              <div className="social-text">pronađi me na</div>
            </div>
          </Col>

          <Col xs={6}>
            <Image className="character-icon" src={user.characterIcon} />
          </Col>
        </Row>

        <Image />
      </Container>
    </section>
  );
};

export default ContactSection;
