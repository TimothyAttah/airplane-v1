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
  'Exclusive Listing',
  'Low Flight hours',
  'One owner since new',
  'Private use only',
  'Forward Galley',
  'Four zone, 17 passenger configuration',
  'RRCC and MSP',
  '2020 mandates complied with',
  'WIFI',
  'Maintenance complied with at Gulfstream authorized facilities',
  'Four single VIP club seats',
  'Three place divan opposite two single VIP club seats',
  'Four place conference table',
  'Two 3 place divans (Two each TTOL seats)',
  'Additional valuable equipment / materials included in sale',
];

export const avionicsData = [
  ' 4-Axis AFCS',
  'EFIS - 4 Screen 8.4” with embedded FMS',
  'Dual VHF COMM - Collins 4000E',
  'Dual NAV/VOR/ILS/ADF - Collins 4000',
  'Radio altimeter - ALT-4000',
  'Weather radar - RDR-2000',
  'GPS - Interfaced with EFIS/FMS',
  'Digital audio system - NAT',
  'ELT - Artex C406',
  'GPS - Moving map Euronav',
  'Synthetic vision system',
  'HTAWS',
  'Dual AHRS',
  'TCAS - TAS-620',
  'Intercom system - With cabin loudspeakers',
  'ADS-B Out compliant',
  'Transponder - Collins TDR 94',
  'ADS-B Out compliant',
  'Transponder - Collins TDR 94',
  'Dual air data computer',
  'DME',
  'ADF',
];

const LatestAircraftSix = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <Styles.AircraftTrendingDetailsContainer>
      <div>
        <Styles.AircraftTrendingDetailsTitle>
          <FadeIn delay={0.2} direction='right' fullWidth padding>
            2012 Grand New 109SP for sale
          </FadeIn>
        </Styles.AircraftTrendingDetailsTitle>
        <Styles.AircraftTrendingDetailsPrice>
          <FadeIn delay={0.4} direction='left' fullWidth padding>
            $489,000
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
          <h3>2012 Grand New 109SP</h3>
          <Styles.AircraftTrendingMainDetailsBox>
            <Styles.AircraftTrendingMainDetailsRightBox>
              <h4>Proudly presented by</h4>
              <p>
                <Link to='https://www.globalair.com/aircraft-for-sale/listings-by-seller/aviatrade-incorporated?brokerid=10748'>
                  International Aviation Marketing, Ltd
                </Link>
              </p>
              <h5>Mabel Matthew</h5>
            </Styles.AircraftTrendingMainDetailsRightBox>
            <Styles.AircraftTrendingMainDetailsLeftBox>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Year:</p>
                <p>2012</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Location:</p>
                <p>Canada</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Manufacturer:</p>
                <p>Agusta Helicopter</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Serial Number:</p>
                <p>
                  <Link to='https://www.globalair.com/ac-reg/search.aspx?serial=6354'>
                    22285
                  </Link>
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
                <p>582 hrs</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <h6>Price:</h6>
                <h6> $489,000</h6>
              </Styles.AircraftTrendingMainDetailsOptions>
            </Styles.AircraftTrendingMainDetailsLeftBox>
          </Styles.AircraftTrendingMainDetailsBox>
        </Styles.AircraftTrendingDetailsMainWrapper>
      </Styles.AircraftTrendingContactFeaturesBox>
      <Styles.AircraftTrendingDetailsSummary>
        <h2>Summary</h2>
        {/* <ul>
          {summaryData.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul> */}

        <p>
          This immaculately maintained VVIP-configured Agusta A109SP Grand New
          helicopter is available for immediate sale. With tinted cabin windows,
          pristine leather cabin seating, and baggage bay extension, this is an
          excellent option for luxury passenger transport. The aircraft has a
          comprehensive avionics package, extended-range fuel capacity, and
          low-time components and would be an attractive option for a private
          buyer or addition to a corporate transport fleet.
        </p>
      </Styles.AircraftTrendingDetailsSummary>
      <Styles.AircraftTrendingDetailsFeaturesContainer>
        {/* <Styles.AircraftTrendingDetailsFeaturesRightContainer>
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
        </Styles.AircraftTrendingDetailsFeaturesRightContainer> */}
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
            <p>Dual controls </p>
            <p>Sliding cabin doors</p>
            <p>Air conditioning</p>
            <p>Engine fire extinguishers</p>
            <p>Reinforced windshields</p>
            <p>Tailboom strake </p>
            <p>kit Baggage bay lighting</p>
            <p>Baggage bay extension </p>
            <p>Rotor brake</p>
            <p>Heating and defogging</p>
            <p>Super silent soundproofing</p>
          </div>
        </Styles.AircraftTrendingDetailsSummary>
      </Styles.AircraftTrendingDetailsFeaturesContainer>
    </Styles.AircraftTrendingDetailsContainer>
  );
};

export default LatestAircraftSix;
