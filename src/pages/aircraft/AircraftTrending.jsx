import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import * as Styles from './AircratfListStyles';
import { AiFillEye } from 'react-icons/ai';
import { listAllTrendingAircrafts } from '../../redux/actions/trendingAircraftActions';

const AircraftTrending = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listAllTrendingAircrafts());
  }, [dispatch]);

  const { trendingAircrafts } = useSelector((state) => state.trendingAircrafts);

  return (
    <Styles.AircraftListContainer>
      <FadeIn delay={0.2} direction='down' fullWidth>
        <h1>THE AIRCRAFT FOR SALE SHOWCASE</h1>
      </FadeIn>
      <Styles.AircraftListItemsContainer>
        {trendingAircrafts.map((item, i) => (
          <Styles.AircraftListItemsWrapper>
            <FadeIn key={i} delay={(i + 1) * 0.2} direction='left'>
              <Link to={`/aircrafts-for-sale/${item.jetId}/details`}>
                <Styles.AircraftListItemsWrapper>
                  <h4>{item.jetName}</h4>
                  <small>{item.jetType}</small>
                  <Styles.AircraftListImgBox>
                    <img src={item.jetPix} alt='' />
                  </Styles.AircraftListImgBox>
                  <p>
                    <AiFillEye />
                    {item.jetViews} <span>views per day</span>
                  </p>
                </Styles.AircraftListItemsWrapper>
              </Link>
            </FadeIn>
          </Styles.AircraftListItemsWrapper>
        ))}
      </Styles.AircraftListItemsContainer>
    </Styles.AircraftListContainer>
  );
};

export default AircraftTrending;
