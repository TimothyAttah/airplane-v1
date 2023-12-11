import React, { useState } from 'react';
import * as Styles from './HomeAircraftStyles';
import { FadeIn } from '../../../../components/fadeIn/FadeIn';
import gulf6501 from '../../../../assets/129776_19_GulfstreamG650ER_snNA-Int11.jpg';
import gulf6502 from '../../../../assets/129776_19_GulfstreamG650ER_snNA-Int12.jpg';
import gulf6503 from '../../../../assets/129776_19_GulfstreamG650ER_snNA-Int2.jpg';
import gulf6504 from '../../../../assets/129776_19_GulfstreamG650ER_snNA-Int4.jpg';
import gulf6508 from '../../../../assets/129776_Screen_Shot_2023-11-08_at_1.41.35_PM.png';
import Slider from '../../../../components/slider/Slider';
import { ImgComponent } from '../../../../components/slider/ImgComponent';
import { Backdrop } from '../../../../components/Backdrop';
import { Contact } from '../../../../components/contact/Contact';
import { RiMailLine } from 'react-icons/ri';

const HomeAircraftFive = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <Styles.HomeAircraftContainer>
      <Slider
        imgArr={[
          <ImgComponent src={gulf6501} />,
          <ImgComponent src={gulf6502} />,
          <ImgComponent src={gulf6503} />,
          <ImgComponent src={gulf6504} />,
          <ImgComponent src={gulf6508} />,
        ]}
      />
      <Styles.HomeAircraftWrapper>
        <FadeIn delay={0.4} direction='right' fullWidth>
          <Styles.HomeAircraftTitle>1998 Falcon 900EX</Styles.HomeAircraftTitle>
        </FadeIn>
        <FadeIn delay={0.4} direction='left' fullWidth>
          <Styles.HomeAircraftPrice>$399,500</Styles.HomeAircraftPrice>
        </FadeIn>
        <FadeIn delay={0.4} direction='down'>
          <Styles.HomeAircraftDetails>
            <li>Serial Number: 525-1026</li>
            <li>Registration No: N1482P</li>
            <li>Hours: 262 Hrs</li>
          </Styles.HomeAircraftDetails>
        </FadeIn>

        <FadeIn delay={0.4} direction='up'>
          <Styles.HomeAircraftButton onClick={() => setOpenForm(true)}>
            <RiMailLine />
            Email
          </Styles.HomeAircraftButton>
        </FadeIn>
      </Styles.HomeAircraftWrapper>
      {openForm && (
        <>
          <Backdrop close={() => setOpenForm(false)} />
          <Contact setOpenForm={setOpenForm} />
        </>
      )}
    </Styles.HomeAircraftContainer>
  );
};

export default HomeAircraftFive;
