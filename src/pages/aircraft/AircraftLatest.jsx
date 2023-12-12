import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { listAllLatestAircrafts } from '../../redux/actions/latestAircraftActions';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import * as Styles from './AircratfListStyles';

const AircraftLatest = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listAllLatestAircrafts());
  }, [dispatch]);

  const { latestAircrafts } = useSelector((state) => state.latestAircrafts);

  return (
    <Styles.AircraftListContainer>
      <FadeIn delay={0.2} direction='right'>
        <h2>LATEST AIRPLANE/AIRCRAFT FOR SALE LISTINGS</h2>
      </FadeIn>
      <Styles.AircraftListItemsContainer>
        {latestAircrafts.map((item, i) => (
          <Styles.AircraftListItemsWrapper>
            <FadeIn key={i} delay={(i + 1) * 0.2} direction='left'>
              <Link to={`/aircrafts-for-sale/${item.jetId}/latest/details`}>
                <Styles.AircraftListItemsWrapper>
                  <h4>{item.jetName}</h4>
                  <small>{item.jetType}</small>
                  <Styles.AircraftListImgBox>
                    <img src={item.jetPix} alt='' />
                  </Styles.AircraftListImgBox>
                  <p>{item.jetPrice}</p>
                </Styles.AircraftListItemsWrapper>
              </Link>
            </FadeIn>
          </Styles.AircraftListItemsWrapper>
        ))}
      </Styles.AircraftListItemsContainer>
    </Styles.AircraftListContainer>
  );
};

export default AircraftLatest;
