import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Styles from './AircraftTrendingDetails';
import { FadeIn } from '../../../../components/fadeIn/FadeIn';
import airbus1 from '../../../../assets/airbus1.jpg';
import airbus2 from '../../../../assets/airbus2.jpg';
import airbus3 from '../../../../assets/airbus3.jpg';
import airbus4 from '../../../../assets/airbus4.jpg';
import airbus5 from '../../../../assets/airbus5.jpg';
import airbus6 from '../../../../assets/airbus6.jpg';
import airbus7 from '../../../../assets/airbus7.jpg';
import airbus8 from '../../../../assets/airbus8.jpg';
import Slider from '../../../../components/slider/Slider';
import { ImgComponent } from '../../../../components/slider/ImgComponent';
import { Backdrop } from '../../../../components/Backdrop';
import { Contact } from '../../../../components/contact/Contact';
import { RiMailLine } from 'react-icons/ri';

export const summaryData = [
  '19 Passenger Configuration',
  'KA-Band High-Speed Internet',
  'Very Low Hours',
  'Installed with Four ACTs',
  'Increased MTOW 77.3 t, MLW 63.9 t & MZFW 60.3 t',
];

export const avionicsData = [
  'Auto-Program ELT (406 AF Integra)',
  'Remote Control Panel – Thales (SFE)',
  'SATCOM Cockpit Voice Interface',
  'Iridium SATCOM System - L-3 Communications',
  '4th TRU A/C',
  'Primary Flight Display (PFD)',
  'QNH/QFE BARO Setting',
  'RNP AR / SAAAR capability (STEP 3)',
  'Integrated Standby Instrument System (ISIS)',
  'Radio Altitude Automatic Callouts',
  'Wiring Provision for ATSAW',
  'iMMR - Honeywell - Install Standard L2.2',
  'GLS Function on Honeywell iMMR',
  'ATSU ARINC 623 ATS Applications Compatible with FANS C (Datalink Recording Capable)',
  'FANS C/4D (CSB9)',
];

const TrendingAircraftSix = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <Styles.AircraftTrendingDetailsContainer>
      <div>
        <Styles.AircraftTrendingDetailsTitle>
          <FadeIn delay={0.2} direction='right' fullWidth padding>
            2021 Airbus ACJ319neo for sale
          </FadeIn>
        </Styles.AircraftTrendingDetailsTitle>
        <Styles.AircraftTrendingDetailsPrice>
          <FadeIn delay={0.4} direction='left' fullWidth padding>
            Price: $30,500,000
          </FadeIn>
        </Styles.AircraftTrendingDetailsPrice>
      </div>
      <Slider
        imgArr={[
          <ImgComponent src={airbus1} />,
          <ImgComponent src={airbus2} />,
          <ImgComponent src={airbus3} />,
          <ImgComponent src={airbus4} />,
          <ImgComponent src={airbus5} />,
          <ImgComponent src={airbus6} />,
          <ImgComponent src={airbus7} />,
          <ImgComponent src={airbus8} />,
        ]}
      />
      <Styles.AircraftTrendingContactFeaturesBox>
        <Styles.AircraftTrendingContactBox>
          <h3>Contact Seller</h3>
          <p>Have a question? Send the seller a quick message.</p>
          <h4>Sales Team</h4>

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
          <h3>2021 Airbus ACJ319neo</h3>
          <Styles.AircraftTrendingMainDetailsBox>
            <Styles.AircraftTrendingMainDetailsRightBox>
              <h4>Proudly presented by</h4>
              <p>
                <Link to='#'>Asian Sky Group</Link>
              </p>
              <h5>Sales Team</h5>
              <p>
                Suite 1509, 15/F, 8 Queen's Road East Hong Kong China Wan Chai
              </p>
            </Styles.AircraftTrendingMainDetailsRightBox>
            <Styles.AircraftTrendingMainDetailsLeftBox>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Year:</p>
                <p>2021</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Location:</p>
                <p>Oklahoma (USA)</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Manufacturer:</p>
                <p>Airbus</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Serial Number:</p>
                <p>
                  <Link to='#'>10673</Link>
                </p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Registration No:</p>
                {/* <p>
                  <Link to='https://www.globalair.com/ac-reg/search.aspx?regnum=B-603R'>
                    B-603R
                  </Link>
                </p> */}
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Total Time:</p>
                <p>246 hrs</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <h6>Price:</h6>
                <h6>$30,500,000</h6>
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
            <p>TT: 246</p>
            <p>Cycles: 89</p>
          </Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
          <Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
            <h4>Engine(s)</h4>
            <p>CFMI LEAP-1A26</p>
            <p>SN: 59A444 / 59A449</p>
            <p>TTSN: 246 / 246</p>
          </Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
          <Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
            <h4>APU Details</h4>
            <p>Honeywell 131-9(A)</p>
            <p>SN: P-9518</p>
            <p>TT: 464</p>
            <p>Cycles: 289</p>
          </Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
        </Styles.AircraftTrendingDetailsFeaturesRightContainer>
        <Styles.AircraftTrendingDetailsSummary>
          <h2>Avionics</h2>
          <ul>
            {avionicsData.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
          {/* <div>
            <h2>Maintenance Status</h2>
            <p>48 month completed in March 2023</p>
          </div> */}
          {/* <div>
            <h2>Features/Options</h2>
            <p>
              Owner prepared to close in 2023 and escrow agreed funds for an
              ARCS in early 2024.
            </p>
          </div> */}
        </Styles.AircraftTrendingDetailsSummary>
      </Styles.AircraftTrendingDetailsFeaturesContainer>
    </Styles.AircraftTrendingDetailsContainer>
  );
};

export default TrendingAircraftSix;
