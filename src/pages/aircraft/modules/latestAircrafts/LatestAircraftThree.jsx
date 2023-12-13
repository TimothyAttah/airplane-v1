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
  'Avidyne Entegra Primary Color Flight Display (PFD)',
  'Avidyne EX 5000 Multifunction Display (MFD)',
  'L3 Skywatch Traffic Information',
  'L3 Stormscope Lightning Detection',
  'XM Datalink Weather XM Audio Entertainment',
  'Honeywell KGP-560 Terrain Awareness Warning System (E-TAWS)',
  'Engine & Fuel Monitoring (EMax)',
  'Electronic Approach Charts (CMax)',
  'Avidyne AMX240 Audio Panel',
  'Dual Avidyne IFD-440s',
  'Avidyne Digital DFC90 Autopilot w/ Flight Director',
  'Avidyne AXP340 ADS-B Out Transponder',
  'Avidyne Skytrax100 ADS-B In Receiver',
  'L3 Electronic Standby Instrument',
];

const LatestAircraftThree = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <Styles.AircraftTrendingDetailsContainer>
      <div>
        <Styles.AircraftTrendingDetailsTitle>
          <FadeIn delay={0.2} direction='right' fullWidth padding>
            2006 Cirrus SR22 for sale
          </FadeIn>
        </Styles.AircraftTrendingDetailsTitle>
        <Styles.AircraftTrendingDetailsPrice>
          <FadeIn delay={0.4} direction='left' fullWidth padding>
            Price: $349,000,000
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
          <h3>2006 Cirrus SR22</h3>
          <Styles.AircraftTrendingMainDetailsBox>
            <Styles.AircraftTrendingMainDetailsRightBox>
              <h4>Proudly presented by</h4>
              <p>
                <Link to='https://www.globalair.com/aircraft-for-sale/listings-by-seller/aviatrade-incorporated?brokerid=10748'>
                  Aviatrade Incorporated
                </Link>
              </p>
              <h5>Mabel Matthew</h5>
            </Styles.AircraftTrendingMainDetailsRightBox>
            <Styles.AircraftTrendingMainDetailsLeftBox>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Year:</p>
                <p>2006</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Location:</p>
                <p>Georgia (USA)</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Manufacturer:</p>
                <p>Circus Aircraft</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Serial Number:</p>
                <p>
                  <Link to='https://www.globalair.com/ac-reg/search.aspx?serial=6354'>
                    1865
                  </Link>
                </p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Registration No:</p>
                <p>
                  <Link to='https://www.globalair.com/ac-reg/search.aspx?regnum=B-603R'>
                    N411B
                  </Link>
                </p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Total Time:</p>
                <p>1840 hrs</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <h6>Price:</h6>
                <h6> $349,000,000</h6>
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
          Very Clean 2006 SR22 GTS Equipped and Loaded with Extras!! 1840
          Airframe/Engine Hours Since New. Loaded with all the options including
          Dual Avidyne IFD 440 FMS/GPS/NAV/COM, Avidyne DFC Digital Autopilot,
          Avidyne AMX240 Audio Panel, Avidyne AXP340 ADS-B Out Transponder, L3
          Electronic Standby Instrument and more! Hangared Since New with only
          two owners! Seller upgrading….bring offers! Available for immediate
          sale! Financing is available with competitive rates call us today at
          1-888-566-3686!
        </p>
      </Styles.AircraftTrendingDetailsSummary>
      <Styles.AircraftTrendingDetailsFeaturesContainer>
        <Styles.AircraftTrendingDetailsFeaturesRightContainer>
          <Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
            <h4>Airframe</h4>
            <p>1840 Flight Hours since new</p>
            <p>Always Hangared </p>
            <p>Annual – December 2023</p>
            <p>CAPS Repack Due – February 2026</p>
            <p>Basic Empty Weight - 2401 </p>
            <p>Whelen LED Wingtip Lights</p>
            <p>Alpha Systems AOA System</p>
          </Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
          <Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
            <h4>Engine(s)</h4>
            <p>1840 Hours Since New</p>
            <p>Platinum Engine – 2200 Hour</p>
            <p>TBO </p>
            <p>Airwolf Air Oil Separator</p>
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

export default LatestAircraftThree;
