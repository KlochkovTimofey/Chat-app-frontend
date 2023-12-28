import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Nunito Sans', sans-serif;

}

body {
  background-color: ${({ theme }) => theme.colors.bg};
  color: #FFFFFF;
  
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button, input, textarea {
  border: none;
  outline: none;
}

button {
  cursor: pointer;
}

.linear-wipe {
    text-align: center;
    /* background: linear-gradient(
      to right,
      #fc00ff 20%,
      #00dbde 50%,
      #ec38bc 60%,
      #00e0fd 90%
    ); */
    background: linear-gradient(90deg, #ff00f1 4%, #fe15e1 48%, #00d4ff 70%);
    background-size: 200% auto;
    color: #000;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 1.3s linear infinite;
  }
  @keyframes shine {
    0% {
      background-position: 0% center;
    }
    25% {
      background-position: 50% center;
    }
    50% {
      background-position: 100% center;
    }
    75% {
      background-position: 150% center;
    }
    100% {
      background-position: 200% center;
    }
  }
`;
