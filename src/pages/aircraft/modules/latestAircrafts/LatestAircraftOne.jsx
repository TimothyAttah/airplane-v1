import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Styles from './AircraftTrendingDetails';
import { FadeIn } from '../../../../components/fadeIn/FadeIn';

import bravo1 from '../../../../assets/130492_01_CitationBravo_sn550-0993-Ext1.jpg';
import bravo2 from '../../../../assets/130492_01_CitationBravo_sn550-0993-Ext2.jpg';
import bravo3 from '../../../../assets/130492_01_CitationBravo_sn550-0993-Ext3.jpg';
import bravo4 from '../../../../assets/130492_01_CitationBravo_sn550-0993-Ext4.jpg';
import bravo5 from '../../../../assets/130492_01_CitationBravo_sn550-0993-Ext5.jpg';
import bravo6 from '../../../../assets/130492_01_CitationBravo_sn550-0993-Ext6.jpg';
import bravo7 from '../../../../assets/130492_01_CitationBravo_sn550-0993-Int1.jpg';
import bravo8 from '../../../../assets/130492_01_CitationBravo_sn550-0993-Int2.jpg';
import bravo9 from '../../../../assets/130492_01_CitationBravo_sn550-0993-Int3.jpg';
import bravo10 from '../../../../assets/130492_01_CitationBravo_sn550-0993-Int4.jpg';
import bravo11 from '../../../../assets/130492_01_CitationBravo_sn550-0993-Int5.jpg';
import bravo12 from '../../../../assets/130492_01_CitationBravo_sn550-0993-Pan1.jpg';

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
  'Honeywell PRIMUS1000 Integrated Avionics System with Integral FMS',
  'ADS-B IN & OUT',
  'Dual Garmin GTN 750XI (JETTECH STC)',
  'Garmin Audio Panel',
  'Garmin GTX-345R Transponder',
  'Garmin GTX-335R Transponder',
  'Fairchild A200S CVR',
  'Honeywell CD-820 Control Display Unit',
  'GH 3000 Electric Standby Instrument',
  'Honeywell MD-441 DME',
  'Dual Honeywell KN-53 w/FM Immunity',
  'Honeywell AA-300 Radar Altimeter',
  'Allied Signal Enhanced EGPWS',
  'M877 Chronometer',
  'Honeywell Primus 660 Color Radar',
  'Dual Honeywell AZ-850 Air Data Computers',
];

const LatestAircraftOne = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <Styles.AircraftTrendingDetailsContainer>
      <div>
        <Styles.AircraftTrendingDetailsTitle>
          <FadeIn delay={0.2} direction='right' fullWidth padding>
            2001 Citation Bravo for sale
          </FadeIn>
        </Styles.AircraftTrendingDetailsTitle>
        <Styles.AircraftTrendingDetailsPrice>
          <FadeIn delay={0.4} direction='left' fullWidth padding>
            Price: $48,000,000
          </FadeIn>
        </Styles.AircraftTrendingDetailsPrice>
      </div>
      <Slider
        imgArr={[
          <ImgComponent src={bravo1} />,
          <ImgComponent src={bravo2} />,
          <ImgComponent src={bravo3} />,
          <ImgComponent src={bravo4} />,
          <ImgComponent src={bravo5} />,
          <ImgComponent src={bravo6} />,
          <ImgComponent src={bravo7} />,
          <ImgComponent src={bravo8} />,
          <ImgComponent src={bravo9} />,
          <ImgComponent src={bravo10} />,
          <ImgComponent src={bravo11} />,

          <ImgComponent src={bravo12} />,
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
          <h3> 2001 Citation Bravo</h3>
          <Styles.AircraftTrendingMainDetailsBox>
            <Styles.AircraftTrendingMainDetailsRightBox>
              <h4>Proudly presented by</h4>
              <p>
                <Link to='#'>International Aircraft Marketing & Sales</Link>
              </p>
              <h5>Sullivan Stapleton</h5>
            </Styles.AircraftTrendingMainDetailsRightBox>
            <Styles.AircraftTrendingMainDetailsLeftBox>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Year:</p>
                <p>2019</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Location:</p>
                <p>Florida (USA)</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Manufacturer:</p>
                <p>Cessna</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Serial Number:</p>
                <p>
                  <Link to='#'>550-0993</Link>
                </p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Registration No:</p>
                <p>
                  <Link to='#'>N721T</Link>
                </p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Total Time:</p>
                <p>3632 hrs</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <h6>Price:</h6>
                <h6> $48,000,000</h6>
              </Styles.AircraftTrendingMainDetailsOptions>
            </Styles.AircraftTrendingMainDetailsLeftBox>
          </Styles.AircraftTrendingMainDetailsBox>
        </Styles.AircraftTrendingDetailsMainWrapper>
      </Styles.AircraftTrendingContactFeaturesBox>
      {/* <Styles.AircraftTrendingDetailsSummary>
        <h2>Summary</h2>
        <ul>
          {summaryData.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </Styles.AircraftTrendingDetailsSummary> */}
      <Styles.AircraftTrendingDetailsFeaturesContainer>
        <Styles.AircraftTrendingDetailsFeaturesRightContainer>
          <Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
            <h4>Airframe</h4>
            <p>TLSN: 2,801</p>
            <p>TTSN: 3,632 </p>
          </Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
          <Styles.AircraftTrendingDetailsFeaturesRightDetailsBox>
            <h4>Engine(s)</h4>
            <p>TTSN: 3,632 / 3,632</p>
            <p>Pratt & Whitney 530A Series </p>
            <p>TCSN: 2,801 / 2,801 </p>
            <p>SN: PCEDA0398 / PCEDA0399</p>
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
            <p>Rosen Sunvisors </p>
            <p>Precise Light Pulse Lighting</p>
            <p>Safeflight N1 Reminder System</p>
            <p>B&D 15000 Cabin Information Display</p>
          </div>
        </Styles.AircraftTrendingDetailsSummary>
      </Styles.AircraftTrendingDetailsFeaturesContainer>
    </Styles.AircraftTrendingDetailsContainer>
  );
};

export default LatestAircraftOne;
