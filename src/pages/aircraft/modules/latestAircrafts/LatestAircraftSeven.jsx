import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Styles from './AircraftTrendingDetails';
import { FadeIn } from '../../../../components/fadeIn/FadeIn';
import gulf6501 from '../../../../assets/pix1.JPG';

import Slider from '../../../../components/slider/Slider';
import { ImgComponent } from '../../../../components/slider/ImgComponent';
import { Backdrop } from '../../../../components/Backdrop';
import { Contact } from '../../../../components/contact/Contact';
import { RiMailLine } from 'react-icons/ri';

export const summaryData = [
  'Off Market',
  'One Corporate Owner Since New – Excellent Pedigree',
  'Low Time for Vintage – 2,547 Total Hours',
  'Fully Enrolled on Programs',
  'Rockwell Collins Pro Line 21 Advanced Cockpit',
  'FANS 1/A over Iridium, CPDLC, WAAS, LPV, RNP-AR, Link 2000+, ADS-B Out',
  'Synthetic Vision System',
  'Dual Integrated Flight Information System (IFIS) with Electronic Charts',
  'Gogo AVANCE L5 Broadband Wi-Fi Internet',
  'Delivered with Fresh 12/24/48 Month Inspection',
  'Contact us to learn more about this exceptional aircraft.',
];

export const avionicsData = [
  '4 Honeywell DU-1310 EFIS',
  '3 Honeywell CDU',
  '3 Honeywell LASEREF VI IRS',
  '2 Honeywell GPS',
  '2 Honeywell DM-855 DME',
  '1 Gulfstream HGS-6250 HUD',
  '1 KollsmaEVS',
  '2 Honeywell DF-855 ADF',
  '2 Honeywell AH-1000 AHRS',
  '1 Honeywell NC-860A VHF COM',
  '2 Honeywell TR-865A VHF COM',
  '2 Collins HF-9034A w/SECAL HF COM',
  '1 Honeywell MCS-7120 SATCOM',
  '1 Honeywell TR-1 WRADAR',
  '2 Honeywell Mode S XPNDR',
  '1 Honeywell TCAS II w/change7.1 TCAS',
  '2 Honeywell EGP-100 GPWS',
  '1 Universal CVR-120R CVR',
  '1 Universal FDR-25 FDR',
  '1 Honeywell LP-860 LSS',
];

const LatestAircraftSeven = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <Styles.AircraftTrendingDetailsContainer>
      <div>
        <Styles.AircraftTrendingDetailsTitle>
          <FadeIn delay={0.2} direction='right' fullWidth padding>
            2012 Challenger 300 for sale
          </FadeIn>
        </Styles.AircraftTrendingDetailsTitle>
        <Styles.AircraftTrendingDetailsPrice>
          <FadeIn delay={0.4} direction='left' fullWidth padding>
            $75,000,000
          </FadeIn>
        </Styles.AircraftTrendingDetailsPrice>
      </div>
      <Slider imgArr={[<ImgComponent src={gulf6501} />]} />
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
          <h3>2012 Challenger 300</h3>
          <Styles.AircraftTrendingMainDetailsBox>
            <Styles.AircraftTrendingMainDetailsRightBox>
              <h4>Proudly presented by</h4>
              <p>
                <Link to='#'>Owner Jet Sales</Link>
              </p>
              <h5>Sullivan Stapleton</h5>
            </Styles.AircraftTrendingMainDetailsRightBox>
            <Styles.AircraftTrendingMainDetailsLeftBox>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Year:</p>
                <p>2012</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Location:</p>
                <p>USA</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Manufacturer:</p>
                <p>Bombardier</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Serial Number:</p>
                {/* <p>
                  <Link to='https://www.globalair.com/ac-reg/search.aspx?serial=6354'>
                    6354
                  </Link>
                </p> */}
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
                <p>2547 hrs</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <h6>Price:</h6>
                <h6>$75,000,000</h6>
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
      {/* <Styles.AircraftTrendingDetailsFeaturesContainer>
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
      </Styles.AircraftTrendingDetailsFeaturesContainer> */}
    </Styles.AircraftTrendingDetailsContainer>
  );
};

export default LatestAircraftSeven;
