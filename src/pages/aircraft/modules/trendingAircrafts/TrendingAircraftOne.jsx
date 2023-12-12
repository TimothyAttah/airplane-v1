import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Styles from './AircraftTrendingDetails';
import { FadeIn } from '../../../../components/fadeIn/FadeIn';
import gulf191 from '../../../../assets//gulf-19-1.jpg';
import gulf192 from '../../../../assets//gulf-19-2.jpg';
import gulf193 from '../../../../assets//gulf-19-3.jpg';
import gulf194 from '../../../../assets//gulf-19-4.jpg';
import gulf195 from '../../../../assets//gulf-19-5.jpg';
import Slider from '../../../../components/slider/Slider';
import { ImgComponent } from '../../../../components/slider/ImgComponent';
import { Backdrop } from '../../../../components/Backdrop';
import { Contact } from '../../../../components/contact/Contact';
import { RiMailLine } from 'react-icons/ri';

export const summaryData = [
  'Contact For More Info.',
  'OWNER FINANCING AVAILABLE',
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

const TrendingAircraftOne = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <Styles.AircraftTrendingDetailsContainer>
      <div>
        <Styles.AircraftTrendingDetailsTitle>
          <FadeIn delay={0.2} direction='right' fullWidth padding>
            1985 Gulfstream III for sale
          </FadeIn>
        </Styles.AircraftTrendingDetailsTitle>
        <Styles.AircraftTrendingDetailsPrice>
          <FadeIn delay={0.4} direction='left' fullWidth padding>
            Price: $1,100,000
          </FadeIn>
        </Styles.AircraftTrendingDetailsPrice>
      </div>
      <Slider
        imgArr={[
          <ImgComponent src={gulf191} />,
          <ImgComponent src={gulf192} />,
          <ImgComponent src={gulf193} />,
          <ImgComponent src={gulf194} />,
          <ImgComponent src={gulf195} />,
        ]}
      />
      <Styles.AircraftTrendingContactFeaturesBox>
        <Styles.AircraftTrendingContactBox>
          <h3>Contact Seller</h3>
          <p>Have a question? Send the seller a quick message.</p>
          <h4>Robert Vidal</h4>

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
          <h3> 1985 Gulfstream III</h3>
          <Styles.AircraftTrendingMainDetailsBox>
            <Styles.AircraftTrendingMainDetailsRightBox>
              <h4>Proudly presented by</h4>
              <p>
                <Link to='https://www.globalair.com/aircraft-for-sale/listings-by-seller/aviatrade-incorporated?brokerid=10748'>
                  Langley Aviation
                </Link>
              </p>
              <h5>Robert Vidal</h5>
              <p>88 East Main St Mendham New Jersey (USA) 07945</p>
            </Styles.AircraftTrendingMainDetailsRightBox>
            <Styles.AircraftTrendingMainDetailsLeftBox>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Year:</p>
                <p>1985</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Location:</p>
                {/* <p>China</p> */}
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Manufacturer:</p>
                <p>Gulfstream Aerospace</p>
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
                <p>7694 hrs</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <h6>Price:</h6>
                <h6>$1,100,000</h6>
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
            <p>TOTAL TIME 7690 hours </p>
            <p>TOTAL LANDINGS 5439</p>
          </Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
          <Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
            <h4>Engine(s)</h4>
            <p>7690 HOURS TOTAL TIME</p>
          </Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
          <Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
            <h4>APU Details</h4>
            <p>Garrett CTCP36-100G</p>
          </Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
        </Styles.AircraftTrendingDetailsFeaturesRightContainer>
        <Styles.AircraftTrendingDetailsSummary>
          {/* <h2>Avionics</h2>
          <ul>
            {avionicsData.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul> */}
          <div>
            <h2>Interior Details</h2>
            <p>Interior updated in Oct 2023</p>
          </div>
          <div>
            <h2>Features/Options</h2>
            <p>72-month inspection C/W 06/2021</p>
          </div>
        </Styles.AircraftTrendingDetailsSummary>
      </Styles.AircraftTrendingDetailsFeaturesContainer>
    </Styles.AircraftTrendingDetailsContainer>
  );
};

export default TrendingAircraftOne;
