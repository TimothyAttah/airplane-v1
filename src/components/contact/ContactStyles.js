import styled from 'styled-components';

export const ContactContainer = styled.div`
  /* position: absolute;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  transition: 0.5s; */

  /* top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent; */
`;
export const ContactWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: white;
  max-width: 600px;
  width: 100%;
  height: auto;
  transition: 0.5s;
  padding: 20px;
  border-radius: 10px;

  svg {
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 30px;
    cursor: pointer;
    :hover {
      color: ${({ theme }) => theme.colors.mainColor};
    }
  }

  h2 {
    text-align: center;
    margin: 30px 0;
    color: ${({ theme }) => theme.colors.textColor};
    transition: 0.5s;

    span {
      color: ${({ theme }) => theme.colors.mainColor};
    }
  }

  form {
    width: 100%;

    label {
      display: block;
      font-size: 18px;
    }

    input {
      width: 100%;
      border-bottom: 1px solid #ccc;
      padding: 10px 0;
      margin-bottom: 40px;
      transition: 0.5s;
    }

    textarea {
      width: 100%;
      height: 180px;
      border: none;
      padding: 10px;
      resize: none;
      border-bottom: 1px solid #ccc;
      transition: 0.5s;

      :focus {
        outline: none;
      }
    }

    button {
      width: 150px;
      height: 40px;
      border-radius: 5px;
      font-size: 18px;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.mainColor};
      color: ${({ theme }) => theme.colors.textLight};
      margin: 20px auto;
      transition: 0.5s;
    }
  }
`;
