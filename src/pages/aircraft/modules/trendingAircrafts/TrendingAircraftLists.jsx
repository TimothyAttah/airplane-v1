import React from 'react';
import { FadeIn } from '../../../../components/fadeIn/FadeIn';
import { Link } from 'react-router-dom';

export const TrendingAircraftLists = () => {
  return (
    <div>
      <FadeIn delay={+1 * 0.2} direction='left'>
        <Link
          to={`/aircrafts-for-sale/24410089-73f7-4d02-87ee-4f5198fe73b8/details`}
        >
          {/* <Styles.AircraftListItemsWrapper>
            <h4> 2019 GULFSTREAM G650ER</h4>
            <small>Jet Aircraft</small>
            <Styles.AircraftListImgBox>
              <img src={jet1} alt='' />
            </Styles.AircraftListImgBox>
            <p>
              <AiFillEye />
              95 <span>views per day</span>
            </p>
          </Styles.AircraftListItemsWrapper> */}
        </Link>
      </FadeIn>
    </div>
  );
};
