import styled from 'styled-components';

export const AboutContainer = styled.section`
  padding: 50px;
`;
export const AboutTextContainer = styled.div`
  max-width: 750px;
  width: 100%;
  margin: auto;

  p {
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 10px;
  }
`;
export const AboutEmailContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 10px;
  background: ${({ theme }) => theme.colors.textColor};
  color: ${({ theme }) => theme.colors.textLight};
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    flex-direction: column;
  }
`;
export const AboutEmailInfoContainer = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid #fff;
  h3 {
    font-size: 30px;
  }
  p {
    font-size: 14px;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    h3 {
      font-size: 25px;
    }
  }
`;
export const AboutEmailOptionsContainer = styled.div`
  padding-top: 10px;
  p {
    font-size: 18px;
    line-height: 30px;

    span {
      font-weight: bold;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    p {
      font-size: 14px;
      line-height: 22px;
    }
  }
`;
export const AboutInputEmailBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 600px;
  button {
    background-color: ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.textLight};
    width: 150px;
    height: 40px;
    font-size: 18px;
    border-radius: 10px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    text-transform: uppercase;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    button {
      width: 120px;
      font-size: 14px;
    }
  }
`;
export const InputBox = styled.div`
  max-width: 600px;
  width: 100%;
  input {
    width: 100%;
    height: 40px;
    font-size: 18px;
    border-radius: 10px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    padding: 0 10px;
  }
`;
// export const AboutContainer = styled.div``;
