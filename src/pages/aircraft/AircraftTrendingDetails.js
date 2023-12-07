import styled from 'styled-components';

export const AircraftTrendingDetailsContainer = styled.section`
  width: 100%;
`;
export const AircraftTrendingDetailsTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 40px;
  text-transform: uppercase;
  line-height: 50px;

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    font-size: 30px;
    line-height: 40px;
  }
`;
export const AircraftTrendingDetailsPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 30px;
  text-transform: uppercase;
  line-height: 50px;
`;
export const AircraftTrendingDetailsPicsContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    flex-direction: column;
  }
`;
export const AircraftTrendingDetailsMainPixContainer = styled.div`
  max-width: 600px;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export const AircraftTrendingDetailsPixContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-wrap: wrap; */
  margin: 20px auto;

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    flex-wrap: nowrap;

    /* justify-content: space-around; */
    /* border: 2px solid blue; */
  }
`;

export const AircraftTrendingDetailsPixBox = styled.div`
  img {
    width: 100%;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    max-width: 150px;
    width: 100%;
    flex-wrap: nowrap;

    margin: 0 10px;

    /* justify-content: space-around; */
    /* border: 2px solid blue; */
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    max-width: 200px;
    margin: 0 2px;
  }
`;

export const AircraftTrendingContactFeaturesBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  margin-top: 50px;

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    flex-direction: column;
  }
`;

export const AircraftTrendingContactBox = styled.div`
  max-width: 260px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;

  text-align: center;
  padding: 30px 10px;

  p {
    margin: 20px 0;
  }

  h4 {
    margin-bottom: 50px;
  }
`;

export const AircraftTrendingContactsBox = styled.div`
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
  margin: 15px 0;
  cursor: pointer;

  h2 {
    font-size: 30px;
    text-transform: uppercase;
  }

  svg {
    font-size: 30px;
  }
`;

export const AircraftTrendingDetailsMainWrapper = styled.div`
  flex: 1;
  width: 100%;
  margin: 40px 0;
  /* border: 1px solid #ccc; */
  /* padding: 10px; */
  border-radius: 10px;

  h3:first-child {
    /* padding: 10px 0; */
    border-top: thin #333333 solid;
    padding: 0.75rem 1.25rem;
    margin-bottom: 0;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.03);
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.125); */
    box-shadow: none !important;
    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
  }
`;

export const AircraftTrendingMainDetailsBox = styled.div`
  /* margin: 40px 0; */
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 0.75rem 1.25rem;
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    flex-direction: column;
  }
`;

export const AircraftTrendingMainDetailsRightBox = styled.div`
  p {
    font-size: 18px;
    font-weight: 10px;
    margin: 5px 0;
  }

  h4,
  h5 {
    font-size: 20px;
  }

  p {
    a {
      display: flex;
      margin-bottom: 20px;
      color: #007bff;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    p {
      font-size: 12px;
    }

    h4,
    h5 {
      font-size: 15px;
    }
  }
`;
export const AircraftTrendingMainDetailsLeftBox = styled.div``;

export const AircraftTrendingMainDetailsOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  p {
    font-size: 18px;
    font-weight: 10px;
    margin: 5px 0;
  }

  p:last-child,
  h6:last-child {
    width: 200px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    a {
      color: #007bff;
    }
  }

  h6 {
    font-size: 30px;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    p:last-child,
    h6:last-child {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    h6 {
      font-size: 20px;
    }
  }
`;
export const AircraftTrendingDetailsSummary = styled.div`
  padding: 0.75rem 1.25rem;

  h2 {
    padding: 10px 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;
export const AircraftTrendingDetailsFeaturesContainer = styled.div`
  max-width: 750px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const AircraftTrendingDetailsFeaturesRightContainer = styled.div`
  /* border: 2px solid red; */
`;
export const AircraftTrendingDetailsFeaturesRightDetailsBox = styled.div`
  margin: 10px 0 40px 0;
  h4 {
    /* padding: 10px 0; */
    border-top: thin #333333 solid;
    padding: 0.75rem 1.25rem;
    margin-bottom: 0;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.03);
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.125); */
    box-shadow: none !important;
    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
  }

  p {
    border: 1px solid rgba(0, 0, 0, 0.125);
    padding: 0.75rem 1.25rem;
    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    display: none;
  }
`;

// export const AircraftTrendingDetailsContainer = styled.section``;
// export const AircraftTrendingDetailsContainer = styled.section``;
// export const AircraftTrendingDetailsContainer = styled.section``;
// export const AircraftTrendingDetailsContainer = styled.section``;
// export const AircraftTrendingDetailsContainer = styled.section``;
// export const AircraftTrendingDetailsContainer = styled.section``;
// export const AircraftTrendingDetailsContainer = styled.section``;
