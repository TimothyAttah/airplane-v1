import { LATEST_AIRCRAFT } from '../types';

import jet9 from '../../assets/jet9.jpg';
import jet10 from '../../assets/jet10.jpg';
import jet11 from '../../assets/jet11.jpg';
import jet12 from '../../assets/jet12.jpg';
import jet13 from '../../assets/jet13.jpg';
import jet14 from '../../assets/jet14.jpg';
import jet15 from '../../assets/jet15.jpg';
import jet16 from '../../assets/jet16.png';

const initialState = {
  latestAircrafts: [
    {
      jetName: '2009 Cessna 182T',
      jetType: 'Skylane',
      jetPix: jet9,
      jetPrice: '$489,000',
      jetId: '3c0cc1ba-320f-4c16-b976-c1c867a7650a1',
    },
    {
      jetName: '1967 Cessna 172-180 HP',
      jetType: 'Floatplane',
      jetPix: jet10,
      jetPrice: '$103,000',
      jetId: '3c0cc1ba-320f-4c16-b976-c1c867a7650a2',
    },
    {
      jetName: '1974 Cessna 172',
      jetType: 'Single Engine Aircraft',
      jetPix: jet11,
      jetPrice: 'Please Email',
      jetId: '3c0cc1ba-320f-4c16-b976-c1c867a7650a3',
    },
    {
      jetName: '1975 Warrior PA-28-151',
      jetType: 'Ly-Con STC 160 Hp',
      jetPix: jet12,
      jetPrice: '$81,000',
      jetId: '3c0cc1ba-320f-4c16-b976-c1c867a7650a4',
    },
    {
      jetName: '2007 Agusta A119',
      jetType: 'Helicopters',
      jetPix: jet13,
      jetPrice: 'Please Email',
      jetId: '3c0cc1ba-320f-4c16-b976-c1c867a7650a5',
    },
    {
      jetName: '1982 Nanchang CJ-6A',
      jetType: 'Warbirds',
      jetPix: jet14,
      jetPrice: 'Please Email',
      jetId: '3c0cc1ba-320f-4c16-b976-c1c867a7650a6',
    },
    {
      jetName: '2019 Cirrus SR22T G6',
      jetType: 'GTS',
      jetPix: jet15,
      jetPrice: '$775,000',
      jetId: '3c0cc1ba-320f-4c16-b976-c1c867a7650a7',
    },
    {
      jetName: '1964 Orion P3',
      jetType: 'Warbirds',
      jetPix: jet16,
      jetPrice: 'Please Email',
      jetId: '3c0cc1ba-320f-4c16-b976-c1c867a7650a8',
    },
  ],
};

export const latestAircrafts = (state = initialState, action) => {
  switch (action.type) {
    case LATEST_AIRCRAFT.LISTS_ALL_AIRCRAFTS:
      return {
        ...state,
      };

    case LATEST_AIRCRAFT.LIST_ONE_AIRCRAFT:
      return {
        ...state,
        latestAircrafts: state.latestAircrafts.map((latestAircraft) =>
          latestAircraft.jetId === action.payload.id
            ? action.payload
            : latestAircraft,
        ),
      };

    default:
      return {
        ...state,
      };
  }
};
