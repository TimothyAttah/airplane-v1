import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { listAllTrendingAircrafts } from '../../redux/actions/trendingAircraftActions';
import { AiFillPhone, AiFillMessage } from 'react-icons/ai';
import * as Styles from './AircraftTrendingDetails';
import { FadeIn } from '../../components/fadeIn/FadeIn';

const AircraftDetails = () => {
  const dispatch = useDispatch();
  const { jetId } = useParams();

  useEffect(() => {
    dispatch(listAllTrendingAircrafts());
  }, [dispatch]);

  const trendingAircraft = useSelector((state) =>
    jetId !== null
      ? state.trendingAircrafts.trendingAircrafts.find(
          (trendingAircraft) => trendingAircraft.jetId === jetId,
        )
      : null,
  );

  console.log('trendingAircraft', trendingAircraft);

  return (
    <Styles.AircraftTrendingDetailsContainer>
      <div>
        <Styles.AircraftTrendingDetailsTitle>
          <FadeIn delay={0.2} direction='right' fullWidth padding>
            {trendingAircraft.jetName}
          </FadeIn>
        </Styles.AircraftTrendingDetailsTitle>
        <Styles.AircraftTrendingDetailsPrice>
          <FadeIn delay={0.4} direction='left' fullWidth padding>
            {trendingAircraft.jetPrice}
          </FadeIn>
        </Styles.AircraftTrendingDetailsPrice>
      </div>
      <Styles.AircraftTrendingDetailsPicsContainer>
        <Styles.AircraftTrendingDetailsMainPixContainer>
          <FadeIn delay={0.2} direction='right'>
            <img src={trendingAircraft.jetMainPic} alt='' />
          </FadeIn>
        </Styles.AircraftTrendingDetailsMainPixContainer>
        <Styles.AircraftTrendingDetailsPixContainer>
          {trendingAircraft.jetPics.map((p, i) => (
            <Styles.AircraftTrendingDetailsPixBox key={i}>
              <img src={p} alt='' />
            </Styles.AircraftTrendingDetailsPixBox>
          ))}
        </Styles.AircraftTrendingDetailsPixContainer>
      </Styles.AircraftTrendingDetailsPicsContainer>
      <Styles.AircraftTrendingContactFeaturesBox>
        <Styles.AircraftTrendingContactBox>
          <h3>Contact Seller</h3>
          <p>Have a question? Send the seller a quick message.</p>
          <h4>{trendingAircraft.name}</h4>
          <Styles.AircraftTrendingContactsBox>
            <AiFillPhone />
            <h2>call</h2>
          </Styles.AircraftTrendingContactsBox>
          <Styles.AircraftTrendingContactsBox>
            <AiFillMessage />
            <h2>Email</h2>
          </Styles.AircraftTrendingContactsBox>
        </Styles.AircraftTrendingContactBox>
        <Styles.AircraftTrendingDetailsMainWrapper>
          <h3>{trendingAircraft.jetName}</h3>
          <Styles.AircraftTrendingMainDetailsBox>
            <Styles.AircraftTrendingMainDetailsRightBox>
              <h4>Proudly presented by</h4>
              <p>
                <Link to='https://www.globalair.com/aircraft-for-sale/listings-by-seller/aviatrade-incorporated?brokerid=10748'>
                  Aviatrade Incorporated
                </Link>
              </p>
              <h5>{trendingAircraft.name}</h5>
              <p>{trendingAircraft.address}</p>
            </Styles.AircraftTrendingMainDetailsRightBox>
            <Styles.AircraftTrendingMainDetailsLeftBox>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Year:</p>
                <p>{trendingAircraft.year}</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Location:</p>
                <p>{trendingAircraft.location}</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Manufacturer:</p>
                <p>{trendingAircraft.manufacturer}</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Serial Number:</p>
                <p>
                  <Link to={trendingAircraft.serialNumber}>6354</Link>
                </p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Registration No:</p>
                <p>
                  <Link to={trendingAircraft.regNum}>B-603R</Link>
                </p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <p>Total Time:</p>
                <p>{trendingAircraft.time}</p>
              </Styles.AircraftTrendingMainDetailsOptions>
              <Styles.AircraftTrendingMainDetailsOptions>
                <h6>Price:</h6>
                <h6>{trendingAircraft.jetPrice}</h6>
              </Styles.AircraftTrendingMainDetailsOptions>
            </Styles.AircraftTrendingMainDetailsLeftBox>
          </Styles.AircraftTrendingMainDetailsBox>
        </Styles.AircraftTrendingDetailsMainWrapper>
      </Styles.AircraftTrendingContactFeaturesBox>
      <Styles.AircraftTrendingDetailsSummary>
        <h2>Summary</h2>
        <ul>
          {trendingAircraft.summary.map((s, i) => (
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
            {trendingAircraft.avionics.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
          <div>
            <h2>Maintenance Status</h2>
            <p>{trendingAircraft.status}</p>
          </div>
          <div>
            <h2>Features/Options</h2>
            <p>{trendingAircraft.features}</p>
          </div>
        </Styles.AircraftTrendingDetailsSummary>
      </Styles.AircraftTrendingDetailsFeaturesContainer>
    </Styles.AircraftTrendingDetailsContainer>
  );
};

export default AircraftDetails;
