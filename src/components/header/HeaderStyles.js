import styled from 'styled-components';

export const MainHeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  height: 80px;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-shadow: 7px 7px 5px 0 rgba(50, 50, 50, 0.75);
  background: #fff;
  z-index: 99;

  h1 {
    font-size: 40px;
    color: ${({ theme }) => theme.colors.textColor};
    span {
      color: ${({ theme }) => theme.colors.mainColor};
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    h1 {
      font-size: 32px;
    }
  }
`;

export const HeaderNavLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  transition: 0.2s ease all;

  a {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.textColor};

    cursor: pointer;
    :hover {
      color: ${({ theme }) => theme.colors.mainColor};
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    display: none;
  }
`;

export const HeaderBar = styled.div`
  display: none;
  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    display: flex;
    svg {
      font-size: 20px;
      cursor: pointer;
    }
  }
`;
