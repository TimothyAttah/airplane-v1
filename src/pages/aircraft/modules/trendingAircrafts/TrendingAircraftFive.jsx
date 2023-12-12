import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Styles from './AircraftTrendingDetails';
import { FadeIn } from '../../../../components/fadeIn/FadeIn';
import globalair1 from '../../../../assets/global-2014-1.jpg';
import globalair2 from '../../../../assets/global-2014-2.jpg';
import globalair3 from '../../../../assets/global-2014-3.jpg';
import globalair4 from '../../../../assets/global-2014-4.jpg';
import globalair5 from '../../../../assets/global-2014-5.jpg';
import globalair6 from '../../../../assets/global-2014-6.jpg';
import globalair7 from '../../../../assets/global-2014-7.jpg';
import globalair8 from '../../../../assets/global-2014-8.jpg';
import globalair9 from '../../../../assets/global-2014-9.jpg';
import Slider from '../../../../components/slider/Slider';
import { ImgComponent } from '../../../../components/slider/ImgComponent';
import { Backdrop } from '../../../../components/Backdrop';
import { Contact } from '../../../../components/contact/Contact';
import { RiMailLine } from 'react-icons/ri';

export const summaryData = [
  ' No Damage History',
  'Airframe on Bombardier Smart Parts',
  'Engines on Rolls-Royce Corporate Care',
  'APU on Honeywell MSP Gold',
  'HUD/EVS',
  'EU Ops I Compliant',
  'Always Hangered at home base',
];

export const avionicsData = [
  'Single Collins Head Up Display/ Combiner (HUD)',
  'Single Collins SATCOM',
  'Single L3 Technologies Cockpit Voice Recorder (CVR)',
  'Single L3 Technologies Flight Data Recorder (FDR)',
  'Triple Collins VHF Communication Transceiver',
  'Dual Collins Radio Interface (SELCAL)',
  'Single Artex ELT',
  'Dual Collins HF Transceiver',
  'Single EMS Aviation Iridium',
  'Fourth Rockwell Collins Adaptive Flight Display',
  'Dual ATC Transponder',
  'Triple Collins Digital Air Data Computer (ADS)',
  'Dual Collins DME',
  'Triple Honeywell Inertial Reference Unit',
  'Dual Collins GPS Receiver',
  'Dual Collins Radio Altimeter',
  'Single Collins Traffic Surveillance System',
  'Datalink',
];

export const interiorData = [
  'Original Interior in Excellent Condition, regular conditioning and maintenance, no expense spared',
  'Original interior by Bombardier Montreal. This aircraft features a 13 passenger',
  'configuration:',
  'Forward Galley equipped with High Temp Oven, Microwave, Food Chiller and',
  'Nespresso Machine',
  'Forward 4 Place Club',
  'Mid 4 Place Conference Table facing a Credenza',
  'Aft 3 Place Divan opposite 2 Place Club',
  'Forward & Aft Lavatories',
  'Rockwell Collins CESV10 CMS',
  'LED Cabin Lighting',
  'Fwd and Aft Cabin Bulkhead Monitors',
  'Dual DVD Players',
  'Swift Broadband HSD',
  'Wi-Fi WAP 4000',
  'ICS Phone System',
  '(5) Phone Handsets',
];

const TrendingAircraftFive = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <Styles.AircraftTrendingDetailsContainer>
      <div>
        <Styles.AircraftTrendingDetailsTitle>
          <FadeIn delay={0.2} direction='right' fullWidth padding>
            2014 Global 5000 for sale
          </FadeIn>
        </Styles.AircraftTrendingDetailsTitle>
        <Styles.AircraftTrendingDetailsPrice>
          <FadeIn delay={0.4} direction='left' fullWidth padding>
            Price: $19,995,000
          </FadeIn>
        </Styles.AircraftTrendingDetailsPrice>
      </div>
      <Slider
        imgArr={[
          <ImgComponent src={globalair1} />,
          <ImgComponent src={globalair2} />,
          <ImgComponent src={globalair3} />,
          <ImgComponent src={globalair4} />,
          <ImgComponent src={globalair5} />,
          <ImgComponent src={globalair6} />,
          <ImgComponent src={globalair7} />,
          <ImgComponent src={globalair8} />,
          <ImgComponent src={globalair9} />,
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
          <h3>2004 Embraer ERJ-145LR</h3>
          <Styles.AircraftTrendingMainDetailsBox>
            <Styles.AircraftTrendingMainDetailsRightBox>
              <h4>Proudly presented by</h4>
              <p>
                <Link to='https://www.globalair.com/aircraft-for-sale/listings-by-seller/aviatrade-incorporated?brokerid=10748'>
                  Guardian Jet, LLC
                </Link>
              </p>
              <h5>Sales Team</h5>
              <p>102A Broad Street Guilford Connecticut (USA) 06437</p>
            </Styles.AircraftTrendingMainDetailsRightBox>
            <Styles.AircraftTrendingMainDetailsLeftBox>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Year:</p>
                <p>2014</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Location:</p>
                <p>United Kingdom</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Manufacturer:</p>
                <p>Bombardier</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Serial Number:</p>
                <p>
                  <Link to='https://www.globalair.com/ac-reg/search.aspx?serial=6354'>
                    9602
                  </Link>
                </p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Registration No:</p>
                <p>
                  <Link to='https://www.globalair.com/ac-reg/search.aspx?regnum=B-603R'>
                    G-LAMO
                  </Link>
                </p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Total Time:</p>
                <p>4584 hrs</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <h6>Price:</h6>
                <h6>$19,995,000 </h6>
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
            <p>TT: 4,584</p>
            <p>Landings: 1,467</p>
          </Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
          <Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
            <h4>Engine(s)</h4>
            <p>Rolls Royce BR700-710A2-20</p>
            <p>TT: 4,557 / 4,557</p>
            <p>Cycles: 1,458 / 1,458</p>
          </Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
          <Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
            <h4>APU Details</h4>
            <p>Honeywell RE-220 (GX)</p>
            <p>TT: 3,645</p>
            <p>Cycles: 2,897</p>
            <p>SN: P-731</p>
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
            <p>FANS 1/A</p>
            <p>Lightning Detection</p>
            <p>ADS-B Out Version 2</p>
            <p>RVSM</p>
          </div>
        </Styles.AircraftTrendingDetailsSummary>
      </Styles.AircraftTrendingDetailsFeaturesContainer>
    </Styles.AircraftTrendingDetailsContainer>
  );
};

export default TrendingAircraftFive;
