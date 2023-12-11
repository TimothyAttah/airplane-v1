import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.textLight};
  border-radius: 5px;
  margin-top: 50px;

  small {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 30px;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 20px;

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    flex-direction: column;
  }
`;

export const FooterRightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const FooterAboutUsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 100%;

  p {
    font-size: 18px;
    padding-top: 10px;
  }
  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    text-align: center;
  }
`;
export const FooterQuickLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

export const FooterQuickLinksListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 10px;

  li {
    a {
      color: ${({ theme }) => theme.colors.textLight};
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

export const FooterLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;

  p {
    font-size: 18px;
    padding: 10px 0;
  }

  h5 {
    font-size: 18px;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }
`;
