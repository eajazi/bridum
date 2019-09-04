import React from 'react';
import { Helmet } from 'react-helmet';

import HeaderCoverTitle from '../../components/header_full_with_title/HeaderCoverTitle';
import Story from '../../components/story/Story';

const About = () => {
  return (
    <div className="about">
      <Helmet titleTemplate="%s - About" defaultTitle="About us">
        <meta name="description" content="About us section" />
      </Helmet>

      <HeaderCoverTitle
        background={require('../../assets/covers/cover_wood_fog.jpg')}
        subtitle="priča"
        title="o nama"
        linkToId="idStory1"
      />

      <Story
        id="idStory1"
        isRightAlign={true}
        background={require('../../assets/story/cover_volleyball_playground.jpg')}
        image={require('../../assets/story/volleyball.svg')}
        storySubtitle="story 01"
        storyTitle="Long title"
        storyParagraph="Lorem ipsum bla bla"
        storyFooter="#jabuka"
      />
    </div>
  );
};

export default About;
