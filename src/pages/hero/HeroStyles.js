import styled from 'styled-components';

export const HeroContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    flex-direction: column-reverse;
  }
`;
export const HeroTextContainer = styled.div`
  flex: 1;
  max-width: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    max-width: 500px;
    font-size: 50px;
    span {
      color: ${({ theme }) => theme.colors.mainColor};
    }
  }

  p {
    max-width: 500px;
    line-height: 25px;
    margin: 20px 0;
  }

  button {
    background-color: ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.textLight};
    width: 150px;
    height: 50px;
    font-size: 18px;
    border-radius: 10px;
    margin-top: 50px;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    margin: 0 auto;

    h1,
    p {
      max-width: 750px;
      text-align: center;
    }

    button {
      margin: auto;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    h1 {
      font-size: 30px;
    }

    button {
      height: 30px;
      font-size: 15px;
      border-radius: 5px;
    }
  }
`;
export const HeroImgContainer = styled.div`
  max-width: 750px;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.largeSize}) {
    max-width: 500px;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    max-width: 750px;
    margin: 0 auto;
  }
`;
// export const HeroContainer = styled.section``;
// export const HeroContainer = styled.section``;
// export const HeroContainer = styled.section``;
