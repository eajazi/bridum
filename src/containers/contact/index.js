import React from 'react';
import { Helmet } from 'react-helmet';

import FullCoverTitle from '../../components/header_full_with_title/HeaderCoverTitle';
import ContactSection from '../../components/contact_section/ContactSection';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Helmet titleTemplate="%s - Kontakt" defaultTitle="Kontakt">
          <meta name="description" content="Kontakt sekcija" />
        </Helmet>
        <FullCoverTitle
          background={require('../../assets/covers/cover_wood_fog.jpg')}
          subtitle="slobodno nas"
          title="kontaktirajte"
          linkToId="idContactSection1"
        />

        <ContactSection
          id="idContactSection1"
          backgroundColor="#ECEFF1"
          user={{
            name: 'Edis',
            surname: 'Ajazi',
            phoneNumber: '+385997415890',
            email: 'edis.ajazi@gmail.com',
            characterIcon: require('../../assets/charachters/character_edis.svg'),
            whatsAppUrl: 'https://wa.me/385997415890'
          }}
        />

        <ContactSection
          id="idContactSection2"
          backgroundColor="#F3E5F5"
          user={{
            name: 'Doris',
            surname: 'Lenić',
            phoneNumber: '+385981975187',
            email: 'doris.lenic92@gmail.com',
            characterIcon: require('../../assets/charachters/character_doris.svg'),
            whatsAppUrl: 'https://wa.me/385981975187'
          }}
        />
      </div>
    );
  }
}

export default Contact;
