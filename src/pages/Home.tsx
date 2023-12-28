import React from "react";
import { GridItem } from "../styled/grid";
import styled from "styled-components";

const StyledHome = styled(GridItem)`
  display: flex;
  justify-content: center;
  align-items: center;
  & h1 {
    font-size: 3.3rem;
  }
`;

const Home = () => {
  return <StyledHome><h1 className="linear-wipe">Welcome to ChatApp!</h1></StyledHome>;
};

export default Home;
