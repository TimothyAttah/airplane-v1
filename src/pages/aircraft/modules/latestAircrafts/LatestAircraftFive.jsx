import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Styles from './AircraftTrendingDetails';
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

export const summaryData = [
  'EU-Ops CJ2+ with only 3577TT, TAP Blue and motivated Seller.',
];

export const avionicsData = [
  ' Flight System Collins Pro-line 21 3 Screen',
  'Autopilot Collins Pro-line 21',
  'Radar Collins',
  'Comms Dual Collins',
  'Navs Dual Collins NAV-4000',
  'DME Dual Collins',
  'ADF Collins NAV-4000',
  'Transponders Dual Collins TDR-94D w/ Diversity',
  'HF Comm Collins HF-9000',
  'Traffic Collins TCAS-4000 w/ 7.1',
  'Terrain Honeywell Mk-VIII EGPWS',
  'FMS Collins FMS-3000 w/ GPS-4000S',
];

const LatestAircraftFive = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <Styles.AircraftTrendingDetailsContainer>
      <div>
        <Styles.AircraftTrendingDetailsTitle>
          <FadeIn delay={0.2} direction='right' fullWidth padding>
            2009 Citation CJ2+ for sale
          </FadeIn>
        </Styles.AircraftTrendingDetailsTitle>
        <Styles.AircraftTrendingDetailsPrice>
          <FadeIn delay={0.4} direction='left' fullWidth padding>
            Please Email
          </FadeIn>
        </Styles.AircraftTrendingDetailsPrice>
      </div>
      <Slider
        imgArr={[
          <ImgComponent src={gulf6501} />,
          <ImgComponent src={gulf6502} />,
          <ImgComponent src={gulf6503} />,
          <ImgComponent src={gulf6504} />,
          <ImgComponent src={gulf6508} />,
        ]}
      />
      <Styles.AircraftTrendingContactFeaturesBox>
        <Styles.AircraftTrendingContactBox>
          <h3>Contact Seller</h3>
          <p>Have a question? Send the seller a quick message.</p>
          <h4>Mabel Matthew</h4>

          <Styles.AircraftTrendingContactsBox onClick={() => setOpenForm(true)}>
            <RiMailLine />
            <h2>Email</h2>
          </Styles.AircraftTrendingContactsBox>
        </Styles.AircraftTrendingContactBox>
        {openForm && (
          <>
            <Backdrop close={() => setOpenForm(false)} />
            <Contact setOpenForm={setOpenForm} />
          </>
        )}
        <Styles.AircraftTrendingDetailsMainWrapper>
          <h3>2019 Gulfstream G650ER</h3>
          <Styles.AircraftTrendingMainDetailsBox>
            <Styles.AircraftTrendingMainDetailsRightBox>
              <h4>Proudly presented by</h4>
              <p>
                <Link to='https://www.globalair.com/aircraft-for-sale/listings-by-seller/aviatrade-incorporated?brokerid=10748'>
                  JetBrokers
                </Link>
              </p>
              <h5>Mabel Matthew</h5>
            </Styles.AircraftTrendingMainDetailsRightBox>
            <Styles.AircraftTrendingMainDetailsLeftBox>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Year:</p>
                <p>2009</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Location:</p>
                <p>Austria</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Manufacturer:</p>
                <p>Cessna</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Serial Number:</p>
                <p>
                  <Link to='https://www.globalair.com/ac-reg/search.aspx?serial=6354'>
                    525A-0457
                  </Link>
                </p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Registration No:</p>
                <p>
                  <Link to='https://www.globalair.com/ac-reg/search.aspx?regnum=B-603R'>
                    T7-APP
                  </Link>
                </p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Total Time:</p>
                <p>3577 hrs</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <h6>Price:</h6>
                <h6> Please Email</h6>
              </Styles.AircraftTrendingMainDetailsOptions>
            </Styles.AircraftTrendingMainDetailsLeftBox>
          </Styles.AircraftTrendingMainDetailsBox>
        </Styles.AircraftTrendingDetailsMainWrapper>
      </Styles.AircraftTrendingContactFeaturesBox>
      <Styles.AircraftTrendingDetailsSummary>
        <h2>Summary</h2>
        <ul>
          {summaryData.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </Styles.AircraftTrendingDetailsSummary>
      <Styles.AircraftTrendingDetailsFeaturesContainer>
        <Styles.AircraftTrendingDetailsFeaturesRightContainer>
          <Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
            <h4>Airframe</h4>
            <p>Year of Manufacture: 2009</p>
            <p>Time Since New: 3577:34</p>
            <p> Landings: 1903</p>
          </Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
          <Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
            <h4>Engine(s)</h4>
            <p>Williams FJ4403A-24 LEFT</p>
            <p>RIGHT</p>
            <p>Serial Number 216329 216328</p>
            <p>Time Since New 3505:01</p>
            <p>Cycles Since New 1876 1857</p>
          </Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
          {/* <Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
            <h4>APU Details</h4>
            <p>APU on Honeywell MSP</p>
          </Styles.AircraftTrendingDetailsFeaturesRightDetailsBox> */}
        </Styles.AircraftTrendingDetailsFeaturesRightContainer>
        <Styles.AircraftTrendingDetailsSummary>
          <h2>Avionics</h2>
          <ul>
            {avionicsData.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
          <div>
            <h2>Maintenance Status</h2>
            <p>DOC 10 c/w 1/23 @ 3601:01 TT On Cesocm</p>
          </div>
          <div>
            <h2>Features/Options</h2>
            <p>ADS-B Out Equipped</p>
            <p>Avionics Dispatch Switch</p>
            <p>Artex C406N ELT</p>
            <p>Garmin GPS-500w</p>
          </div>
        </Styles.AircraftTrendingDetailsSummary>
      </Styles.AircraftTrendingDetailsFeaturesContainer>
    </Styles.AircraftTrendingDetailsContainer>
  );
};

export default LatestAircraftFive;
