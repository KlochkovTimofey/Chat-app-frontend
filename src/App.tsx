import React, { useState } from "react";
import Menu from "./components/Menu";
import { Routes, Route } from "react-router-dom"
import * as S from "./styled/grid";
import { GlobalStyle } from "./theme/global";
import Home from "./pages/Home";
import Chats from "./pages/Chats";
import Settings from "./pages/Settings";

function App() {
  return (
    <div>
      <S.Grid>
        <Menu />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/chats"} element={<Chats />} />
          <Route path={"/settings"} element={<Settings />} />
        </Routes>
      </S.Grid>
      <GlobalStyle />
    </div>
  );
}

export default App;
