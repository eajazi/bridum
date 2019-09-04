import React from 'react';
import { Nav } from 'react-bootstrap';
import TimelineLink from '../timeline_link/TimelineLink';
import TimelineSection from '../timeline_section/TimelineSection';

class Timeline extends React.Component {
  render() {
    return (
      <div className="timeline-root">
        <Nav className="flex-column">
          <TimelineLink
            toId="id_church"
            time="16:00"
            title="Vjenčanje"
            subtitle="Crkva sv. Pavla"
          />

          <TimelineLink
            toId="id_agape"
            time="17:30"
            title="agape ( zakuska )"
            subtitle="Crkva sv. Pavla ( dvorište)"
          />

          <TimelineLink
            toId="id_paladnjaki_departure"
            time="18:30"
            title="polazak za paladnjake"
            subtitle="( mladenci idu na slikanje )"
          />

          <TimelineLink
            toId="id_aperitives"
            time="19:30"
            title="aperitivi"
            subtitle="Paladnjaki (dvorište)"
          />

          <TimelineLink
            toId="id_first_dance"
            time="20:30"
            title="prvi ples, jelo..."
            subtitle="Paladnjaki"
          />

          <TimelineLink
            toId="id_bouquete"
            time="23:30"
            title="bacanje buketa"
            subtitle="Paladnjaki"
          />

          <TimelineLink
            toId="id_cake"
            time="00:30"
            title="rezanje torte"
            subtitle="Paladnjaki"
          />

          <TimelineLink
            toId="id_party"
            time="00:45 - ∞"
            title="fešta do jutra"
            subtitle="Paladnjaki"
          />
        </Nav>

        <TimelineSection
          id="id_church"
          backgroundColor="#E0F2F1"
          background={require('../../assets/covers/timeline/cover_church.svg')}
        />

        <TimelineSection
          id="id_agape"
          backgroundColor="#ffebee"
          background={require('../../assets/covers//timeline/cover_agape.svg')}
        />

        <TimelineSection
          id="id_paladnjaki_departure"
          backgroundColor="#F3E5F5"
          background={require('../../assets/covers//timeline/cover_paladnjaki_departure.svg')}
        />

        <TimelineSection
          id="id_aperitives"
          backgroundColor="#E8EAF6"
          background={require('../../assets/covers//timeline/cover_aperitives.svg')}
        />

        <TimelineSection
          id="id_first_dance"
          backgroundColor="#ECEFF1"
          background={require('../../assets/covers//timeline/cover_first_dance.svg')}
        />

        <TimelineSection
          id="id_bouquete"
          backgroundColor="#FFF8E1"
          background={require('../../assets/covers//timeline/cover_bouqete.svg')}
        />

        <TimelineSection
          id="id_cake"
          backgroundColor="#FBE9E7"
          background={require('../../assets/covers//timeline/cover_cake.svg')}
        />

        <TimelineSection
          id="id_party"
          backgroundColor="#F3E5F5"
          background={require('../../assets/covers//timeline/cover_party.svg')}
        />
      </div>
    );
  }
}

export default Timeline;
