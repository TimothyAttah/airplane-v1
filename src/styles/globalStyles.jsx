import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-padding-top:1rem;
    scroll-behavior: smooth;
  }

  body {
    max-width: 1500px;
    width: 100%;
    margin: auto;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";

    color: #212529;
    text-align: left;
  }

  html,
  body {
    overflow-x: hidden;
    overflow-y: scroll;
    ::-webkit-scrollbar{
      display: none;
    }
  }


ul {
  list-style: none;
  li{
    padding: 0;
    margin: 0;
  }
}

a {
  text-decoration: none;
}

button {
  outline: none;
  border: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
}

input {
   outline: none;
  border: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
}

img {
  ${
    '' /* width: 100%;
  object-fit: cover; */
  }
}
`;
