import styled from 'styled-components';

export const AircraftListContainer = styled.section`
  width: 100%;

  h1,
  h2 {
    text-align: center;
    margin: 20px auto;
  }
`;
export const AircraftListItemsContainer = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  margin: 20px auto;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textColor};
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    /* margin: auto; */
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;
export const AircraftListItemsWrapper = styled.div`
  max-width: 200px;
  width: 100%;

  p {
    display: flex;
    align-items: center;
    gap: 5px;
    /* justify-content: space-between; */

    svg {
      /* padding-right: 5px; */
    }

    span {
      text-transform: uppercase;
      display: block;
      /* padding-left: 10px; */
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    margin: auto;
    width: 100%;
  }
`;
export const AircraftListImgBox = styled.div`
  width: 100%;
  height: 150px;
  margin-bottom: 5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// export const AircraftListContainer = styled.section``;
// export const AircraftListContainer = styled.section``;
// export const AircraftListContainer = styled.section``;
// export const AircraftListContainer = styled.section``;
// export const AircraftListContainer = styled.section``;
