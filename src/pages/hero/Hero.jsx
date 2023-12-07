import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import * as Styles from './HeroStyles';
import planeImg from '../../assets/plane5.jpg';

const Hero = () => {
  return (
    <Styles.HeroContainer id='home'>
      <Styles.HeroTextContainer>
        <FadeIn delay={0.2} direction='down'>
          <h1>
            We have everything your <span>Aircraft </span> need
          </h1>
        </FadeIn>
        <FadeIn delay={0.4} direction='down'>
          <p>
            Welcome to AircraftSales. If you are looking for a new plane, an
            approach plate, a place to upgrade your avionics, or a local airshow
            or fly-in, you will find it here.
          </p>
        </FadeIn>
        <FadeIn delay={0.4} direction='up'>
          <Link to='aircrafts-for-sale'>
            <button>Discover Now</button>
          </Link>
        </FadeIn>
      </Styles.HeroTextContainer>
      <Styles.HeroImgContainer>
        <FadeIn delay={0.2} direction='up'>
          <img src={planeImg} alt='' />
        </FadeIn>
      </Styles.HeroImgContainer>
    </Styles.HeroContainer>
  );
};

export default Hero;
