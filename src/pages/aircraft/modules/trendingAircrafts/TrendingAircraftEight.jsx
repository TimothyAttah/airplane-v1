import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Styles from './AircraftTrendingDetails';
import { FadeIn } from '../../../../components/fadeIn/FadeIn';
import kingAir1 from '../../../../assets/130285_99_KingAirB200_snBB-1663-Ext1.jpg';
import kingAir2 from '../../../../assets/130285_99_KingAirB200_snBB-1663-Int1.jpg';
import kingAir3 from '../../../../assets/130285_99_KingAirB200_snBB-1663-Int2.jpg';
import kingAir4 from '../../../../assets/130285_99_KingAirB200_snBB-1663-Int3.jpg';
import kingAir5 from '../../../../assets/130285_99_KingAirB200_snBB-1663-Int4.jpg';
import kingAir6 from '../../../../assets/130285_99_KingAirB200_snBB-1663-Int5.jpg';
import kingAir7 from '../../../../assets/130285_99_KingAirB200_snBB-1663-Int6.jpg';
import kingAir8 from '../../../../assets/130285_99_KingAirB200_snBB-1663-Int7.jpg';
import kingAir9 from '../../../../assets/130285_99_KingAirB200_snBB-1663-Int8.jpg';
import kingAir10 from '../../../../assets/130285_99_KingAirB200_snBB-1663-Pan1.jpg';
import kingAir11 from '../../../../assets/130285_99_KingAirB200_snBB-1663-Pan2.jpg';

import Slider from '../../../../components/slider/Slider';
import { ImgComponent } from '../../../../components/slider/ImgComponent';
import { Backdrop } from '../../../../components/Backdrop';
import { Contact } from '../../../../components/contact/Contact';
import { RiMailLine } from 'react-icons/ri';

export const summaryData = [
  ' New!! Garmin G1000 NXi Platinum Avionics Suite w/Autoland',
  'BLR Winglets',
  'Dual Aft Jump Seats',
  'Recent Phase 1-4 Inspections',
  'Recent Prop Overhauls',
  'Recent Landing Gear Overhaul',
];

export const avionicsData = [
  'Garmin G1000 NXi',
  'G1000 NXi Platinum Package',
  'Garmin Surface Watch',
  'Garmin GTS 825 TIS',
  'Collins DME-42',
  'LumaTechnologies LED Annunciators',
  'Gear LED annunciator',
  'Garmin AutoThrottle',
  'G1000 AutoLand',
];

const TrendingAircraftEight = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <Styles.AircraftTrendingDetailsContainer>
      <div>
        <Styles.AircraftTrendingDetailsTitle>
          <FadeIn delay={0.2} direction='right' fullWidth padding>
            1999 King Air B200 for sale
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
          <ImgComponent src={kingAir1} />,
          <ImgComponent src={kingAir2} />,
          <ImgComponent src={kingAir3} />,
          <ImgComponent src={kingAir4} />,
          <ImgComponent src={kingAir5} />,
          <ImgComponent src={kingAir6} />,
          <ImgComponent src={kingAir7} />,
          <ImgComponent src={kingAir8} />,
          <ImgComponent src={kingAir9} />,
          <ImgComponent src={kingAir10} />,
          <ImgComponent src={kingAir11} />,
        ]}
      />
      <Styles.AircraftTrendingContactFeaturesBox>
        <Styles.AircraftTrendingContactBox>
          <h3>Contact Seller</h3>
          <p>Have a question? Send the seller a quick message.</p>
          <h4>Tim Layton</h4>

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
          <h3>1999 King Air B200</h3>
          <Styles.AircraftTrendingMainDetailsBox>
            <Styles.AircraftTrendingMainDetailsRightBox>
              <h4>Proudly presented by</h4>
              <p>
                <Link to='https://www.globalair.com/aircraft-for-sale/listings-by-seller/aviatrade-incorporated?brokerid=10748'>
                  Pollard Aircraft Sales, Inc.
                </Link>
              </p>
              <h5>Tim Layton</h5>
              {/* <p>88 East Main St Mendham New Jersey (USA) 07945</p> */}
            </Styles.AircraftTrendingMainDetailsRightBox>
            <Styles.AircraftTrendingMainDetailsLeftBox>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Year:</p>
                <p>1999</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Location:</p>
                <p>Texas (USA)</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Manufacturer:</p>
                <p>Beechcraft</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Serial Number:</p>
                <p>
                  <Link to='https://www.globalair.com/ac-reg/search.aspx?serial=6354'>
                    BB-1663
                  </Link>
                </p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Registration No:</p>
                <p>
                  <Link to='https://www.globalair.com/ac-reg/search.aspx?regnum=B-603R'>
                    N720AM
                  </Link>
                </p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Total Time:</p>
                <p>5102 hrs</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <h6>Price:</h6>
                <h6>Please Email </h6>
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
            <p>TTSN: 5,102.8</p>
            <p>TCSN: 6,950</p>
          </Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
          <Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
            <h4>Engine(s)</h4>
            <p>Pratt & Whitney PT6A-42</p>
            <p>TTSN: 5,102.8 / 5,102.8</p>
            <p>TCSN: 6,950 / 6,950</p>
            <p>SN: PCE-PJ0290 / PCE-PJ0291</p>
          </Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
          <Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
            <h4>Prop Details</h4>
            <p>Hartzell HC-E4N-3G</p>
            <p>SN: HH-1553 / HH-2550</p>
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

export default TrendingAircraftEight;
