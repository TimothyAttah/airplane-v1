import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Styles from './AircraftTrendingDetails';
import { FadeIn } from '../../../../components/fadeIn/FadeIn';

import bonaza1 from '../../../../assets/bonaza-1.jpg';
import bonaza2 from '../../../../assets/bonaza-3.jpg';
import bonaza3 from '../../../../assets/bonaza-4.jpg';
import bonaza4 from '../../../../assets/bonaza-5.jpg';
import bonaza5 from '../../../../assets/bonaza-6.jpg';
import bonaza6 from '../../../../assets/bonaza-10.jpg';
import bonaza7 from '../../../../assets/bonaza-13.jpg';
import bonaza8 from '../../../../assets/bonaza-14.jpg';

import Slider from '../../../../components/slider/Slider';
import { ImgComponent } from '../../../../components/slider/ImgComponent';
import { Backdrop } from '../../../../components/Backdrop';
import { Contact } from '../../../../components/contact/Contact';
import { RiMailLine } from 'react-icons/ri';

export const summaryData = [
  ' IO-550 300 Horsepower Engine 100',
  'Since Major Overhaul and New Generation Avidyne ',
  'Avionics with Garmin GTX-345',
  'Transponder for Subscription Free ADS-B Traffic & Weather',
];

export const avionicsData = [
  ' Audio panel',
  'NAV / COMM / GPS',
  'ADS-B traffic',
  'ADS-weather',
  '1-pad mini charts etc',
  'DME',
  'HSI',
  'Autopil OT',
  '7000BT',
  'Avidyne IFD 550 WAAS GPS / NAV / COMM',
  'Avidyne IFD 440 WAAS GPS / NAV / COMM',
  'Subscription free ads-B traffic',
  'Subscription free ads-B weather',
  'Integrated panel mounted I-pad mini',
  'Garmin 345 w/ADSB In/ Out / Traffic / FIS B',
  'King KN 63 DME with Nav 1 & 2 and DME Hold',
  'King KCS 55A Slaved HSI system',
  'ALT Preselect',
  'Yaw Damp/GPSS steering',
];

const LatestAircraftFour = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <Styles.AircraftTrendingDetailsContainer>
      <div>
        <Styles.AircraftTrendingDetailsTitle>
          <FadeIn delay={0.2} direction='right' fullWidth padding>
            2005 Bonanza A36 for sale
          </FadeIn>
        </Styles.AircraftTrendingDetailsTitle>
        <Styles.AircraftTrendingDetailsPrice>
          <FadeIn delay={0.4} direction='left' fullWidth padding>
            Price: $63,300,000
          </FadeIn>
        </Styles.AircraftTrendingDetailsPrice>
      </div>
      <Slider
        imgArr={[
          <ImgComponent src={bonaza1} />,
          <ImgComponent src={bonaza2} />,
          <ImgComponent src={bonaza3} />,
          <ImgComponent src={bonaza4} />,
          <ImgComponent src={bonaza5} />,
          <ImgComponent src={bonaza6} />,
          <ImgComponent src={bonaza7} />,
          <ImgComponent src={bonaza8} />,
        ]}
      />
      <Styles.AircraftTrendingContactFeaturesBox>
        <Styles.AircraftTrendingContactBox>
          <h3>Contact Seller</h3>
          <p>Have a question? Send the seller a quick message.</p>
          <h4>Sullivan Stapleton</h4>

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
          <h3>2005 Bonanza A36</h3>
          <Styles.AircraftTrendingMainDetailsBox>
            <Styles.AircraftTrendingMainDetailsRightBox>
              <h4>Proudly presented by</h4>
              <p>
                <Link to='#'>Carolina Aircraft, Inc.</Link>
              </p>
              <h5>Sullivan Stapleton</h5>
            </Styles.AircraftTrendingMainDetailsRightBox>
            <Styles.AircraftTrendingMainDetailsLeftBox>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Year:</p>
                <p>2005</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Location:</p>
                <p>North Carolina (USA)</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Manufacturer:</p>
                <p>Beechcraft</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Serial Number:</p>
                <p>
                  <Link to='#'>E-3588</Link>
                </p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Registration No:</p>
                <p>
                  <Link to='#'>N136EU</Link>
                </p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Total Time:</p>
                <p>3411 hrs</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <h6>Price:</h6>
                <h6> $63,300,000</h6>
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
            <p>TTSN: 3,411</p>
          </Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
          <Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
            <h4>Engine(s)</h4>
            <p>10-550 300 Horsepower Engine</p>
            <p>SMOH: 100 (Oct 2018)</p>
          </Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
          <Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
            <h4>Prop Details</h4>
            <p>3 blade Propeller</p>
          </Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
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
            <p>48 month completed in March 2023</p>
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

export default LatestAircraftFour;
