import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Styles from './AircraftTrendingDetails';
import { FadeIn } from '../../../../components/fadeIn/FadeIn';
import Gulfstream1 from '../../../../assets/129199_13_GulfstreamG650_sn6037-Ext1.jpg';
import Gulfstream2 from '../../../../assets/129199_13_GulfstreamG650_sn6037-Ext2.jpg';
import Gulfstream3 from '../../../../assets/129199_13_GulfstreamG650_sn6037-Ext3.jpg';
import Gulfstream4 from '../../../../assets/129199_13_GulfstreamG650_sn6037-Ext4.jpg';
import Gulfstream5 from '../../../../assets/129199_13_GulfstreamG650_sn6037-Ext5.jpg';
import Gulfstream6 from '../../../../assets/129199_13_GulfstreamG650_sn6037-Int1.jpg';
import Gulfstream7 from '../../../../assets/129199_13_GulfstreamG650_sn6037-Int2.jpg';
import Gulfstream8 from '../../../../assets/129199_13_GulfstreamG650_sn6037-Int3.jpg';
import Gulfstream9 from '../../../../assets/129199_13_GulfstreamG650_sn6037-Int4.jpg';
import Slider from '../../../../components/slider/Slider';
import { ImgComponent } from '../../../../components/slider/ImgComponent';
import { Backdrop } from '../../../../components/Backdrop';
import { Contact } from '../../../../components/contact/Contact';
import { RiMailLine } from 'react-icons/ri';

export const summaryData = [
  'Rolls Royce Corporate Care',
  'APU on Honeywell MSP',
  'Jet Connex KA Band Internet with SDR',
  'Securaplane',
  'Alto Custom Sound System with eight sub-woofers',
  'Gulfstream Customer Cabin Management Systems 2 upgrade completed in Savannah',
  'June 2023',
  'STO4787NY June 2023',
  'Full Block 3 upgrade with all parts reserved, scheduled to be completed Oct23 ',
  'during annual mxx',
  'On AOS program',
  '$600K custom pearl white with metallic grey and black graphics',
];

export const avionicsData = [
  ' 2 Global Positioning Systems (GPS)',
  '3 Flight Management System (FMS)',
  '2 Automatic Flight Guidance System',
  '2 Autothrottles',
  '3 Inertial Reference Systems (IRS)',
  '1 Head Up Display (HUD)',
  '1 Enhanced Vision System (EVS)',
  '2 High Frequency (HF) Communications',
  '3 Very High Frequency (VHF) Communications',
  '1 VHF Navigation',
  '1 Automated Direction Finder (ADF)',
  '2 Air Traffic Control (ATC) Mode S',
  '1 Traffic Collision Avoidance System (TCAS)',
  '2 Distance Measuring Equipment (DME) Transceivers',
  '1 Three-dimensional (3D) Color Weather Radar',
  '2 Radio Altimeters',
  '1 Multi-channel Satellite Communications System (SATCOM)',
  '2 Enhanced Ground Proximity Warning System (EGPWS)',
  '1 Emergency Locator Transmitter (ELT)',
  '1 Flight Data Recorder System (FDR)',
  '1 Cockpit Voice Recorder (CVR)',
  'Cockpit Printer',
];

const TrendingAircraftSeven = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <Styles.AircraftTrendingDetailsContainer>
      <div>
        <Styles.AircraftTrendingDetailsTitle>
          <FadeIn delay={0.2} direction='right' fullWidth padding>
            2013 Gulfstream G650 for sale
          </FadeIn>
        </Styles.AircraftTrendingDetailsTitle>
        <Styles.AircraftTrendingDetailsPrice>
          <FadeIn delay={0.4} direction='left' fullWidth padding>
            Price: Please Email
          </FadeIn>
        </Styles.AircraftTrendingDetailsPrice>
      </div>
      <Slider
        imgArr={[
          <ImgComponent src={Gulfstream1} />,
          <ImgComponent src={Gulfstream2} />,
          <ImgComponent src={Gulfstream3} />,
          <ImgComponent src={Gulfstream4} />,
          <ImgComponent src={Gulfstream5} />,
          <ImgComponent src={Gulfstream6} />,
          <ImgComponent src={Gulfstream7} />,
          <ImgComponent src={Gulfstream8} />,
          <ImgComponent src={Gulfstream9} />,
        ]}
      />
      <Styles.AircraftTrendingContactFeaturesBox>
        <Styles.AircraftTrendingContactBox>
          <h3>Contact Seller</h3>
          <p>Have a question? Send the seller a quick message.</p>
          <h4>Stephen Ramsden</h4>

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
          <h3>2013 Gulfstream G650</h3>
          <Styles.AircraftTrendingMainDetailsBox>
            <Styles.AircraftTrendingMainDetailsRightBox>
              <h4>Proudly presented by</h4>
              <p>
                <Link to='https://www.globalair.com/aircraft-for-sale/listings-by-seller/aviatrade-incorporated?brokerid=10748'>
                  Corporate Aviation Holdings
                </Link>
              </p>
              <h5>Stephen Ramsden</h5>
              <p>
                40 Lake Bellevue, Suite 100 Belleview Washington (USA) 98005
              </p>
            </Styles.AircraftTrendingMainDetailsRightBox>
            <Styles.AircraftTrendingMainDetailsLeftBox>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Year:</p>
                <p>2013</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Location:</p>
                <p>Isle of Man</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Manufacturer:</p>
                <p>Gulfstream Aerospace</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Serial Number:</p>
                <p>
                  <Link to='https://www.globalair.com/ac-reg/search.aspx?serial=6354'>
                    6037
                  </Link>
                </p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Registration No:</p>
                <p>
                  <Link to='https://www.globalair.com/ac-reg/search.aspx?regnum=B-603R'>
                    M-USIK
                  </Link>
                </p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Total Time:</p>
                <p>4123 hrs</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <h6>Price:</h6>
                <h6>Please Email</h6>
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
            <p>582 Hours TT</p>
          </Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
          <Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
            <h4>Engine(s)</h4>
            <p>Engines on Rolls-Royce Corporate Care</p>
          </Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
          <Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
            <h4>APU Details</h4>
            <p>APU on Honeywell MSP</p>
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
            <p>
              Owner prepared to close in 2023 and escrow agreed funds for an
              ARCS in early 2024.
            </p>
          </div>
        </Styles.AircraftTrendingDetailsSummary>
      </Styles.AircraftTrendingDetailsFeaturesContainer>
    </Styles.AircraftTrendingDetailsContainer>
  );
};

export default TrendingAircraftSeven;
