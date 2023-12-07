import styled from 'styled-components';

export const AircraftContainer = styled.section`
  margin-top: 80px;
`;

export const AircraftTittleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  h2 {
    font-size: 30px;
    font-weight: normal;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.textColor};
  }

  button {
    background-color: ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.textLight};
    width: 250px;
    height: 40px;
    font-size: 16px;
    border-radius: 5px;
    text-transform: uppercase;
    /* margin-top: 50px; */
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    flex-direction: column;
    margin: auto;

    h2 {
      font-size: 25px;
      line-height: 20px;
      text-align: center;
      margin: 0px auto;
    }

    button {
      width: 250px;
      height: 40px;
      font-size: 16px;
      margin: 20px auto;
    }
  }
`;

export const AircraftImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${({ theme }) => theme.screens.largeSize}) {
    flex-direction: column;
    margin: auto;
  }
`;
export const AircraftLeftImgBox = styled.div`
  position: relative;
  max-width: 730px;
  width: 100%;
  /* height: 530px; */
  border-radius: 10px;
  box-shadow: 7px 7px 5px 0 rgba(50, 50, 50, 0.75);
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  .viewBtn {
    display: none;
    position: absolute;
    right: 0;
    bottom: 10px;
  }

  :hover {
    ul {
      display: block;
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      transition: all 0.3s;
      -webkit-transition: all 0.3s;
      color: ${({ theme }) => theme.colors.textLight};
    }
    button {
      display: block;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.largeSize}) {
    /* flex-direction: column; */
    margin: auto;
  }
`;
export const AircraftRightImgBox = styled.div`
  /* position: relative; */
  max-width: 750px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;

  @media screen and (max-width: ${({ theme }) => theme.screens.largeSize}) {
    /* flex-direction: column; */
    margin: 20px auto;
  }
`;

export const AircraftSmallImgBox = styled.div`
  position: relative;
  max-width: 340px;
  width: 100%;
  cursor: pointer;
  transition: 3s all;
  box-shadow: 7px 7px 5px 0 rgba(50, 50, 50, 0.75);
  border-radius: 10px;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: 2s ease-in-out all;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
  }

  :hover {
    ul {
      display: block;
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      transition: all 0.3s;
      -webkit-transition: all 0.3s;
    }
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
  }
`;

export const AircraftLabel = styled.div`
  position: absolute;
  left: 10px;
  bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: ${({ theme }) => theme.colors.textLight};
  transition: 2s ease-in-out all;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;

  button {
    background-color: ${({ theme }) => theme.colors.textColor};
    color: ${({ theme }) => theme.colors.textLight};
    width: 120px;
    height: 35px;
    font-size: 10px;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: bold;
    transition: 2s ease-in-out all;

    /* margin-top: 50px; */
  }

  h5 {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 18px;
    transition: 2s ease-in-out all;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
  }

  ul {
    display: none;
    transition: 2s ease-in-out all;
    opacity: 0;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
  }
`;
// export const AircraftContainer = styled.section``;
