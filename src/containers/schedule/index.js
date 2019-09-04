import React from 'react';
import { Helmet } from 'react-helmet';
import HeaderCoverTitle from '../../components/header_full_with_title/HeaderCoverTitle';
import Timeline from '../../components//timeline/Timeline';

const Schedule = () => {
  return (
    <div>
      <Helmet titleTemplate="%s - schedule" defaultTitle="Raspored">
        <meta name="description" content="Opis rasporeda" />
      </Helmet>

      <HeaderCoverTitle
        background={require('../../assets/covers/cover_wood_fog.jpg')}
        subtitle="baci oko na"
        title="raspored"
        linkToId="id_church"
      />

      <Timeline />
    </div>
  );
};

export default Schedule;
