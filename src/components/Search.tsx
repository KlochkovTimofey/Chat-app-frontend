import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GridItem } from "../styled/grid";
import { StyledSearch } from "../styled/search";
const Search = () => {
  return (
    <StyledSearch>
      <button>
        <AiOutlineSearch />
      </button>

      <input type="text" placeholder="Search" />
    </StyledSearch>
  );
};

export default Search;
