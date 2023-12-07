import { combineReducers } from 'redux';
import { trendingAircrafts } from './trendingAircraftReducer';
import { latestAircrafts } from './latestAircraft';

export const reducers = combineReducers({
  trendingAircrafts,
  latestAircrafts,
});
