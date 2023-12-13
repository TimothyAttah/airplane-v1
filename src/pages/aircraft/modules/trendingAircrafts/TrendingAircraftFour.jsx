import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Styles from './AircraftTrendingDetails';
import { FadeIn } from '../../../../components/fadeIn/FadeIn';
import learjet1 from '../../../../assets/learjet1.jpg';
import learjet2 from '../../../../assets/learjet2.jpg';
import learjet3 from '../../../../assets/learjet3.jpg';
import learjet4 from '../../../../assets/learjet4.jpg';

import Slider from '../../../../components/slider/Slider';
import { ImgComponent } from '../../../../components/slider/ImgComponent';
import { Backdrop } from '../../../../components/Backdrop';
import { Contact } from '../../../../components/contact/Contact';
import { RiMailLine } from 'react-icons/ri';

export const summaryData = [
  ' Three US owners since new,',
  'Less than 3,800 TT',
  'Passengers: 8 + 1',
  'Year: 2002',
  'Total Time (Airframe & Engine): 3,731.5',
  'Cycles (Airframe & Engine): 2,787',
  'Engine Program: MSP Gold',
  'APU Time: 2,003.6',
  'APU Program: MSP Gold',
  'Perfect EOY Close Opportunity',
  'Fresh heavy maintenance inspection',
];

export const avionicsData = [
  'Four Honeywell Display Units DU-870',
  'Dual Honeywell 850 Audio Panels',
  'Dual RM-855 Radio Mgmt. Units',
  'DTU-100 Data Transfer Unit',
  'Dual Honeywell Comm Units',
  'Dual RNZ-851B Navs w/ 8.33 Spacing',
  'Single ADF',
  'Dual DME’s',
  'Dual AHRS AHZ-800',
  'Universal UNS-1C Flight Management System',
  'ADS-B Out',
  'Dual Mode-S Transponders',
  'Honeywell Digital Weather Radar Primus 660',
  'Dual Honeywell Air Data',
  'Computer’s AZ-850',
  'Honeywell Mark V EGPWS w/Windshear',
  'Honeywell Radio Altimeter RT-300',
  'TCAS-2000 w/ Change 7',
  'Honeywell CVR',
];

const TrendingAircraftFour = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <Styles.AircraftTrendingDetailsContainer>
      <div>
        <Styles.AircraftTrendingDetailsTitle>
          <FadeIn delay={0.2} direction='right' fullWidth padding>
            2002 Learjet 45 for sale
          </FadeIn>
        </Styles.AircraftTrendingDetailsTitle>
        <Styles.AircraftTrendingDetailsPrice>
          <FadeIn delay={0.4} direction='left' fullWidth padding>
            Price: $30,000,000
          </FadeIn>
        </Styles.AircraftTrendingDetailsPrice>
      </div>
      <Slider
        imgArr={[
          <ImgComponent src={learjet1} />,
          <ImgComponent src={learjet2} />,
          <ImgComponent src={learjet3} />,
          <ImgComponent src={learjet4} />,
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
          <h3>2002 Learjet 45 for sale</h3>
          <Styles.AircraftTrendingMainDetailsBox>
            <Styles.AircraftTrendingMainDetailsRightBox>
              <h4>Proudly presented by</h4>
              <p>
                <Link to='#'>Thoroughbred Aviation, LLC</Link>
              </p>
              <h5>Sullivan Stapleton</h5>
              <p>88 East Main St Mendham New Jersey (USA) 07945</p>
            </Styles.AircraftTrendingMainDetailsRightBox>
            <Styles.AircraftTrendingMainDetailsLeftBox>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Year:</p>
                <p>2002</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Location:</p>
                <p>Georgia (USA)</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Manufacturer:</p>
                <p>Learjet</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Serial Number:</p>
                <p>
                  {/* <Link to='https://www.globalair.com/ac-reg/search.aspx?serial=6354'>
                    42-214
                  </Link> */}
                  <Link to='#'>42-214</Link>
                </p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Registration No:</p>
                <p>
                  {/* <Link to='https://www.globalair.com/ac-reg/search.aspx?regnum=B-603R'>
                    N11NF
                  </Link> */}
                  <Link to='#'>N11NF</Link>
                </p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Total Time:</p>
                <p>3731 hrs</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <h6>Price:</h6>
                <h6>$2,650,000 </h6>
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
            <p>Total Time: 3,731.5</p>
          </Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
          <Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
            <h4>Engine(s)</h4>
            <p>Garrett TFE-731-SER</p>
            <p>TT: 3,731.5 / 3,731.5</p>
            <p>Engine Program: MSP Gold</p>
          </Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
          <Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
            <h4>APU Details</h4>
            <p>Honeywell RE-100</p>
            <p>TT: 2,003.6</p>
            <p>Program: MSP Gold</p>
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
            <p> A1-A6 c/w Feb 2023 / Next Due Feb 2024 or 3,963.1 hrs</p>
            <p> B1-B6 c/w Aug 2023 / Next Due Aug 2025 or 4,323.7 hrs</p>
          </div>
          <div>
            <h2>Features/Options</h2>
            <p>Thrust Reversers</p>
            <p>110 Volt AC Cabin Power Supplies</p>
            <p>LCD Moving Map</p>
          </div>
        </Styles.AircraftTrendingDetailsSummary>
      </Styles.AircraftTrendingDetailsFeaturesContainer>
    </Styles.AircraftTrendingDetailsContainer>
  );
};

export default TrendingAircraftFour;
