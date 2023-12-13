import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Styles from './AircraftTrendingDetails';
import { FadeIn } from '../../../../components/fadeIn/FadeIn';
import ember2004 from '../../../../assets/2004-Embraer.jpg';
import Slider from '../../../../components/slider/Slider';
import { ImgComponent } from '../../../../components/slider/ImgComponent';
import { Backdrop } from '../../../../components/Backdrop';
import { Contact } from '../../../../components/contact/Contact';
import { RiMailLine } from 'react-icons/ri';

export const summaryData = [
  'Rolls Royce Engines Model: AE3007A1 Engine 1 CAE 312464 16512.5 SNEW 13869 Cycles SNEW ',
  '1214.28 Hours since last shop visit 1104 Cycles Since Last Shop visit Engine ',
  '2 CAE 312552 14462.5 SNEW 12100 Cycles SNEW 3690.5 Hours since last shop',
  'visit 3483 Cycles Since Last Shop visit APU SP - E0414659 16051 TT SNEW ,21139 CYCLES SNEW',
  'Purchase: $3.9m ready to go, painted white, fresh C/Checks…new landing gear!',
  'Dry Lease: 4 months deposit, 36-48 month term, $60k-$65k/month.',
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

const TrendingAircraftThree = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <Styles.AircraftTrendingDetailsContainer>
      <div>
        <Styles.AircraftTrendingDetailsTitle>
          <FadeIn delay={0.2} direction='right' fullWidth padding>
            2004 Embraer ERJ-145LR for sale
          </FadeIn>
        </Styles.AircraftTrendingDetailsTitle>
        <Styles.AircraftTrendingDetailsPrice>
          <FadeIn delay={0.4} direction='left' fullWidth padding>
            Price: $38,040,000
          </FadeIn>
        </Styles.AircraftTrendingDetailsPrice>
      </div>
      <Slider imgArr={[<ImgComponent src={ember2004} />]} />
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
          <h3>2004 Embraer ERJ-145LR</h3>
          <Styles.AircraftTrendingMainDetailsBox>
            <Styles.AircraftTrendingMainDetailsRightBox>
              <h4>Proudly presented by</h4>
              <p>
                <Link to='#'>The Jet Network</Link>
              </p>
              <h5>Sullivan Stapleton</h5>
              <p>
                1100 Lee Wagener Blvd., Suite #211 Fort Lauderdale Florida (USA)
                33315
              </p>
            </Styles.AircraftTrendingMainDetailsRightBox>
            <Styles.AircraftTrendingMainDetailsLeftBox>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Year:</p>
                <p>2004</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Location:</p>
                <p>Florida (USA)</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Manufacturer:</p>
                <p>Embraer</p>
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
                <p>19657 hrs</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <h6>Price:</h6>
                <h6>$38,040,000 </h6>
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
        {/* <Styles.AircraftTrendingDetailsSummary>
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
        </Styles.AircraftTrendingDetailsSummary> */}
      </Styles.AircraftTrendingDetailsFeaturesContainer>
    </Styles.AircraftTrendingDetailsContainer>
  );
};

export default TrendingAircraftThree;
