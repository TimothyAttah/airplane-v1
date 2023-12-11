import styled from 'styled-components';

export const HomeAircraftContainer = styled.div``;
export const HomeAircraftWrapper = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const HomeAircraftTitle = styled.h2`
  font-size: 40px;
  text-align: center;
`;

export const HomeAircraftPrice = styled.h4`
  font-size: 30px;
`;

export const HomeAircraftDetails = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const HomeAircraftButton = styled.button`
  width: 150px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.textLight};
  border-radius: 5px;
  gap: 10px;
  transition: 0.5s;

  :hover {
    margin-top: 5px;
    height: 50px;
  }

  svg {
    font-size: 20px;
  }
`;
