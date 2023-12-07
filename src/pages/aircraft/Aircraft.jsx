import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import * as Styles from './AircraftStyles';
import plane1 from '../../assets/plane11.jpg';
import plane2 from '../../assets/plane3.jpg';
import plane3 from '../../assets/plane4.jpg';
import plane4 from '../../assets/plane9.jpg';
import plane5 from '../../assets/plane7.jpg';

const Aircraft = () => {
  return (
    <Styles.AircraftContainer id='aircraft'>
      <Styles.AircraftTittleWrapper>
        <FadeIn>
          <h2>Featured Aircraft for Sale</h2>
        </FadeIn>
        <FadeIn>
          <Link to='aircrafts-for-sale'>
            <button>view all aircraft</button>
          </Link>
        </FadeIn>
      </Styles.AircraftTittleWrapper>
      <Styles.AircraftImgContainer>
        <Styles.AircraftLeftImgBox>
          <FadeIn delay={0.2} direction='down'>
            <Styles.AircraftLeftImgBox>
              <img src={plane1} alt='' />
              <Styles.AircraftLabel>
                <button>Featured aircraft</button>
                <h5>2019 Citation M2</h5>
                <FadeIn delay={0.4} direction='up'>
                  <ul>
                    <li>Serial Number: 525-1026</li>
                    <li>Registration No: N1482P</li>
                    <li>Serial Number: 262 Hrs</li>
                  </ul>
                </FadeIn>
              </Styles.AircraftLabel>
            </Styles.AircraftLeftImgBox>
          </FadeIn>
        </Styles.AircraftLeftImgBox>

        <Styles.AircraftRightImgBox>
          <Styles.AircraftSmallImgBox>
            <FadeIn delay={0.2} direction='left'>
              <Styles.AircraftSmallImgBox>
                <img src={plane2} alt='' />
                <Styles.AircraftLabel>
                  <button>Featured aircraft</button>
                  <h5>1987 Boeing 737</h5>
                  <FadeIn delay={0.4} direction='up'>
                    <ul>
                      <li>Serial Number: 23066</li>
                      <li>Registration No: 306AL</li>
                      <li>Serial Number: 51467 Hrs</li>
                    </ul>
                  </FadeIn>
                </Styles.AircraftLabel>
              </Styles.AircraftSmallImgBox>
            </FadeIn>
          </Styles.AircraftSmallImgBox>

          <Styles.AircraftSmallImgBox>
            <FadeIn delay={0.4} direction='left'>
              <Styles.AircraftSmallImgBox>
                <img src={plane3} alt='' />
                <Styles.AircraftLabel>
                  <button>Featured aircraft</button>
                  <h5>2007 Citation X</h5>
                  <FadeIn delay={0.4} direction='up'>
                    <ul>
                      <li>Serial Number: 750 0279</li>
                      <li>Registration No: N982DW</li>
                      <li>Serial Number: 7060 Hrs</li>
                    </ul>
                  </FadeIn>
                </Styles.AircraftLabel>
              </Styles.AircraftSmallImgBox>
            </FadeIn>
          </Styles.AircraftSmallImgBox>

          <Styles.AircraftSmallImgBox>
            <FadeIn delay={0.6} direction='left'>
              <Styles.AircraftSmallImgBox>
                <img src={plane4} alt='' />
                <Styles.AircraftLabel>
                  <button>Featured aircraft</button>
                  <h5>2009 Learjet 60XR</h5>
                  <FadeIn delay={0.4} direction='up'>
                    <ul>
                      <li>Serial Number: 60-368</li>
                      <li>Registration No: 104GB</li>
                      <li>Serial Number: 2421 Hrs</li>
                    </ul>
                  </FadeIn>
                </Styles.AircraftLabel>
              </Styles.AircraftSmallImgBox>
            </FadeIn>
          </Styles.AircraftSmallImgBox>

          <Styles.AircraftSmallImgBox>
            <FadeIn delay={0.6} direction='left'>
              <Styles.AircraftSmallImgBox>
                <img src={plane5} alt='' />
                <Styles.AircraftLabel>
                  <button>Featured aircraft</button>
                  <h5>1998 Falcon 900EX</h5>
                  <FadeIn delay={0.4} direction='up'>
                    <ul>
                      <li>Serial Number: 23066</li>
                      <li>Registration No: 306AL</li>
                      <li>Serial Number: 51467 Hrs</li>
                    </ul>
                  </FadeIn>
                </Styles.AircraftLabel>
              </Styles.AircraftSmallImgBox>
            </FadeIn>
          </Styles.AircraftSmallImgBox>
        </Styles.AircraftRightImgBox>
      </Styles.AircraftImgContainer>
    </Styles.AircraftContainer>
  );
};

export default Aircraft;
