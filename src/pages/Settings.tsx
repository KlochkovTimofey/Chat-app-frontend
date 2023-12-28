import React from "react";
import styled from "styled-components";
import { GridItem } from "../styled/grid";
import { FaRegSun, FaMoon, FaComputer } from "react-icons/fa6";
import { useTheme } from "../contexts/ThemeContext";

const StyledSettings = styled(GridItem)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: transparent;
  border: none;
  gap: 20px;
  & h2 {
    text-align: center;
    align-items: center;
  }

  & .changing-theme {
    text-align: center;
    border: none;
    outline: none;
    width: 50px;
    height: 50px;
    margin: 20px;
    justify-content: center;
    border-radius: 8px;
    background-color: RoyalBlue;

  }
`;

const Settings = () => {
  const { changeTheme } = useTheme();
  return (
    <StyledSettings>
      <GridItem>
        <h2>Theme</h2>

        <button className="changing-theme" onClick={() => changeTheme("light")}>
          <FaRegSun />
        </button>

        <button className="changing-theme" onClick={() => changeTheme("dark")}>
          <FaMoon />
        </button>

        <button className="changing-theme">
          <FaComputer />
        </button>
      </GridItem>

      <GridItem>Language</GridItem>

      <GridItem>Font-Size</GridItem>
    </StyledSettings>
  );
};
export default Settings;
