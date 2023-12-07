import styled from 'styled-components';

export const MainHeaderContainer = styled.header`
  position: sticky;
  width: 100%;
  height: 80px;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999px;
  /* border: 2px solid red; */

  h1 {
    color: ${({ theme }) => theme.colors.textColor};
    span {
      color: ${({ theme }) => theme.colors.mainColor};
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
